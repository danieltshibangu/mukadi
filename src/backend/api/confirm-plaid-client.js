/* 
Connected to login form 
If a user logs in, search for their unique plaid access token, 
and redirect them to their unique dashboard 

they just need their access token to access any other plaid request

FOR THIS ROUTE, THE USER'S ID IS NEEDED 
request => user.id
response => access_token
*/ 

import supabase from '/lib/supabase';
import { useRouter } from 'next/router';
import { useUser } from '../../context/user';




const confirmAccess = async (req, res) => {
    // create a random string as a secret to secure this route
    // check if user has passed a query param for the secret 
    if ( req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET) {
        return res.status(401).send('You are not authorized to call this api.');
    }
    const user = supabase.auth.user();
    const { curr_user } = useUser();
    
    let ACCESS_TOKEN = req.body.uid;

  
    // get the current access token of the user if they are authenticated
    ACCESS_TOKEN = await supabase
        .from('profile')
        .update('access_token')
        .eq('id', curr_user.id)


    res.send(ACCESS_TOKEN);
};

export default confirmAccess



