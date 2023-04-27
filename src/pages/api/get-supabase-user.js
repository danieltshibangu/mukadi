import supabase from "../../../supabase/supabase-config";
import cookie from 'cookie'

const getUserHandler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (!user) {
        return res.status(401).send('Unauthorized')
    }

    // set token to cookie
    const token = cookie.parse(req.headers.cookie)["sb-access-token"]

    // sb helper function for providing a custom access_token
    supabase.auth.setAuth(token)

    return user
}

export default getUserHandler 