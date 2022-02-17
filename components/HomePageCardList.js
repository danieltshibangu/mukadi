import React from 'react';
import styles from '../styles/homepagecardlist.module.scss'

export const HomePageCardList = (cardIcon, cardNumber, cardType, expiration) => {
  return (
      <div className={styles['card-list-info']}>
        <div className={styles['back-card']}>
          <div className={styles['inner-banner']}></div>
        </div>
          <div className={styles['curr-card']}>
            <div className={styles['card-number-header']}>
                <img className={styles['card-dots']} src='card-dots.svg' />
                <img className={styles['card-icon']} src='mastercard-2.svg' />
            </div>
            <p className={styles['card-number']}>0782</p>
            <p className={styles['card-type']}>Credit Card </p>
            <p className={styles['exp-text']}>Expires</p>
            <p className={styles['exp-date']}>05.22</p>
          </div>
      </div>
  );
};
