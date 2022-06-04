import React from 'react'
import styles from '../styles/app-design/subscriptions.module.css';
import { Button } from 'react-bootstrap';

const SubscriptionExample = () => {
  return (
    <div style={{
        
    }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
            <hr style={{width: '5px',opacity: '1', height: '13rem', backgroundColor: 'black', border: 'none'}} />

            <div className={styles['sub-detail']}>
            <p className={styles['sub-name']}>Netflix</p>
            <p className={styles['sub-type']} style={{ margin: '7% 0 3% 0'}}>Entertainment</p>
            <p className={styles['sub-type']} style={{ margin: '0 0 3% 0'}}>Tied to: x0782</p>
            <p className={styles['first-payment']}>First Payment: on Oct. 19 2022</p>

            <div style={{ marginTop: '5%'}}>
                <span><p className={styles['sub-price']}>$13.05</p></span>
                <span><p className={styles['renew-date']}>renews June 6</p></span>
            </div>

            <Button 
                className={styles['sub-link-btn']} 
                variant="outline-primary" 
                type="link"
                href=""
            >
                <span>Cancel Subscription</span>
            </Button>
            </div>
            
            <div style={{ display: 'flex', width: '100%', marginLeft: '10%'}}>
            <div>
            <div className={styles['sub-pie-wrapper']}>
            <div style={{ lineHeight: '150%'}}>
                <p className={styles['sub-title']}>% of Monthly Income</p>
                <p className={styles['sub-amount']}>12.2%</p>
                <p className={styles['sub-date']}>Updated Today</p>
                </div>

                <div style={{ marginTop: '7%', lineHeight: '150%'}}>
                <p className={styles['sub-title']}>% out of all Subscriptions</p>
                <p className={styles['sub-amount']}>35.02%</p>
                <p className={styles['sub-date']}>Updated Jan. 16</p>
                </div>
            </div>
            </div>

            <div style={{ }}>
            <div style={{ lineHeight: '150%'}}>
                <p className={styles['sub-title']}>Paid Since Sign Up</p>
                <p className={styles['sub-amount']}>$135.56</p>
                <p className={styles['sub-date']}>Updated Dec. 9</p>
                </div>

                <div style={{ marginTop: '7%', lineHeight: '150%'}}>
                <p className={styles['sub-title']}>Expected Annual Cost</p>
                <p className={styles['sub-amount']}>$122.76</p>
                <p className={styles['sub-date']}>Updated Today</p>
                </div>
            </div> 
            </div>
        
            </div>
    </div>
  )
}

export default SubscriptionExample