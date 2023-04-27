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
    const subtype = req.query.subtype;
    const id = Number(req.query.id);

    //find account that has the code
    if (subtype === 'checking') {
         const { data } = await supabase 
        .from('profile')
        .select('checking_tokens')

        let fixedTokenString = data[0].checking_tokens[id-1].replace(/'/g, `"`)
        console.log(fixedTokenString)
        let parsedTokenString = JSON.parse(fixedTokenString)

        let addedIncomeString ={
            payment_date: payday, 
            schedule: schedule,
        }

        console.log(addedIncomeString)

        // add into our income object
        parsedTokenString['incomeData'] = addedIncomeString

        //console.log(parsedTokenString)

        //change the json obj back to json string for storage
        let tokenString = JSON.stringify(parsedTokenString)
        tokenString = tokenString.replace(/"/g, `'`)

        let incomeArray = []
        incomeArray.push(tokenString)

        console.log(incomeArray)


        const { error } = await supabase
          .from('profile')
          .update({
            auto_income: incomeArray
          })
          .match({ id: user.id})

          if (error) {
            console.log(error) 
          } else {
            res.send(200);
          }
     }
  
    } catch (err) { console.log(err)}
  } 
}