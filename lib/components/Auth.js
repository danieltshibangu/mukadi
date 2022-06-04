import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Auth() {
    const [loading, setloading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (email) => {
        try{
            setloading(true)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
            alert( "Check your email for login link!")
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setloading(false)
        }
    }

    return (
        <></>
    )
}