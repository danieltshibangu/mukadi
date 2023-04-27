import axios from 'axios';
import cookie from 'cookie'
import dayjs  from "dayjs";
import getSavingsAccess from '../../../utils/getSavingsAccess';
import getUserServerSide from '../../../utils/getCurrentUser';
import supabase from '/supabase/supabase-config'


const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            // // get the current user 
            const userID = await getUserServerSide(req, req.headers)
        

            const {data, error} = await supabase
                .from('profile')
                .select('savings_tokens')
                .eq('id', userID)

            if (error) {
                console.log(err)
            }

            let now = dayjs();
            const transaction_opt = 'YYYY-MM-DD'
        
            let start = now.subtract(7, 'day').format(transaction_opt).toString()
            let six_days_ago = now.subtract(6, 'day').format(transaction_opt).toString()
            let five_days_ago = now.subtract(5, 'day').format(transaction_opt).toString()
            let four_days_ago = now.subtract(4, 'day').format(transaction_opt).toString()
            let three_days_ago = now.subtract(3, 'day').format(transaction_opt).toString()
            let two_days_ago = now.subtract(2, 'day').format(transaction_opt).toString()
            let end = now.subtract(1, 'day').format(transaction_opt).toString()
            let high = 0;
            let low = 0;

            let recent_trans_list = ({
                seven_days_ago: { date: start, expense: 0, gain: 0},
                six_days_ago: { date: six_days_ago, expense: 0, gain: 0}, 
                five_days_ago: { date: five_days_ago, expense: 0, gain: 0}, 
                four_days_ago: { date: four_days_ago, expense: 0, gain: 0},
                three_days_ago: { date: three_days_ago, expense: 0, gain: 0}, 
                two_days_ago: { date: two_days_ago, expense: 0, gain: 0},
                yesterday: { date: end, expense: 0, gain: 0},
            })

            //console.log(Object.values(getSavingsAccess(data)))

            const savingsTokenList = Object.values(getSavingsAccess(data))
            //console.log(typeof(checkingTokenList))

            // push checking tokens into the list 
            for (let a=0; a < savingsTokenList.length; a++) {
                let user_access_code = Buffer.from(savingsTokenList[a], 'utf8').toString('base64');
                
                const transactionsResponse = await axios.post('http://localhost:8000/transactions', {}, {
                params: {
                    access: user_access_code,
                    start: start,
                    end: end,
                }
            });

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

                            if (transactionsResponse.data[i].amount < 0)
                            stored_date[a].gain += -(transactionsResponse.data[i].amount)
                        }
                    }
                }
            }

            res.json(recent_trans_list)

            
        } catch (err) { console.log(err)}
    };
};


export default handler