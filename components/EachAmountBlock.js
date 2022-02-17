import React from 'react';
import styles from '../styles/eachamountblock.module.scss'
import cx from 'classnames'


export const EachAmountBlock = ({amountBlock}) => {
  return (
  <div className={styles['entire-block']}>
      <div className={cx({[styles.earnings] : amountBlock.id === 1, 
                         [styles.savings] : amountBlock.id === 2,
                         [styles.expenses] : amountBlock.id === 3,
                         [styles.budget] : amountBlock.id === 4,})}>
        <div className={styles['icon-block']}></div>
        <p className={styles.title}>{amountBlock.title}</p>
        <p className={styles.amount}>{amountBlock.amount}</p>
        <p className={styles.rate}>{amountBlock.rate}</p>
        </div>   
  </div>
  );
};

export default EachAmountBlock;