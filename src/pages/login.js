import React from 'react'
import styles from '/styles/login.module.scss';
import Link from 'next/link'
import SignInForm from '/components/SignInForm';

const login = () => {
  return (
    <div className={styles.loginPage}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.marketing}></div>


                <div className={styles.login}>
                    <div className={styles.introText}>
                        <h2>Welcome back
                            <span className={styles['ending-dot']} style={{ color: '#FFC700'}}>.</span>
                        </h2>
                        <p>Start organizing your finances today.</p>
                    </div> 

                    <div className={styles['signin-form']}>
                        <SignInForm />
                    </div>

                    <div className={styles.linkToReg}>
                        <p className={styles.subtitle}>Don't have an account yet?<br/>
                            <Link href="http://localhost:5000/login">
                                <a style={{ color: "#009BFF", fontSize: '1rem', fontWeight: '700'}}>
                                Register Here
                                </a>
                            </Link>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default login