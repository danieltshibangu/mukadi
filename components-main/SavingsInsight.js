import React from 'react'
import PolarSavingsChart from '/charts/PolarSavingsChart'
import styles from '/styles/component-styles/savingsinsight.module.scss'


const SavingsInsight = () => {
  return (
    <div>
        <div className={styles.savingsPredictions}>
            <header>
              <div className={styles['color-bar']}></div>
              <p>Savings Insights</p>
            </header>

          <div className={styles.moreInfo}>
            <div className={styles.savingsInfo}>
              <p className={styles.title}>Deposit Total This Month</p>
              <p className={styles.amount}>$510.00</p>
            </div>
            <div className={styles.savingsInfo}>
              <p className={styles.title}>Expected Growth This Year</p>
              <p className={styles.amount}>+$3,219.87</p>
            </div>
            <div className={styles.savingsInfo}>
              <p className={styles.title}>Most Recent Deposit</p>
              <p className={styles.amount}>$220.00</p>
            </div>
          </div>

            <div style={{ display: 'flex', gap: '3rem', margin: '2rem', alignItems:'center'}}>
             <div><PolarSavingsChart /></div>

             <div className={styles.savingsAccounts}>

              <div className={styles.account1}>
                <div className={styles.icon}>
                  <i class='bx bxs-book-add' ></i>
                </div>

                <div>
                  <p className={styles.title}>Emergency Account (GAN)</p>
                  <p className={styles.amount}>$22K.45</p>
                
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i class='bx bx-right-top-arrow-circle'
                      style={{ fontSize: '1.2rem'}}></i>
                    <p className={styles.rate}>+12.5%</p>
                    <p className={styles.deposit}>($220)</p>
                  </div>
                </div>
              </div>

              <div className={styles.account1}>
                <div className={styles.icon}>
                  <i class='bx bxs-book-add' ></i>
                </div>

                <div>
                  <p className={styles.title}>Emergency Account (GAN)</p>
                  <p className={styles.amount}>$22K.45</p>
                
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i class='bx bx-right-top-arrow-circle'
                      style={{ fontSize: '1.2rem'}}></i>
                    <p className={styles.rate}>+12.5%</p>
                    <p className={styles.deposit}>($220)</p>
                  </div>
                </div>
              </div>

              
                
        

            </div>
            
          </div>
          <h5 className={styles['header-title']}>Expense History</h5>  

          <div>
            <div className={styles['expense-history']}>
           
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem'}}>
                <i class='bx bxs-book-add' ></i>
                <div>
                  <p className={styles['item-title']}>Pak Transfer</p>
                  <p className={styles.date}>10 Sep,2020 at 3:30 PM</p>
                </div>
                
              </div>

              <div className={styles.type}>
                <p>Marketing</p>
                <div className={styles.dot}></div>
              </div>

              <p className={styles.price}>$2,432.00</p>
              
            </div>
          </div>
          </div>
    </div>
  )
}

export default SavingsInsight