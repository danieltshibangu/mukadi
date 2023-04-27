// calculate the total expected income based on 
// 1. income from their bank account 
// 2. anything else we are told..

import axios from "axios";

const calculateIncome = async (token) => {

    console.log(token)

    //send specified token to transactions in backend 
    const designated_token = Buffer.from(token, 'utf8').toString('base64');
      
      const accountResponse = axios.get('http://localhost:8000/income', {
        params: { access: designated_token },
         headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
      });

      const accountData = await accountResponse;
      console.log(accountData);
  


}

export default calculateIncome;