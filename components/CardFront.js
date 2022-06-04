import React from 'react';
import styles from '../styles/cardfront.module.css'

// using useState to change the color of cards when selected, so curr card changes when selected
import { useState } from 'react';

const CardFront = () => {

  const { cardColor, setCardColor } = useState('');
  return (
      <div className={styles['card-list-info']}>

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


        <div className={`${styles.card2} ${styles['card-design']}`}></div>
        <div className={`${styles.card3} ${styles['card-design']}`}></div>

          {/* <div className={styles['curr-card']}>
        
            <img className={styles['card-icon']} src='/mastercard-2.svg' />
            

            <div styles={{ display: 'flex'}}>
              <img className={styles['card-dots']} src='/card-dots.svg' />
              <p className={styles['card-number']}>0782</p>
            </div>
            <p className={styles['card-type']}>Credit Card </p>
            <p className={styles['exp-text']}>Expires</p>
            <p className={styles['exp-date']}>05.22</p>
          </div>*/}
      </div> 
  );
};

export default CardFront