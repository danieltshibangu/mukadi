import supabase from "/supabase/supabase-config";
import cookie from 'cookie'


export default async function getUserServerSide (request, requestHeaders) {
    const { user } = await supabase.auth.api.getUserByCookie(request);

    // if (!user) {
    //     return res.status(401).send('Unauthorized')
    // }

    // // set token to cookie
    const token = cookie.parse(requestHeaders.cookie)["sb-access-token"]

    // // sb helper function for providing a custom access_token
    supabase.auth.setAuth(token)

    return user.id
}