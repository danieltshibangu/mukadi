import axios from 'axios'

// send the savings total to the app 
const sendSavingsTotal = async (token) => {
    
    const designated_token = Buffer.from(token, 'utf-8').toString('base64');

    const accountResponse = axios.get('http://localhost:8000/accounts/user', {
        params: { access: designated_token },
         headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
      });

      const accountData = await accountResponse;
      const numOfAccounts = accountData.data.accounts.length;
      let savingsTotal = 0;

      for (let i=0; i < numOfAccounts; i++ ) {
          if (accountData.data.accounts[i].subtype == 'savings') {
              savingsTotal += accountData.data.accounts[i].balances.current
          }
      }

      //formatting
      let dollarFormatUS = Intl.NumberFormat('en-US', {
        style: "currency", 
        currency: "USD"
    })

    return dollarFormatUS.format(savingsTotal);
};

export default sendSavingsTotal;