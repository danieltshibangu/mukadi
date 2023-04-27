import React, { Component } from 'react';
import styles from '../styles/login-box.module.scss'
import { useState, useEffect } from 'react';
import  Link from 'next/link'
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios';
import supabase from '../supabase/supabase-config';
import { useAuth } from '../context/user';


export default function SignInForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    const DASHBOARD = 'http://localhost:5000/app'
    const INTEGRATION = 'http://localhost:5000/integration'

   
    const {login} = useAuth();

    const handleClick = (new_email, new_password) => {
            setLoading(true);   // shows 'loading' instead of button
            try {
                login(new_email, new_password)
            } catch(error) {
                setLoading(false)
                console.log(error)
                setEmail('')
                setPassword('')
            }

    }

    return (




        
        <div className={styles['login-box']}>
            <div className={styles['left-content']}>
            <Form className={styles['form-grid']} style={{ width: '120%'}}>
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
                        handleClick(email, password)   
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
