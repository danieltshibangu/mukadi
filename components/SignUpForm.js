import React, { Component } from 'react';
import styles from '../styles/login-box.module.scss'
import handleSignup from '../pages/api/auth/signup-auth';
import { useState } from 'react';
import  Link from 'next/link'
import { Layout } from './Layout';
import { Form, Button } from 'react-bootstrap';

// create state for login 
// create signup 


export default function SignUpForm() {

    const [loading, setloading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')


    return (
        <div className={styles['login-box']}>
            <Layout />
            <div className={styles['left-content']}>
            <Form onSubmit={handleSignup} className={styles['form-grid']}>
                <div style={{ display: 'flex', }}>
                <Form.Group className={styles['firstName-field']} controlId="formFirstName">
                    <Form.Label style={{ fontFamily: 'Poppins', fontSize: '0.8rem'}}>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="John" 
                        className={styles['input-style']}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                
                <Form.Group className={styles['lastName-field']} controlId="formLastName">
                    <Form.Label style={{ fontFamily: 'Poppins', fontSize: '0.8rem'}}>Last Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Doe" 
                    className={styles['input-style']}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                </div>

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
                        handleSignup(firstName, lastName, email, password)
                        setFirstName('')
                        setLastName('')
                        setEmail('')
                        setPassword('')
                    }}
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Create Account'}</span>
                </Button>
            </Form>
            </div>
        </div>
    )
}


