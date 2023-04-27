require('dotenv').config();
const express = require('express');
const router = express.Router;
const { supabase } = require('../api/supabase/auth/config')

// THOUGHT: can't be anything more than a function as the array 
// of access tokens must be read on arrival, plus can't be stored anywhere 
// but maybe as an (http-cookie)? if possible

// gets all access token for each savings account and stores in array 


const compileSavingsTokens = async() => {
    const {data, error} = await supabase.from('profile').select('savings_tokens')

    // hold all tokens for this account type 
    const savingsAccounts = {};
    const keyName = ''
    const valueName = ''

    // access [] the array that holds all the data
    let newData = data[0];
    const numOfAccounts = newData.savings_tokens.length

    // for each account in our array,
    // access each account, and fix the string to enable parsing into object
    // store key and value (i.e account title and token into object)
    for (let account = 0; account < numOfAccounts; account++ ) {
        let fixedTokenString = newData.savings_tokens[account].replace(/'/g, `"`)
        let parsedTokenString = JSON.parse(fixedTokenString)


        // get the name of the account as the key 
        for ( var key in parsedTokenString) { keyName = key; break }
        console.log(keyName)

        // get the value of this key
        valueName = Object.values(parsedTokenString)[0].access
        console.log(valueName);

        // store these in object as key-value pair 
        savingsAccounts[keyName] = valueName;
        console.log(savingsAccounts);
    }

    // returns list of access tokens for all savings 
    return savingsAccounts;

}

module.exports.compileSavingsTokens = compileSavingsTokens