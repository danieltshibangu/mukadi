import supabase from "/supabase/supabase-config";
import cookie from 'cookie'


// if any changes to 'checking_tokens' or 'savings_tokens' name, 
// the rpc functions may not work 

// calls the accounts function of plaid to get a user's linked account info 
// reads the access code of each given account 
// adds to supabase database as type jsonb



export default async function handler(req, res) {
  if ( req.method === 'POST') {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);

    if (!user) {
        return res.status(401).send('Unauthorized')
    }

    // set token to cookie
    const token = cookie.parse(req.headers.cookie)["sb-access-token"]

    // sb helper function for providing a custom access_token
    supabase.auth.setAuth(token)

    // define variables  
    const payday = req.query.payment_date.slice(0, 10); 
    const schedule = req.query.pay_schedule
    const total = req.query.amount;

    // create object that hold all manual income data
    let incomeData = { 
      total: total, 
      schedule: schedule, 
      payday: payday
    }

    // format the data to fit JSONB format
    incomeData = JSON.stringify(incomeData).replace(/"/g, `'`)

    // create array, then push income data into that array 
    let incomeArray = []
    incomeArray.push(incomeData)

    // feed that array into database for storage
    const { error } = await supabase
    .from('profile')
    .update({
      manual_income: incomeArray,
      isVerified: true
    })
    .match({ id: user.id})

    if (error) {
      console.log(error) 
    } else {
      res.send(200);
    }

  
    } catch (err) { console.log(err)}
  } 
}