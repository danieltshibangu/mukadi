import React, {useState} from 'react';
import CardCircle from './cardCircle';
import clsx from 'clsx';
import styles from '../styles/carddatablock.module.scss'

const CardDataBlock = () => {

    
const [ currentCardData, setCurrentCardData ] = useState([
    {
        id: 1,
        title: 'Current Total', 
        amount: '$1,766.88', 
        extraInfo: '-2.33%'
      },
      {
        id: 2,
        title: 'Recent Expense', 
        amount: '-$7.17', 
        extraInfo: 'On 10, Sep. 2021 at 3 PM' 
      }, 
      {
        id: 3,
        title: 'Upcoming Charge', 
        amount: '$12.41', 
        extraInfo: 'On 10, Sep. 2021 at 3 PM'
      },
      {
        id: 4,
        title: 'Recent Deposit', 
        amount: '$414.12', 
        extraInfo: 'On 10, Sep. 2021 at 3 PM'
      },
]);

  return (
    <div style={{ position: 'relative'}}>
      <p className={styles['system-tip']}>You're expected to make <b>$4,145.22</b> this month.</p>
      
  <div className={styles['grid-container']}>

        <div className={styles['grid-item-1']}>
          <div className={styles['current-total']}>
            <p className={styles.title}>Current Total</p>
            <p className={styles.amount}>$1,766.88</p>
            <p className={styles.rate}>-2.33%</p>
          </div>
        </div>


        <div className={styles['grid-item-2']}>
          <div className={styles['recent-expenses']}>
            <p className={styles.title}>Recent Expense</p>
            <p className={styles.amount}>-$7.17</p>
            <p className={styles.rate}>On 10, Sep. 2021 at 3 PM</p>
          </div>
        </div>

        <div className={styles['grid-item-3']}>
          <div className={styles['upcoming-charge']}>
            <p className={styles.title}>Upcoming Charge</p>
            <p className={styles.amount}>$12.41</p>
            <p className={styles.rate}>On 10, Sep. 2021 at 3 PM</p>
          </div>
        </div>

        <div className={styles['grid-item-4']}>
          <div className={styles['recent-deposit']}>
            <p className={styles.title}>Recent Deposit</p>
            <p className={styles.amount}>$414.12</p>
            <p className={styles.rate}>On 10, Sep. 2021 at 3 PM</p>
          </div>
        </div>
      </div>

        <div className={styles['more-info']}>
            <p className={styles['info-text']}>More</p>
            <i class='bx bx-right-arrow-alt' style={{ fontSize: '23px'}}></i>
          </div>
  </div>
  )
};

export default CardDataBlock;
