import React from 'react'
import styles from '../styles/apphomebudgetbreakdown.module.scss'

const AppHomeBudgetBreakdown = () => {
  return (
    <div className={styles['outside']}>
        
        <div style={{ height: '50%', width: '100%', display: 'flex'}}>
            <div className={styles['container1']}>
                <div className={styles['container-info']}>
                    <p className={styles['tag-title']}>Upcoming Charge</p>
                    <p className={styles['sub-name']}>Uber Eats Pass</p>
                    <p className={styles['sub-price']}>+$9.12 monthly / +$82.24 yearly</p>
                    <p className={styles['sub-renew']}>Renews Jan. 29, 2022</p>

                    <button className={styles['manage-button']}>Manage</button>
                </div>
            </div>

            <div className={styles['side-info']}>
                <div>
                    <p className={styles['side-info-title']}>Total Subscriptions</p>
                    <p className={styles['side-info-details']}>08</p>
                </div>

                <div style={{ marginTop: '9%'}}>
                    <p className={styles['side-info-title']}>Total Paid So Far</p>
                    <p className={styles['side-info-details']}>$23.87</p>
                </div>
            </div>


        </div>

        <div className={styles['subscription-text']}>
        <i class='bx bxs-quote-alt-left' style={{ marginRight: '3%', fontSize: '1.5rem'}} ></i>
        You pay <b>$53.17</b> a month in subscriptions.
        <i class='bx bxs-quote-alt-right' style={{ marginLeft: '3%', fontSize: '1.5rem'}}></i>
        </div>


        <div style={{display: 'flex', alignItems: 'center'}}>

        <div className={styles['side-info-expense']}>
                <div style={{ backgroundColor: '#E8A997', borderRadius: '10%', height: '80%', padding: '10%', width: '100%'}}>
                    <p className={styles['side-info-title']}>Spent This Week</p>
                    <p className={styles['side-info-details']}>$22.14</p>
                    <p className={styles['side-info-date']}>Since Jan. 3</p>
                </div>
            </div>
            
            <div className={styles['container2']}>    
                <div className={styles['container-info']}>
                    <p className={styles['tag-title']}>Most Recent Charge</p>
                    <p className={styles['sub-name']}>Uber Eats Pass</p>
                    <p className={styles['sub-price']}>+$9.12 monthly / +$82.24 yearly</p>
                    <p className={styles['sub-renew']}>Renews Jan. 29, 2022</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppHomeBudgetBreakdown