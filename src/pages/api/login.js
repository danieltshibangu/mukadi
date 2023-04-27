import supabase from "/supabase/supabase-config";

export default async function login (req, res) {
    if (req.method === "POST") {
        const encodedEmail = req.query.email;
        const encodedPassword = req.query.password;

        const user_email = Buffer.from(encodedEmail, 'base64').toString('utf8');
        const user_password = Buffer.from(encodedPassword, 'base64').toString('utf8');

        console.log(user_email)
        console.log(user_password)
        const { data: success, error } = await supabase.auth.signIn({
            email: user_email, 
            password: user_password
        });


        if (error) { 
            console.log(error)
        } else {
            res.send(200);
        }
    }
}
