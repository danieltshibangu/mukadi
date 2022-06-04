import React from 'react'
import styles from '../styles/app-design/subscriptions.module.css';
import Link from 'next/link'
import data from "../charts/subCardData";
import { Button } from 'react-bootstrap';
import SubscriptionHistoryList from './SubscriptionHistoryList';


function SubscriptionInfo({sub, recentSub}) {


  return (
      <div style={{  marginLeft: '5%', width: '100%'}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <hr style={{width: '5px',opacity: '1', height: '13rem', backgroundColor: 'black', border: 'none'}} />

            <div className={styles['sub-detail']}>
            <p className={styles['sub-name']}>{sub.title}</p>
            <p className={styles['sub-type']} style={{ margin: '7% 0 3% 0'}}>{sub.type}</p>
            <p className={styles['sub-type']} style={{ margin: '0 0 3% 0'}}>Tied to: {sub.card}</p>
            <p className={styles['first-payment']}>First Payment: on {sub.firstPayment}</p>

            <div style={{ marginTop: '5%'}}>
                <span><p className={styles['sub-price']}>${sub.amount}</p></span>
                <span><p className={styles['renew-date']}>renews {sub.renewDate}</p></span>
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

          

            <div className={styles['sub-pie-details']}>
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

            <div style={{ marginLeft: '3%'}}>
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

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <i class='bx bxs-quote-alt-left' style={{ fontSize: '2rem'}}></i>
        <p style={{ 
            fontFamily: 'Poppins',
            fontSize: '1.2rem', 
            fontWeight: 200, 
            margin: '0 1%', 
            padding: '2% 1%'
        }}>Consider these places to re-invest this subscription.</p>
        <i class='bx bxs-quote-alt-right' style={{ fontSize: '2rem'}}></i>
        </div>

        <div className={styles['suggestions']}>
          <div className={styles['sub-choices']}>
            <div className={styles['sub-choices-wrapper']}>
                
                <div className={styles['suggestion-header']}>
                    <p style={{ display: 'flex', 
                                justifyContent: 'center', 
                                margin: '0 0 2% 0', 
                                fontWeight: 400 }}>Suggestions</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                        <div className={styles.dot}></div>
                    </div>
                </div>

                <p style={{ fontWeight: 400, opacity: 0.5}}>If canceled:</p>

                <div className={styles['alt-suggestion']}>
                <ul>
                    <li>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <i class='bx bxs-circle' ></i>
                        <div style={{lineHeight: '100%'}}>
                        <p style={{ margin:0 }}>Increase Food Budget</p>
                        <sub>+$10.32 monthly / +$101.24 annually / +14.22%</sub>
                        </div>
                        <i class='bx bx-chevron-right' style={{
                            fontSize: '2.4rem', 
                            marginRight: '10%',
                        }} ></i>
                    </div>
                    </li>

                    <li style={{ marginTop: '5%'}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <i class='bx bxs-circle'></i>
                        <div style={{lineHeight: '100%'}}>
                        <p style={{ margin:0 }}>Increase Food Budget</p>
                        <sub>+$10.32 monthly / +$101.24 annually / +14.22%</sub>
                        </div>
                        <i class='bx bx-chevron-right' style={{
                            fontSize: '2.4rem', 
                            marginRight: '10%',
                        }} ></i>
                    </div>
                    </li>                    
                </ul>
                </div>
            </div> 
        </div>

            <div style={{ display: 'flex'}}>

            <div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div className={styles.priority1}>
                    <i class='bx bxs-heart' style={{ height: '6vh', width: '6vh', fontSize: '2rem', textAlign: 'center', padding: '20% 0'}} ></i>
                    </div>

                    <span className={styles['priority-info-box']}>
                        <p className={styles['priority-title']}>Emergency Savings</p>
                        <div style={{ display: 'flex', alignItems: 'baseline'}}>
                            <p className={styles['amount-change']}>$32,988.02</p> 
                            <i class='bx bx-chevrons-left' style={{ margin: '0 0.2rem', fontSize: '1.2rem'}}></i>
                            <p className={styles['old-amount']}>$33,122.05</p>
                        </div>
                        <p className={styles['priority-rate']}>+3.22% | +$10.32</p>
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div className={styles.priority2}>
                    <i class='bx bx-heart' style={{ height: '6vh', width: '6vh'}} ></i>
                    </div>

                    <span className={styles['priority-info-box']}>
                        <p className={styles['priority-title']}>Emergency Savings</p>
                        <div style={{ display: 'flex', alignItems: 'baseline'}}>
                            <p className={styles['amount-change']}>$32,988.02</p> 
                            <i class='bx bx-chevrons-left' style={{ margin: '0 0.2rem', fontSize: '1.2rem'}}></i>
                            <p className={styles['old-amount']}>$33,122.05</p>
                        </div>
                        <p className={styles['priority-rate']}>+3.22% | +$10.32</p>
                    </span>
                </div>
                </div>
                
                <div style={{ marginLeft: '10%'}}>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                    <div className={styles.priority3}>
                    <i class='bx bx-heart' style={{ height: '6vh', width: '6vh'}} ></i>
                    </div>

                    <span className={styles['priority-info-box']}>
                        <p className={styles['priority-title']}>Emergency Savings</p>
                        <div style={{ display: 'flex', alignItems: 'baseline'}}>
                            <p className={styles['amount-change']}>$32,988.02</p> 
                            <i class='bx bx-chevrons-left' style={{ margin: '0 0.2rem', fontSize: '1.2rem'}}></i>
                            <p className={styles['old-amount']}>$33,122.05</p>
                        </div>
                        <p className={styles['priority-rate']}>+3.22% | +$10.32</p>
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
                                        style={{ textAlign: 'center', marginTop: '3%'}}>+3.22% | +$10.32</p>
                    </div>
                </div>
                </div>
                    

                </div>
            
            
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15%' }}>
        <i class='bx bxs-quote-alt-left' style={{ fontSize: '2rem'}}></i>
        <p style={{ 
            fontFamily: 'Poppins',
            fontSize: '1.2rem', 
            fontWeight: 200, 
            margin: '0 1%', 
            padding: '0 1%'
        }}>Never a bad idea to audit and review purchases.</p>
        <i class='bx bxs-quote-alt-right' style={{ fontSize: '2rem'}}></i>
        </div>

        <div style={{ display: 'flex', height: '30vh', marginTop: '3%'}}>
            
            

            <div style={{height: '110%', width: '34vh', overflowY: 'scroll', marginTop: '5.5%'}}>
                <SubscriptionHistoryList recentSub={recentSub} />
            </div>
        </div>
    </div>
  )
}

export default SubscriptionInfo