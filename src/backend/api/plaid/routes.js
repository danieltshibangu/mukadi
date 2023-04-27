'use strict';
require('dotenv').config();
const express = require('express');
const router = express.Router();
const util = require('util');

// initalizations for accessing plaid 
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const APP_PORT = process.env.APP_PORT || 8000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'development';


// PLAID_PRODUCTS is a comma-separated list of products to use when initializing
// Link. Note that this list must contain 'assets' in order for the app to be
// able to create and retrieve asset reports.
const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || 'auth, transactions, balance').split(
    ',',
  );


  // PLAID_COUNTRY_CODES is a comma-separated list of countries for which users
// will be able to select institutions from.
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(
    ',',
  );

// Parameters used for the OAuth redirect Link flow.
//
// Set PLAID_REDIRECT_URI to 'http://localhost:3000'
// MUST BE AN HTTPS, NOT A HTTP
// The OAuth redirect flow requires an endpoint on the developer's website
// that the bank website should redirect to. You will need to configure
// this redirect URI for your client ID through the Plaid developer dashboard
// at https://dashboard.plaid.com/team/api.
const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || 'http://localhost:5000/app';

// We store the access_token in memory - in production, store it in a secure
// persistent data store
let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

// Initializing the plaid client 
const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-ClIENT-ID': PLAID_CLIENT_ID, 
            'PLAID-SECRET': PLAID_SECRET, 
            'Plaid-Version': '2020-09-14',
        },
    },
});

const client = new PlaidApi(configuration);
    


// method for printing json reponses to the backend console
const prettyPrintResponse = (response) => {
    console.log(util.inspect(response.data, { colors: true, depth: 4 }));
};  

// returns info about authorization of current user
router.post('/info', function (request, response, next) {
    response.json({
        item_id: ITEM_ID, 
        access_token: ACCESS_TOKEN, 
        products: PLAID_PRODUCTS,
    });
});

// returns error (unformatted)
const formatError = (error) => {
    return {
        error: { ...error.data, status_code: error.status },
    };
};

// method for pretty printing errors for readablity
router.use('/', function (error, request, response, next) {
    prettyPrintResponse(error.response);
    response.json(formatError(error.response));
  });

// Create a link token with configs which we can then use to initialize Plaid Link client-side.
// See https://plaid.com/docs/#create-link-token
router.post('/create_link_token', function (request, response, next) {
    Promise.resolve()
      .then(async function () {
        const configs = {
          user: {
            // This should correspond to a unique id for the current user.
            client_user_id: 'user-id',
          },
          client_name: 'Plaid Quickstart',
          products: PLAID_PRODUCTS,
          country_codes: PLAID_COUNTRY_CODES,
          language: 'en',
        };

            try{
                const createTokenResponse = await client.linkTokenCreate(configs);
                prettyPrintResponse(createTokenResponse);
                response.json(createTokenResponse.data);
            } catch (err) {console.log(err)}

      })
      .catch(next);
  });

// Exchange tokens - exchange our link token for 
// an API access token
router.post('/set_access_token', function (request, response, next) {
    PUBLIC_TOKEN = request.body.public_token;
    Promise.resolve()
    .then(async function () {

        try {
        const tokenResponse = await client.itemPublicTokenExchange({
            public_token: PUBLIC_TOKEN, 
        });
        prettyPrintResponse(tokenResponse);
        ACCESS_TOKEN = tokenResponse.data.access_token;
        ITEM_ID = tokenResponse.data.item_id;
    } catch (err) {console.log(error)}

        response.json({
            access_token: ACCESS_TOKEN,
            item_id: ITEM_ID, 
            error: null,
        });
    })
    .catch(next);
});



// Retrieve Transactions for an Item
// https://plaid.com/docs/#transactions
router.get('/transactions/sync', function (request, response, next) {
    Promise.resolve()
      .then(async function () {
        // Set cursor to empty to receive all historical updates
        let cursor = null;
  
        // New transaction updates since "cursor"
        let added = [];
        let modified = [];
        // Removed transaction ids
        let removed = [];
        let hasMore = true;
        // Iterate through each page of new transaction updates for item
        while (hasMore) {
          const request = {
            access_token: ACCESS_TOKEN,
            cursor: cursor,
          };
          const response = await client.transactionsSync(request)
          const data = response.data;
          // Add this page of results
          added = added.concat(data.added);
          modified = modified.concat(data.modified);
          removed = removed.concat(data.removed);
          hasMore = data.has_more;
          // Update cursor to the next cursor
          cursor = data.next_cursor;
          //prettyPrintResponse(response);
        }
  
        const compareTxnsByDateAscending = (a, b) => (a.date > b.date) - (a.date < b.date);
        // Return the 8 most recent transactions
        //const recently_added = [...added].sort(compareTxnsByDateAscending).slice(-8);
        const recently_added = [...added].sort(compareTxnsByDateAscending);
        response.json({latest_transactions: recently_added});
      })
    .catch(next);
});

// get transactions 
router.post('/transactions', function (request, response, next) {
    Promise.resolve()
    .then( async function () {
        try{
            // get and decode access token
            const encodedToken = request.query.access;
            const starting = request.query.start;
            const ending = request.query.end;

            const user_access_token = Buffer.from(encodedToken, 'base64').toString('utf8');

            const transactionResponse = await client.transactionsGet({
                access_token: user_access_token, 
                start_date: starting, 
                end_date: ending
            });



            let transactions = transactionResponse.data.transactions;
            const total_transactions = transactionResponse.data.local_transactions;

            console.log(transactions)

            // manipulate offset parameter to paginate 
            // retrievee all available data 
            while (transactions.length < total_transactions ) {
                const paginatedRequest = {
                    access_token: user_access_token, 
                    start_date: starting, 
                    end_date: ending,
                    options: {
                        offset: transactions.length,
                    },
                };
                const paginatedResponse = await client.transactionsGet(paginatedRequest);
                transactions = transactions.concat( 
                    paginatedResponse.data.transactions,
                );
            }
            response.json(transactions)
            console.log(transactions)
        } catch(err) { console.log(err)}    
    })
    .catch(next);
})



// retrieves an item's accounts (using specific access token)
router.post('/accounts/user', function(request, response, next) {
    Promise.resolve()
    .then(async function () {
        const encodedToken = request.query.access;
        console.log(typeof(encodedToken))
        
        const user_access_token = Buffer.from(encodedToken, 'base64').toString('utf8'); 
        try {
            //console.log(user_access_token)
            const accountsResponse = await client.accountsGet({
            access_token: user_access_token, 
        });

        //prettyPrintResponse(accountsResponse);
        response.json(accountsResponse.data);
        } catch (err) { console.log(err)}
        
        
    }) 
    .catch(next);
})

// retrieves an item's accounts
router.get('/accounts', function(request, response, next) {
    Promise.resolve()
    .then(async function () {
        try {
            const accountsResponse = await client.accountsGet({
            access_token: ACCESS_TOKEN, 
            });

            //prettyPrintResponse(accountsResponse);
            response.json(accountsResponse.data);
            
        } catch(err) { console.log(err)}
            
        
        
    }) 
    .catch(next);
})


// retrieve ACH or ETF auth data for an items 
router.get('/identity', function(request, response, next) {
    Promise.resolve()
    .then(async function () {
        const identityResponse = await client.identityGet({
            access_token: ACCESS_TOKEN,
        });
        //prettyPrintResponse(identityResponse);
        response.json({ identity: identityResponse.data.accounts });
    })
    .catch(next);
})

// Retrieve real-time Balances for each of an Item's accounts 
router.get('/balance', function (request, response, next) {
    Promise.resolve()
    .then(async function () {
        const balanceResponse = await client.accountsBalanceGet({
            access_token: ACCESS_TOKEN,
            secret: PLAID_SECRET,
            
        });
        //prettyPrintResponse(balanceResponse);
        response.json(balanceResponse.data);
    })
    .catch(next);
})


module.exports = router;

  
