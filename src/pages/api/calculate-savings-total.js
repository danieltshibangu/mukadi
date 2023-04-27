import axios from 'axios';
import supabase from '../../../supabase/supabase-config';
import compileSavingsTokens from './compile-savings-tokens';
import cookie from 'cookie'

const handler = async (req, res) => {
            if (req.method === 'GET') {
                try {
            // get the current user 
            const { user } = await supabase.auth.api.getUserByCookie(req);


            if (!user) {
                return res.status(401).send('Unauthorized')
            }

            // set token to cookie
            const token = cookie.parse(req.headers.cookie)["sb-access-token"]

            // sb helper function for providing a custom access_token
            supabase.auth.setAuth(token)

            const {data, error} = await 
                supabase.from('profile')
                .select('savings_tokens')
                .eq('id', user.id)

            //console.log(data)

            if (error) {
                console.log(err)
            }

            // hold all tokens for this account type 
            let savingsAccounts = {};
            let keyName = ''
            let valueName = ''

            // access [] the array that holds all the data
            let newData = data[0];
            //console.log('newData: ' + newData)
            const numOfAccounts = newData.savings_tokens.length

            // for each account in our array,
            // access each account, and fix the string to enable parsing into object
            // store key and value (i.e account title and token into object)
            for (let account = 0; account < numOfAccounts; account++ ) {
                let fixedTokenString = newData.savings_tokens[account].replace(/'/g, `"`)
                //console.log(fixedTokenString)
                let parsedTokenString = JSON.parse(fixedTokenString)


            // // get the name of the account as the key 
            for ( var key in parsedTokenString) { keyName = key; break }
            //console.log(keyName)

            // // get the value of this key
            valueName = Object.values(parsedTokenString)[0].access
            //console.log(valueName);

            // // store these in object as key-value pair 
            savingsAccounts[keyName] = valueName;
            //console.log(checkingAccounts);
            }

            //console.log(checkingAccounts)

            const savingsTokens = Object.values(savingsAccounts)

            // holds the total 
            let savings_total = 0;
            //holds the number of accounts 
            let num_of_accounts = 0;

      
            for (let i=0; i < savingsTokens.length; i++ ) {
                let curr_access_token = savingsTokens[i]
                //console.log('current: ' + curr_access_token)
                let designated_token = Buffer.from(curr_access_token, 'utf8').toString('base64');
                //console.log('designated: ' + designated_token)


                const accountResponse = axios.post('http://localhost:8000/accounts/user', {}, {
                    params: { access: designated_token },
                    headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                });

                 const accountData = await accountResponse;
                 console.log(accountData.data)

                const eachAccount = Object.keys(accountData.data.accounts).length
                // has to loop through the accounts within each accountResponse 
                for (let a=0; a < eachAccount; a++) {
                    // in those accounts, verify they are checkings
                    if (accountData.data.accounts[a].subtype == 'checking') {
                        // add the current amount in that account to the total
                        num_of_accounts++;
                        savings_total += accountData.data.accounts[a].balances.current
                    }
                }
           }

            // formating 
            let dollarFormatUS = Intl.NumberFormat('en-US', {
                style: "currency", 
                currency: "USD"
            })

            //console.log('total is ' + checking_total)

            res.json({
                total: dollarFormatUS.format(savings_total), 
                count: num_of_accounts
            })
        } catch (err) { console.log(err)}
    };
};


export default handler
