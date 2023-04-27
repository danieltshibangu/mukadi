import getUserHandler from "./get-supabase-user";
import supabase from "/supabase/supabase-config";
import cookie from 'cookie'
// check if user is verified through supabase, send them to the dashboard, otherwise 
// send to integration 

export default async function checkIntegration(req, res) {
    if (req.method === "POST") {
            // identifies user based on cookies
        const { user } = await supabase.auth.api.getUserByCookie(req);
        console.log({user})

        if (!user) {
            return res.status(401).send('Unauthorized')
        }
    
        // set token to cookie
        const token = cookie.parse(req.headers.cookie)["sb-access-token"]
    
        // sb helper function for providing a custom access_token
        supabase.auth.setAuth(token)
    
        console.log(user)
    
        
        const { data: status, error } =  await supabase  
            .from('profile')
            .select('isVerified')
            

            if (error) {
                console.log(error)
            } else {
                res.json({
                    verified: status
                });
            }
    }
    
}
