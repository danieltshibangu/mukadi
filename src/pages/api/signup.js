import supabase from "/supabase/supabase-config";


export default async function signup(req, res) {
    const encodedEmail = req.query.email;
    const encodedPassword = req.query.password;
    const encodedFirstName = req.query.firstName;
    const encodedLastName = req.query.lastName;

    const user_email = Buffer.from(encodedEmail, 'base64').toString('utf8');
    const user_password = Buffer.from(encodedPassword, 'base64').toString('utf8');
    const first_name = Buffer.from(encodedFirstName, 'base64').toString('utf8');
    const last_name = Buffer.from(encodedLastName, 'base64').toString('utf8');


    const { error } = await supabase.auth.signUp( 
        {user_email, user_password}, 
        {data: {first_name, last_name}}
    )


        if (error) { 
            console.log(error)
        } else {
            res.sendStatus(200);
        }

}
