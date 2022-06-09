import React from 'react'
import styles from '../styles/topbar.module.scss'
import { InputGroup, Button, FormControl} from 'react-bootstrap'

const Topbar = () => {
  return (
    <header className={styles['header']}>
        <div className={styles.content}>
            <div className={styles.message}>
            <h3 className={styles['main-text']}>Welcome back, Daniel</h3>
            </div>
            


            <div className={styles['notif-profile']}>
                <i class='bx bx-bell' ></i>
                <i class='bx bx-message-dots' ></i>
                <div className={styles['profile-details']}>
                    <div className={styles['profile-content']}>
                        <img src="/homepage-header.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Topbar