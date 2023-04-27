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
        let total_savings_this_month = 0;
    
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

            for ( let i=0; i < transactionsResponse.data.length; i++) {
                // negative means money added 
                if (transactionsResponse.data[i].amount < 0)
                    total_savings_this_month += transactionsResponse.data[i].amount
                
            }

            // testing...
            //console.log(total_expenses)


        }
        // get every transaction in 30 days
        // add all into a final amount for the month 
        // keep it in a list and store it somewhere 

        // this works but i'm getting a strange invalid url error for some reason...
       res.json(total_savings_this_month)
        } catch (err) { console.log(err)}
    }
}



