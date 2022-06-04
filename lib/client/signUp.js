// import supabse to gain permissions for anon client
// gain the anon key and url 
import supabase from "../supabase";

// the general signup fomula
// will return a new user and session
const { user, session, error } = await supabase.auth.signUp(
    {
    email: 'example@email.com', 
    password: 'abc123',
    },
    {
        // you can include extra data
        data: {
            first_name: 'Dan', 
            last_name: 'Tshibangu', 
            DOB: '10/19/1998'
        }
    }
)

