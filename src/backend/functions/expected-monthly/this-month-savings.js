// cycle through database for savings access tokens 
// couter to add savings 

import axios from "axios";
import supabase from "../../../../lib/supabase"

const totalSavingsCounter = async () => {

    let firstDayOfCurrMonth = new Date().getFullYear().toString()
                            + '-' + 
                            (new Date().getMonth() + 1).toString().padStart(2, "0") +
                            '-01';

    let today = new Date().toISOString().slice(0, 10);

    let savingsTotal = 0.0;
    // cycle through savings tokens 

    const {data} = await supabase
        .from('profile')
        .select('savings_tokens')

        let newData = data[0];
        newData = Object.values(newData)[0]
        console.log(newData)

        for (let i = 0; i < newData.length; i++ ) {
            const unmodifiedToken = newData[i].replace(',', '').split(" ");
            const finalToken = unmodifiedToken[3]

            // try to get the balance of each and save to variable 
            const designated_token = Buffer.from(finalToken, 'utf8').toString('base64');

            const TransactionsResponse = axios.get('http://localhost:8000/transactions', {
                params: { 
                    access: designated_token,
                    start: firstDayOfCurrMonth,
                    end: today,
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            });
            
            const transactionData = await TransactionsResponse;
            

            // cycle through transaction data and only get amounts 
            for ( let i = 0; i < transactionData.data.length; i++) {
                if (transactionData.data[i].amount < 0 ){
                    savingsTotal += transactionData.data[i].amount;
                }
            }
        }

        return savingsTotal;
}

export default totalSavingsCounter;