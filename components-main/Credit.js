import React from 'react'
import styles from '/styles/component-styles/credit.module.scss'

const Credit = () => {
  return (
    <div>
         <div className={styles.credit}>
              <div className={styles['credit-content']}>
                <header>
                  <div className={styles['color-bar']}></div>
                  <p>Credit</p>
                </header>

                

              <div className={styles['credit-info']}>
                <div className={styles.score}>
                  <div className={styles.dot}></div>
                  <p className={styles['credit-score']}>702</p>
                  <div className={styles.rate}>
                    <p className={styles.points}>+13 points</p>
                  </div>
                </div>
              </div>
              
              <div className={styles['credit-data-table']}>
                <div style={{ paddingBottom: '1.5rem'}}>
                  <p className={styles['credit-title']}>Upcoming Payment</p>
                  <div className={styles.format}>
                    <div className={styles.line}></div>
                    <p className={styles.issuer}>Amex Credit</p>
                  </div>
                  <p className={styles.dueDate}>Wednesday, April 27th</p>
                </div>

                <div className={styles.cardUtil}>
                      <p className={styles['credit-title']}>Total Card Utilization</p>
                      <p className={styles.utilRate}>17.9%</p>
                      <p className={styles.update}>Updated 04/27/22</p>
                    </div>

                 
              </div>

              </div>
            

            <div className={styles['extra-credit']}>
            
              <div className={styles.content}>

                <div className={styles['total-amount']}>
                  
                  <div style={{ display: 'flex', alignItems: 'center'}}>
                    <span style={{ padding: '1rem', width: '50%'}}>
                      <p className={styles.title}>Total Credit Balance</p>
                      <p className={styles.due}>$500.00</p>
                      <p style={{ fontSize: '0.8rem'}}>+12.8% increase from last week</p>
                    </span>

                    <div style={{ textAlign: 'center'}}>
                    <p className={styles.title}>Total Credit Limit</p>
                      <p className={styles.limit}>$3,300</p>
                      <p style={{ fontSize: '0.8rem'}}>Last limit Increase: Nov. 12, 2021</p>
                    </div>
                  </div>

           
                  <div className={styles.progress}>
                    <span className={styles["progress-bar"]} style={{width: "65%"}}></span>
                  </div>
                </div>
              </div>
            </div>
            </div>
</div>
  )
}

export default Credit