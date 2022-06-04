import React from 'react'
import styles from '../../styles/tabs-styling/upcomingcharge.module.css'

function UpcomingChargeTab() {
  return (
    <div>
        <div className={styles['container1']}>
                <div className={styles['container-info']}>
                    <p className={styles['tag-title']}>Upcoming Charge</p>
                    <p className={styles['sub-name']}>Uber Eats Pass</p>
                    <p className={styles['sub-price']}>+$9.12 monthly / +$82.24 yearly</p>
                    <p className={styles['sub-renew']}>Renews Jan. 29, 2022</p>
                </div>
            </div>
    </div>
  )
}

export default UpcomingChargeTab