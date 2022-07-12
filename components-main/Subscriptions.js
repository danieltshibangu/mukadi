import React, {useState} from 'react'
import Transactions from '/components/Transactions'
import styles from '/styles/component-styles/subscriptions.module.scss'

const Subscriptions = () => {
    const [sub, setSub] = useState([
        {
          id: 0,
          card: 'Chase x0782',
          title: 'Netflix', 
          type: 'Entertainment',
          firstPayment: 'Jan. 2021',
          amount: 10.23, 
          time: '4:45 pm',
          stillActive: 'active',
          renewDate: 'Dec. 23, 2021'
        }, 
        {
          id: 1,
          card: 'Disc. x0185',
          title: 'Hulu', 
          type: 'Entertainment',
          time: '3:27 pm',
          firstPayment: 'Jan. 2021',
          amount: 1.02, 
          stillActive: 'active',
          renewDate: 'Dec. 23, 2021'
          }, 
          {
          id: 2,
          card: 'Amex x5001',
          title: 'Disney Plus', 
          type: 'Entertainment',
          firstPayment: 'Jan. 2021',
          amount: 13.05, 
          time: '3:27 pm',
          stillActive: 'not active',
          renewDate: 'Dec. 23, 2021'
          },
      ])


  return (
    <div>
        <div className={styles['recent-subscriptions']}>
            <header>
              <div className={styles['color-bar']}></div>
              <p className={styles.title}>Latest Subscriptions</p>
            </header>

            <div className={styles.content}>
              

              <div className={styles.transactions}>
                {sub.map((activity, id) => <Transactions activity={activity} />)}
              </div>

            
            </div>
          </div> 
    </div>
  )
}

export default Subscriptions