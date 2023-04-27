import supabase from "/supabase/supabase-config";
import cookie from 'cookie'
import dayjs from "dayjs";


// if any changes to 'checking_tokens' or 'savings_tokens' name, 
// the rpc functions may not work 

// calls the accounts function of plaid to get a user's linked account info 
// reads the access code of each given account 
// adds to supabase database as type jsonb



export default async function appendPlaidUser(req, res) {
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

    const today = dayjs();
    const transaction_opt = 'YYYY-MM-DD'
  
      const accountResponse = req.query.acctResponse;
      const accessToken = req.query.accessResponse;

      let accountData = (Buffer.from(accountResponse, 'base64').toString('utf8')); 
      let infoData = (Buffer.from(accessToken, 'base64').toString('utf8')); 

      // parse them 
      accountData = JSON.parse(accountData).data;
      infoData = JSON.parse(infoData).data;
  
  
        // insert data into column for checking
        for ( let i=0; i < accountData.accounts.length; i++) {
          if (accountData.accounts[i].subtype == 'checking') {
            // format and add data to jsonb column
            console.log(accountData.accounts.length) 
            const { data, error } = await supabase
              .rpc('update_checking_tokens', {
                id_input: user.id, 
                val_input: '{'
                              + "'" + accountData.accounts[i].name + "'" +':' +
                             '{ \'access\': ' + "'" + infoData.access_token + "'" + ', ' +
                              '\'code\': ' + "'" + infoData.access_token.slice(-4) + "'" + ', ' +
                              '\'id\': ' + "'" + i+1 + "'" + ', ' +
                              '\'subtype\': '+ "'" + accountData.accounts[i].subtype + "'" + ',' +
                              '\'name\': '+ "'" + accountData.accounts[i].name + "'" + ',' +
                              '\'date-added\': '+ "'" + today.format(transaction_opt).toString() + "'" + '}' +
                            '}'
              });
  
              // handle errors here if any
              if (error) {
                console.log(error);
              } else { console.log(data)}
            }
            // insert data into column for savings
            else if (accountData.accounts[i].subtype == 'savings') {
              // format and add data to jsonb column 
              const { data, error } = await supabase
              .rpc('update_savings_tokens', {
                id_input: user.id, 
                val_input: '{'
                              + "'" + accountData.accounts[i].name + "'" +':' +
                             '{ \'access\': ' + "'" + infoData.access_token + "'" + ', ' +
                             '\'code\': ' + "'" + infoData.access_token.slice(-4) + "'" + ', ' +
                             '\'id\': ' + "'" + i+1 + "'" + ', ' +
                              '\'subtype\': '+ "'" + accountData.accounts[i].subtype + "'" + ',' +
                              '\'name\': '+ "'" + accountData.accounts[i].name + "'" + ',' +
                              '\'date-added\': '+ "'" + today.format(transaction_opt).toString() + "'" + '}' +
                            '}'
              });
  
                // handle errors here if any
                if (error) {
                  console.log(error);
                } else {
                  const {data, error} = await supabase
                    .from('profile') 
                    .update({ isVerified: 'true'})
                    .eq('id', user.id)

                    if (error) {
                      console.log(error)
                    } else {
                      res.send(200)
                    }
                }
            }
        }  
  } catch (err) { console.log(err)}
  // manipulate the res gotten from account
  // need to aquire name, subtype and accessToken 
      // end of for loop here
  }
  
}



       
