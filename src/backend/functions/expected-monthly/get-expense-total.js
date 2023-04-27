// trying to get the highest purchase of the month 
// scan through transactions for the month
// test them against one in a variable
// return the highest number 

import axios from "axios";

const expenseTotal = async (token, first, last) => {
    const designated_token = Buffer.from(token, 'utf8').toString('base64');

    

      
    const TransactionsResponse = axios.get('http://localhost:8000/transactions', {
      params: { 
          access: designated_token,
          start: first,
          end: last,
        },
          
       headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
    });

    const transactionData = await TransactionsResponse;
    let transactionTotal = 0.0;

    // cycle through transaction data and only get amounts 
    for ( let i = 0; i < transactionData.data.length; i++) {
      if (transactionData.data[i].amount > 0 ){
        transactionTotal += transactionData.data[i].amount;
      }
      
    }


    return transactionTotal


}

export default expenseTotal;