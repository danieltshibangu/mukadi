import React from 'react'
import styles from '../styles/app-design/subscriptions.module.css';

const SuggestionsIndex = () => {
  return (
    <div>
        
        
        <div style={{ display: 'flex'}}>

            
            

            <div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div className={styles.priority1}>
                    <i class='bx bxs-heart' style={{ height: '6vh', width: '6vh', fontSize: '2rem', textAlign: 'center', padding: '20% 0'}} ></i>
                    </div>

                    <span className={styles['priority-info-box']}>
                        <p className={styles['priority-title']}>Emergency Savings</p>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <p className={styles['amount-change']}>$33,122.05</p> 
                            <i class='bx bx-chevrons-left' style={{ margin: '0 0.2rem', fontSize: '2rem'}}></i>
                            <p className={styles['old-amount']}>$32,988.02</p>
                        </div>
                        <p className={styles['priority-rate']}>+0.005% | +$134.03</p>
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div className={styles.priority2}>
                    <i class='bx bx-plus-medical' style={{ height: '6vh', width: '6vh', fontSize: '2rem', textAlign: 'center', padding: '20% 0'}}></i>
                    </div>

                    <span className={styles['priority-info-box']}>
                        <p className={styles['priority-title']}>Medical Savings</p>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <p className={styles['amount-change']}>$28,466.08</p> 
                            <i class='bx bx-chevrons-left' style={{ margin: '0 0.2rem', fontSize: '2rem'}}></i>
                            <p className={styles['old-amount']}>$27,346.85</p>
                        </div>
                        <p className={styles['priority-rate']}>+ 0.04% | + $1,119.23</p>
                    </span>
                </div>
                </div>
                
                <div style={{ marginLeft: '10%'}}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div className={styles.priority3}>
                    <i class='bx bxs-coin' style={{ height: '6vh', width: '6vh', fontSize: '2rem', textAlign: 'center', padding: '20% 0'}} ></i>
                    </div>

                    <span className={styles['priority-info-box']}>
                        <p className={styles['priority-title']}>Roth Ira</p>
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <p className={styles['amount-change']}>$8,401.02</p> 
                            <i class='bx bx-chevrons-left' style={{ margin: '0 0.2rem', fontSize: '2rem'}}></i>
                            <p className={styles['old-amount']}>$6,111.05</p>
                        </div>
                        <p className={styles['priority-rate']}>+27.25% | +$2,289.97</p>
                    </span>
                </div>

                <div className={styles['repay-debt-tab']}>
                    <div className={styles['repay-debt-wrapper']}>
                        <p className={styles['debt-title']}>Debt Repayment</p> 
                        <p className={styles['debt-name']}>Discover Credit Card <br />x0782</p>
                        <div style={{ display: 'flex', alignItems: 'baseline', marginLeft: '20%'}}>
                            <p className={styles['debt-total']}>$178.00</p>
                            <i class='bx bx-right-arrow-alt' style={{ margin: '0 3%'}} ></i>
                            <p className={styles['new-total']}>$130.00</p>
                        </div>
                        <p className={styles['priority-rate']} 
                                        style={{ textAlign: 'center', marginTop: '3%'}}>-23.52% | +$48.00</p>
                    </div>
                </div>
                </div>
                    

                </div>
    </div>
  )
}

export default SuggestionsIndex