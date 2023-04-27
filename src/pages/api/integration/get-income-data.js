import supabase from "/supabase/supabase-config";
import cookie from 'cookie'
import axios from "axios";
import dayjs from "dayjs";
import { DatePicker } from "react-widgets/cjs";

// if any changes to 'checking_tokens' or 'savings_tokens' name, 
// the rpc functions may not work 

// calls the accounts function of plaid to get a user's linked account info 
// reads the access code of each given account 
// adds to supabase database as type jsonb



export default async function handler(req, res) {
  if ( req.method === 'GET') {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);

        if (!user) {
            return res.status(401).send('Unauthorized')
        }

        // set token to cookie
        const token = cookie.parse(req.headers.cookie)["sb-access-token"]

        // sb helper function for providing a custom access_token
        supabase.auth.setAuth(token)


         // access and get data from supabase 
         const { data, error} = await supabase
         .from('profile')
         .select('auto_income')

        // target string then parse data
        let newData = (data[0]['auto_income'])
        newData = (newData[0]).replace(/'/g, `"`)

        // returns object of inner income data we need
        newData = JSON.parse(newData)

        // get object of inner values to use
        newData = Object.values(newData)

        // store needed values 
        const name = newData[0].name;
        const subtype = newData[0].checking; 
        const dateAdded = newData[0]['date-added'];

        // break down the payday date into month and day
        const date = new Date(newData[1].payment_date)
        const month = date.toLocaleString('default', {month: 'long'});
        const day = date.toLocaleString('default', {day: 'numeric'}).padStart(2, "0");
        const paydayDate = [month, day];
        const schedule = newData[1].schedule;

        // get a list of all deposits from pay day 
        let transxction_date = newData[1].payment_date
        const transaction_opt = 'YYYY-MM-DD'

        // gets the day and converts to a dayjs, then to a number
        let transxction_dateDay = dayjs(new Date(transxction_date)).get('date')

        // using the recieved day to get the next day needed for an ending node
        let endOfDay = dayjs(new Date(transxction_date)).set('day', transxction_dateDay+3)

        endOfDay = endOfDay.format(transaction_opt).toString()
        let user_access_code = Buffer.from(newData[0].access, 'utf8').toString('base64');

        const transactionsResponse = await axios.post('http://localhost:8000/transactions', {}, {
          params: {
              access: user_access_code,
              start: '2022-12-01',
              end: '2023-01-01',
          }
      });

      // an object for every deposit drawn to exist in 
      let depositList = {};

      // get the actual deposits and put them in a list 
      for (let item=0; item < transactionsResponse.data.length; item++) {
        if (transactionsResponse.data[item].amount < 0) {
            const transx_name = transactionsResponse.data[item].name
            const transx_amount = Math.abs(transactionsResponse.data[item].amount)

            depositList[item] = {name: transx_name, amount: transx_amount}
        }
      }

        
        res.json({
          name: name, 
          subtype: subtype, 
          dateAdded: dateAdded, 
          paydayDate: paydayDate, 
          schedule: schedule, 
          deposits: depositList
        })
 

        } 
    catch(err) {console.log(err)}
    }
}