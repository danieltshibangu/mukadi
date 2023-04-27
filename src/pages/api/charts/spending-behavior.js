import axios from 'axios';
import supabase from '/supabase/supabase-config';
import cookie from 'cookie'
import dayjs  from "dayjs";
import compileCheckingTokens from '../../../../utils/compile-checkings-tokens';

const handler = async (req, res) => {
            if (req.method === 'GET') {
                try {
            // get the current user 
            const { user } = await supabase.auth.api.getUserByCookie(req);


            if (!user) {
                return res.status(401).send('Unauthorized')
            }

            // set token to cookie
            const token = cookie.parse(req.headers.cookie)["sb-access-token"]

            // sb helper function for providing a custom access_token
            supabase.auth.setAuth(token)

            //  CORE LOGIC 

            // list to show how days would stack up

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
                seven_days_ago: { date: start, expense: 23.88, gain: 0},
                six_days_ago: { date: six_days_ago, expense: 100, gain: 0}, 
                five_days_ago: { date: five_days_ago, expense: 12, gain: 387.76}, 
                four_days_ago: { date: four_days_ago, expense: 89.04, gain: 0},
                three_days_ago: { date: three_days_ago, expense: 1.05, gain: 12.00}, 
                two_days_ago: { date: two_days_ago, expense: 10.00, gain: 0},
                yesterday: { date: end, expense: 23.09, gain: 50.00},
            })

            // get information from compile_checking_tokens
            const result = await compileCheckingTokens();

            // create a list that has every checking token 
            // ex: [1, 2, 3, 4...]
            const checkingTokensList = Object.values(result.checking_tokens)
            console.log(checkingTokensList)

            // cycle through each id in list, access data, store 
            // ex: transaction  
            for (let i = 0; i < checkingTokensList.length; i++) {
                // encode checkingToken for security, to be sent to separate backend 
                let user_access_code = Buffer.from(checkingTokensList[i], 'utf8').toString('base64');
                
                // select id, run it onto transactions Response, end is yesterday's date
                const transactionsResponse = await axios.post('http://localhost:8000/transactions', {}, {
                    params: {
                        access: user_access_code,
                        start: start,
                        end: end,
                    }
                });

                // looks through the list of all transactions made for that account between start and end 
                // maps the premade date in recent_trans_list to the dates of transactions
                for ( let i=0; i < transactionsResponse.data.length; i++) {
                    // cycle through payments made each day 
                    let date = transactionsResponse.data[i].date
                    let stored_date = Object.values(recent_trans_list)

                    for (let a=0; a < Object.values(recent_trans_list).length; a++) {
                        // if the dates in transactions match the ones in our list 
                        if (stored_date[a].date === date){ 
                            // store the transx amount in the amount key of list 
                            if (transactionsResponse.data[i].amount < 0) {
                                stored_date[a].gain += transactionsResponse.data[i].amount
                            } else if (transactionsResponse.data[i].amount > 0) {
                                stored_date[a].gain += transactionsResponse.data[i].amount
                            } else {
                                stored_date[a].gain = 0;
                            }
                        
                        }
                    }
                }
            }

           

    

            res.json(recent_trans_list)
        } catch (err) { console.log(err)}
    };
};


export default handler