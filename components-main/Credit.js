import React from 'react'
import styles from '/styles/component-styles/credit.module.scss'

const Credit = () => {
  return (
    <div>
         <div className={styles.credit}> 
            <header>
              <div className={styles['color-bar']}></div>
              <p>Credit</p>
            </header>
              <div className={styles['credit-content']}>
               

                
             
              <div className={styles['credit-info']}>
                <div className={styles.score}>
                  <div className={styles.dot}></div>
                  <p className={styles['credit-score']}>702</p>
                  <div className={styles.rate}>
                    <p className={styles.points}>Fair</p>
                  </div>
                </div>

                <div className={styles.score}>
                  <div className={styles.dot}></div>
                  <p className={styles['credit-score']}>702</p>
                  <div className={styles.rate}>
                    <p className={styles.points}>Fair</p>
                  </div>
                </div>
              </div>
              
              
             

         
            

            {/* <div className={styles['extra-credit']}>
            
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
            </div> */}
            </div>
            </div>
            </div>
    

  )
}

export default Credit