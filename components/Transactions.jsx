import React from 'react'
import styles from '/styles/transaction.module.scss'
import { Button } from 'react-bootstrap'

const Transactions = ({activity}) => {
  return (
    <div>
        <div className={styles.content}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px'}}>
                <div className={styles.typeIcon}>
                <i class='bx bxs-crown'></i>
                </div>
                <div className={styles['title-date']}>
                    <p className={styles.title}>{activity.title}</p>
                    <p className={styles.date}>{activity.renewDate}</p>
                </div>
            </div>

            <div style={{ width: '31%'}}>
                <p className={styles.amount}>${activity.amount}</p>
                {activity.stillActive == 'active' ? 
                <Button variant="success">Active</Button> 
                : 
                <Button variant="danger">Reactivate?</Button>}
              
            </div>
        </div>
    </div>
  )
}

export default Transactions