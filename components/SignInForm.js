import React, { Component } from 'react';
import styles from '../styles/login-box.module.scss'
import handleLogin from '../pages/api/auth/signin-auth';
import { useState } from 'react';
import  Link from 'next/link'
import { Layout } from './Layout';
import { Form, Button } from 'react-bootstrap';

// create state for login 
// create signup 


export default function SignInForm() {

    const [loading, setloading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')

    return (
        <div className={styles['login-box']}>
            <Layout />
            <div className={styles['left-content']}>
            <Form onSubmit={handleLogin} className={styles['form-grid']} style={{ width: '120%'}}>
                <Form.Group className={styles['email-field']} controlId="formEmail">
                    <Form.Label style={{ fontFamily: 'Poppins', fontSize: '0.8rem'}}>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="yourname@email.com" 
                        className={styles['input-style']}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className={styles['password-field']} controlId="formPassword">
                    <Form.Label style={{ fontFamily: 'Poppins', fontSize: '0.8rem'}}>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        value={password}
                        placeholder="yourpassword" 
                        className={styles['input-style']}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

            
                <Button 
                    className={styles['submit-btn']} 
                    variant="primary" 
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogin(email)
                        setEmail('')
                        setPassword('')
                    }}
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Login'}</span>
                </Button>
            </Form>
            </div>
        </div>
    )
}
