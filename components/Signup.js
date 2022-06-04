import { useRef, useState } from 'react'

export function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='input-email'>Email</label>
            <input id="input-email" type="email" ref={emailRef} />
            
            <label htmlFor="input-password">Password</label>
            <input id="input-password" type="password" ref={passwordRef} />
            
            <br />
            
            <button type="submit">Sign Up</button>
            </form>
        </>
    )
}