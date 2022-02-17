import React from 'react';
import styles from '../styles/centercard.module.scss'

export const CenterCard = ({creditScore}) => {
  return (
    <article>
        <div className={styles.card}>
            <p className={styles['credit-title']}>Credit Score</p>
            <p className={styles['credit']}>{creditScore}</p>
            <img className={styles['leaves-pos']} src='card-leaves.svg' />
        </div>
    </article>
  );
};
