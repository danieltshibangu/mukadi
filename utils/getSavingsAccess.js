

export default  function getSavingsAccess (data) {
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

    //const checkingTokens = Object.values(checkingAccounts)
    //get the individual access token of each account 

    // loop through all 

    return savingsAccounts
}