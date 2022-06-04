// www.mukadi.com/login
import React from 'react'
import { useState } from 'react';
import styles from '../styles/login.module.css';
import Link from 'next/link'
import { Layout } from '../components/Layout';
import SignInForm from '../components/SignInForm';

  

  const signin = () => {
    return (
      <div className={styles['login-page']}>
          <Layout />
          <div className={styles['login-wrapper']}
              style={{ background: 'rgba(110, 212, 124, 0.05)'}}>
              <div className={styles['login-wrapper-overlay']} 
                    style={{ boxShadow: '5px 7px 13px 0px rgba(110, 212, 124, 0.2)'}}>
                <div className={styles['topbar']}>
                    <img src="MUKADI.png" className={styles['site-name']} />
                    <Link href="http://localhost:3000/app"><a className={styles["home-link"]}>Home</a></Link>
                    <Link href="http://localhost:3000/signup"><a className={styles["login-link"]}>Sign Up</a></Link>
                </div>
                <div>
                  <span className={styles['features']}></span>
                  <span className={styles['login']}></span>
                </div>
              <div className={styles['login-dashboard']}>
                <div className={styles['login-details']}>
                  <p className={styles['sub-title']}>FREE TO JOIN
                  </p>

                  <h2 className={styles['new-account-title']}>Welcome back
                  <p className={styles['ending-dot']} style={{ color: '#FFC700'}}>.</p>
                  </h2>

                  
                  <span className={styles['sub-title']}
                        style={{ fontWeight: '700'}}>Wanna join?</span>
                  <span style={{ marginLeft: '1%'}}>
                    <Link href="http://localhost:3000/signup">
                      <a style={{ color: "#009BFF",
                                  fontFamily: 'Raleway', 
                                  fontWeight: '700'}}>
                        Sign Up Here
                      </a>
                    </Link>
                  </span>
                </div>

                <div className={styles['signup-form']}>
                  <SignInForm />
                </div>
              </div>
              <img src="mukadi-logo-black.svg" className={styles['topbar-logo-bottom']}/>
          </div>
        </div>
      </div>
    )
  }

export default signin