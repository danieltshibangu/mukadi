import dayjs  from "dayjs";
import supabase from "../../../supabase/supabase-config";
import compileCheckingTokens from "./compile-checkings-tokens";
import compileSavingsTokens from "./compile-savings-tokens";
import cookie from 'cookie'
import axios from "axios";


export default async function handler (req, res) {
    if (req.method === 'GET') {
        try {
            const { user } = await supabase.auth.api.getUserByCookie(req);
    
        if (!user) {
            return res.status(401).send('Unauthorized')
        }
    
        // set token to cookie
        const token = cookie.parse(req.headers.cookie)["sb-access-token"]
    
        // sb helper function for providing a custom access_token
        supabase.auth.setAuth(token)
    

        let today = dayjs();
        const transaction_opt = 'YYYY-MM-DD'

        let first_of_month = today.date(1).format(transaction_opt).toString()
        today = today.format(transaction_opt).toString()
        let three_recent_savings = ({
            first: { amount: 0, date: null },
            second: { amount: 0, date: null },
            third: { amount: 0, date: null }

        });
    
         // store all savings tokens in a list 
         let savings_token_list = (await compileSavingsTokens()).savings_tokens;
         savings_token_list = Object.values(savings_token_list)
        
        // delete any possible duplicates by arranging into set
        const complete_set = new Set();


        for (let token = 0; token < savings_token_list.length; token++) {
            complete_set.add(savings_token_list[token])
        }

        const complete_token_set = Array.from(complete_set)
        
        //console.log(complete_token_set)
    
        
        // for all tokens in each account
        for (let i=0; i < complete_token_set.length; i++) {
            // use each access code to access their transaction history
            let user_access_code = Buffer.from(complete_token_set[i], 'utf8').toString('base64');

            const transactionsResponse = await axios.post('http://localhost:8000/transactions', {}, {
                params: {
                    access: user_access_code,
                    start: first_of_month,
                    end: today,
                }
            });

            //console.log(transactionsResponse.data.length)
            // let end_of_data = transactionsResponse.data[Object.keys(transactionsResponse.data)[Object.keys(transactionsResponse.data).length - 1]]
            let transactionData = Object.values(transactionsResponse.data)
            //console.log(transactionData[transactionData.length - 1].amount)

            let deposits_list = Object.values(three_recent_savings)

            //console.log(transactionData[transactionData.length -1 ])
            


            // get the last 3 deposits [2, 1, 0]
            // for ( let i=transactionData.length; i > 0; i--) {
            //     // negative means money added 
            //     if (transactionsResponse.data[i].amount < 0) {
            //         deposits_list[i].amount = transactionsResponse.data[transactionData.length - (i+1)].amount
            //         deposits_list[i].date = transactionData[transactionData.length - (i+1)].authorized_date
            //         console.log(deposits_list[i])
            //     } else {
            //         deposits_list[i].amount = 0
            //         deposits_list[i].date = null
            //     }
            // }

            let counter = 3; 
            // counter will track each time a deposit was made until 3 are logged
            // when reaches 3, the loop dies
            while (counter > 0) {
                // loop through the transactions backwards, logging each deposit
                for ( let i=transactionData.length - 1; i >= 0; i--) {
                    // negative means money added 
                    //console.log('the value of i:' + i)
                    if (transactionsResponse.data[i].amount > 0) {
                        deposits_list[i].amount = transactionData[i].amount
                        deposits_list[i].date = transactionData[i].date
                        //console.log(deposits_list[i])
                        // if found, decrease the counter
                        counter = counter - 1;
                    } else {
                        deposits_list[i].amount = 0
                        deposits_list[i].date = null
                    }
                }  
            }

            

            // testing...
            //console.log(three_recent_savings)


        };
        // get every transaction in 30 days
        // add all into a final amount for the month 
        // keep it in a list and store it somewhere 

        // this works but i'm getting a strange invalid url error for some reason...
       res.json(three_recent_savings);

        } catch (err) { console.log(err)}
    }
}



