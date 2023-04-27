import supabase from '/supabase/supabase-config'

const handler = async (req, res) => {
        const cookie = await supabase.auth.api.setAuthCookie(req, res);
}

export default handler 