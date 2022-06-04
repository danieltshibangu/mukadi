import React from 'react'
import styles from '../../styles/tabs-styling/cancelledsub.module.css'

function CancelledSubTab() {
  return (
    <div>
        <div className={styles['container1']}>
                <div className={styles['container-info']}>
                    <p className={styles['tag-title']}>Last Cancelled Subscription</p>
                    <p className={styles['sub-name']}>Uber Eats Pass</p>
                    <p className={styles['sub-price']}>+$9.12 monthly / +$82.24 yearly</p>
                    <p className={styles['sub-renew']}>Renews Jan. 29, 2022</p>
                </div>
            </div>
    </div>
  )
}

export default CancelledSubTab