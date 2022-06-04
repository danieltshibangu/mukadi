import React from 'react'
import styles from '../styles/app-design/subscriptions.module.css'

const SingleSubscriptionHistory = ({recentSub}) => {
  return (
    <div style={{ width: '100%'}}>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>

            <div>
                <p className={styles['history-sub-name']}>{recentSub.name}</p>
                <p className={styles['history-sub-type']}>{recentSub.type}</p>
            </div>

            <div>
                <p className={styles['history-sub-amount']}>${recentSub.amount}</p>
                <p className={styles['history-sub-date']}>{recentSub.lastPayment}</p>
            </div>
        </div>

        <hr style={{ width: '80%', margin: '5% 0 5% 11%', opacity: '0.1'}} />
    </div>
  )
}

export default SingleSubscriptionHistory