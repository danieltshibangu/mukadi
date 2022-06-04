// handle signup or register process when called
import supabase from '../../../lib/supabase';


const handleSignup = async (firstName, lastName, email, password) => {
    try {
        setloading(true)
    const { error } = await supabase.auth.signUp( {email, password}, {data:{firstName,lastName}} )
    console.log(supabase.auth.user())
    if (error) throw error
    alert( "Check your email for confirmation!")
}   catch (error) {
        alert(error.error_description || error.message)
    } finally {
        setloading(false)
    }
}

export default handleSignup