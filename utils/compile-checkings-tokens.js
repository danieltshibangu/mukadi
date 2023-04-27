import supabase from '/supabase/supabase-config'
import cookie from 'cookie'

// THIS IS A FUNCTION
// CONNECTS TO CALCULATE-CHECKINGS-TOTAL
// THOUGHT: can't be anything more than a function as the array 
// of access tokens must be read on arrival, plus can't be stored anywhere 
// but maybe as an (http-cookie)? if possible

// gets all access token for each checking account and stores in array 

const compileCheckingTokens = async () => {
        try{
        
        
        const {data, error} = await supabase.from('profile').select('checking_tokens')

        // hold all tokens for this account type 
        let checkingAccounts = {};
        let keyName = ''
        let valueName = ''

        // access [] the array that holds all the data
        let newData = data[0];
        console.log('newData: ' + newData)
        const numOfAccounts = newData.checking_tokens.length

        // for each account in our array,
        // access each account, and fix the string to enable parsing into object
        // store key and value (i.e account title and token into object)
        for (let account = 0; account < numOfAccounts; account++ ) {
            let fixedTokenString = newData.checking_tokens[account].replace(/'/g, `"`)
            //console.log(fixedTokenString)
            let parsedTokenString = JSON.parse(fixedTokenString)


        // get the name of the account as the key 
        for ( var key in parsedTokenString) { keyName = key; break }
        //console.log(keyName)

        // get the value of this key
        valueName = Object.values(parsedTokenString)[0].access
        //console.log(valueName);

        // store these in object as key-value pair 
        checkingAccounts[keyName] = valueName;
        //console.log(checkingAccounts);
        }

        // returns list of access tokens for all checking 
       return ({
            checking_tokens: checkingAccounts
        });
        } catch (err) { console.log(err)}
        
    }



export default compileCheckingTokens