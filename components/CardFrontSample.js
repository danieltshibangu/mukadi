import React from 'react'
import styles from '../styles/cardfront.module.css'

const CardFrontSample = () => {
  return (
    <div>
        <div className={`${styles.card1} ${styles['card-design']}`} >
          <div style={{ position: 'relative', height: '100%'}}>
            <img src='/mastercard-2.svg' style={{ height: '3.8rem', marginLeft: '70%', marginTop: '5%'}}/>
          <div className={styles['card-num-design']}>
              <img className={styles['card-dots']} src='/card-dots.svg' />
              <p className={styles['card-number']}>0782</p>
            </div>
            <p className={styles['card-type']}>Credit Card </p>
            <div className={styles['expiration']}>
              <p className={styles['exp-text']}>Expires</p>
              <p className={styles['exp-date']}>05.22</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CardFrontSample
