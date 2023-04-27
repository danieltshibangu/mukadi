
// www.mukadi.com/login
import React from 'react'
import styles from '/styles/signup.module.scss';
import Link from 'next/link'
import SignUpForm from '/components/SignUpForm';
import SignUpSlideshow from '/components/SignUpSlideshow';

  

  const signup = () => {
    return (
      <div className={styles.signUpLayout}>
        <div className={styles.wrapper}>
          <div className={styles.signupFormDisplay}>
            <div className={styles.topLogo}>
              <img src="mukadi-logo-black.svg" className={styles['topbar-logo']}/>
              <img src="MUKADI.png" className={styles['site-name-logo']} />
            </div>

            <div className={styles.introText}>
              <h2>Welcome to Mukadi
                <span className={styles['ending-dot']} style={{ color: '#FFC700'}}>.</span>
              </h2>
              <p><span className={styles.subtitle}>Already a member?</span>  
                <span>
                  <Link href="http://localhost:5000/login">
                    <a style={{ color: "#009BFF", fontSize: '1.1rem', marginLeft: '0.5rem', fontWeight: '700'}}>
                     Log In
                    </a>
                  </Link>
                </span></p>
            </div>

            <div className={styles['signup-form']}>
                  <SignUpForm />
                  <p className={styles.warn}>By signing up, you confirm our<br/>
                  <Link href=""><a style={{ fontWeight: 500}}>Terms of Use </a></Link>
                  and 
                  <Link href=""><a style={{ fontWeight: 500}}> Privacy Policy</a></Link></p>
                </div>
          </div>
          <div className={styles.slider}>
            <SignUpSlideshow />
          </div>
        </div>
      </div>
    )
  }

export default signup