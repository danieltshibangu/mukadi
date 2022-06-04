
// www.mukadi.com/login
import React from 'react'
import { useState } from 'react';
import styles from '../styles/signup.module.css';
import Link from 'next/link'
import SignUpForm from '../components/SignUpForm';
import { Layout } from '../components/Layout';

  

  const signup = () => {

    const [backgroundColor, setBackgroundColor] = useState('rgba(189, 214, 245, 0.2)')
    const [boxShadow, setBoxShadow ] = useState('5px 7px 13px 0px rgba(189, 214, 245, 0.6)')


    return (
      <div className={styles['login-page']}>
          <Layout />
          <div className={styles['login-wrapper']}>
              <div className={styles['login-wrapper-overlay']}>
                <div className={styles['topbar']}>
                    <img src="MUKADI.png" className={styles['site-name']} />
                    <Link href="http://localhost:3000/app"><a className={styles["home-link"]}>Home</a></Link>
                    <Link href="http://localhost:3000/signin"><a className={styles["login-link"]}>Login</a></Link>
                </div>
                <div>
                  <span className={styles['features']}></span>
                  <span className={styles['login']}></span>
                </div>
              <div className={styles['login-dashboard']}>
                <div className={styles['login-details']}>
                  <p className={styles['sub-title']}>FREE TO JOIN
                  </p>

                  <h2 className={styles['new-account-title']}>Create new account
                  <p className={styles['ending-dot']}>.</p>
                  </h2>

                  
                  <span className={styles['sub-title']}
                        style={{ fontWeight: '700'}}>Already a Member?</span>
                  <span style={{ marginLeft: '1%'}}>
                    <Link href="http://localhost:3000/signin">
                      <a style={{ color: "#009BFF",
                                  fontFamily: 'Raleway', 
                                  fontWeight: '700'}}>
                        Log In
                      </a>
                    </Link>
                  </span>
                </div>

                <div className={styles['signup-form']}>
                  <SignUpForm />
                </div>
              </div>
              <img src="mukadi-logo-black.svg" className={styles['topbar-logo-bottom']}/>
          </div>
      </div>
      </div>
    )
  }

export default signup