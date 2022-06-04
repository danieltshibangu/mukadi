import supabase from '../../../lib/supabase';

const handleLogin = async (email) => {
    try{
        setloading(true)
        const { error } = await supabase.auth.signIn({email})
        if (error) throw error
        alert( "Check your email for login link!")
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        setloading(false)
    }
}

export default handleLogin