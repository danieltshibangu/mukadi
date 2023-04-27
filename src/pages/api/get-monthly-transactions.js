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
    
        let now = dayjs();
        const transaction_opt = 'YYYY-MM-DD'
    
        let start = now.subtract(7, 'day').format(transaction_opt).toString()
        let six_days_ago = now.subtract(6, 'day').format(transaction_opt).toString()
        let five_days_ago = now.subtract(5, 'day').format(transaction_opt).toString()
        let four_days_ago = now.subtract(4, 'day').format(transaction_opt).toString()
        let three_days_ago = now.subtract(3, 'day').format(transaction_opt).toString()
        let two_days_ago = now.subtract(2, 'day').format(transaction_opt).toString()
        let end = now.subtract(1, 'day').format(transaction_opt).toString()

        let recent_trans_list = ({
            seven_days_ago: { date: start, expense: 0, gain: 0},
            six_days_ago: { date: six_days_ago, expense: 0, gain: 0}, 
            five_days_ago: { date: five_days_ago, expense: 0, gain: 0}, 
            four_days_ago: { date: four_days_ago, expense: 0, gain: 0},
            three_days_ago: { date: three_days_ago, expense: 0, gain: 0}, 
            two_days_ago: { date: two_days_ago, expense: 0, gain: 0},
            yesterday: { date: end, expense: 0, gain: 0},
        })
    
        // store all checking tokens in a list 
        let checking_token_list = (await compileCheckingTokens()).checking_tokens;
        checking_token_list = Object.values(checking_token_list)
    
        // store all savings tokens in a list 
        let savings_token_list = (await compileSavingsTokens()).savings_tokens;
        savings_token_list = Object.values(savings_token_list)

        let complete_list = savings_token_list.concat(checking_token_list)

        //console.log(typeof(complete_list))
        const complete_token_list = Object.values(complete_list)
        
        // delete duplicates by arranging into set
        const complete_set = new Set();
        for (let token = 0; token < complete_token_list.length; token++) {
            complete_set.add(complete_list[token])
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

            //console.log(transactionsResponse.data[0].authorized_date)

            for ( let i=0; i < transactionsResponse.data.length; i++) {
                // cycle through payments made each day 
                let date = transactionsResponse.data[i].date
                let stored_date = Object.values(recent_trans_list)

                for (let a=0; a < Object.values(recent_trans_list).length; a++) {
                    // if the dates in transactions match the ones in our list 
                    if (stored_date[a].date == date){ 
                        // store the transx amount in the amount key of list 
                        if (transactionsResponse.data[i].amount > 0)
                        stored_date[a].expense += transactionsResponse.data[i].amount

                        if (transactionsResponse.data[i].amount <= 0)
                        stored_date[a].gain += -(transactionsResponse.data[i].amount) 
                    }
                }
                
            }

            // testing...
            //console.log(recent_trans_list)


        }
        // get every transaction in 30 days
        // add all into a final amount for the month 
        // keep it in a list and store it somewhere 

        // this works but i'm getting a strange invalid url error for some reason...
       res.json(recent_trans_list)
        } catch (err) { console.log(err)}
    }
}



