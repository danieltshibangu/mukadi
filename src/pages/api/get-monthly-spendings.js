import dayjs  from "dayjs";
import supabase from "../../../supabase/supabase-config";
import compileCheckingTokens from "./compile-checkings-tokens";
import compileSavingsTokens from "./compile-savings-tokens";
import cookie from 'cookie'
import axios from "axios";


export default async function handler (req, res) {
    if (req.method === 'POST') {
        try {
            const { user } = await supabase.auth.api.getUserByCookie(req);
    
        if (!user) {
            return res.status(401).send('Unauthorized')
        }
    
        // set token to cookie
        const token = cookie.parse(req.headers.cookie)["sb-access-token"]
    
        // sb helper function for providing a custom access_token
        supabase.auth.setAuth(token)
    

        let start = req.query.starting_date; 
        let end = req.query.ending_date;
        let total_expenses = 0;
    
        // store all checking tokens in a list 
        let checking_token_list = (await compileCheckingTokens()).checking_tokens;
        checking_token_list = Object.values(checking_token_list)
        
        // delete any possible duplicates by arranging into set
        const complete_set = new Set();


        for (let token = 0; token < checking_token_list.length; token++) {
            complete_set.add(checking_token_list[token])
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
                    start: start,
                    end: end,
                }
            });

            //console.log(transactionsResponse.data.length)

            for ( let i=0; i < transactionsResponse.data.length; i++) {
                // cycle through payments made each day 
                if (transactionsResponse.data[i].amount > 0)
                    total_expenses += transactionsResponse.data[i].amount
                
            }

            // testing...
            //console.log(total_expenses)


        }
        // get every transaction in 30 days
        // add all into a final amount for the month 
        // keep it in a list and store it somewhere 

        // this works but i'm getting a strange invalid url error for some reason...
       res.json(total_expenses)
        } catch (err) { console.log(err)}
    }
}



