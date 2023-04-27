import React, { Component } from 'react';
import styles from '/styles/signup-box.module.scss'
import { useState } from 'react';
import  Link from 'next/link'
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios';


// create state for login 
// create signup 


export default function SignUpForm() {

    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const LOGIN= 'http://localhost:5000/login'

    const handleClick = async (firstName, lastName, email, password) => {

        setLoading(true);   // shows 'loading' instead of button

        email = Buffer.from(email, 'utf8').toString('base64');
        password = Buffer.from(password, 'utf8').toString('base64');
        firstName = Buffer.from(firstName, 'utf8').toString('base64');
        lastName = Buffer.from(lastName, 'utf8').toString('base64');

        try {
            const signupResponse = await axios.post( 'http://localhost:8000/api/signup', {}, {
            params: {
                firstName: firstName, 
                lastName: lastName,
                email: email, 
                password: password
            },
            headers: {
                'Content-Type': 'application/json'
            }
            });

            if (signupResponse.status == 200) router.push(LOGIN)
            
        } catch (err) {
            setLoading(false);
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        }
}

    

    return (
        <div className={styles['login-box']}>
            <div className={styles['left-content']}>
            <Form className={styles['form-grid']}>
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
                        handleClick(firstName, lastName, email, password)
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


