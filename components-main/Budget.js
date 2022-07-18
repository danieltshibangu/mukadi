import React from 'react'
import BudgetBarGraphOverview from '../charts/BudgetBarGraphOverview'
import styles from '/styles/component-styles/budget.module.scss'

const Budget = () => {
  return (
    <div>
        

            {/* budget graph section */}
            <div className={styles.budget}>
              <header>
                  <div className={styles['color-bar']}></div>
                  <p className={styles.title}>Your Budgets</p>
                </header>

                <div className={styles['budget-content']}>
              <div className={styles.budgetGraph}>
                

                <div className={styles.graph}>
                  <BudgetBarGraphOverview  />
                </div>
              </div>

               <div className={styles['upcoming-bills']}>
                 <div className={styles.content}>
                 <table>
                   <p className={styles.billTitle}>Upcoming Bills</p>
                   <hr width={100} />
                    <tr style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)'}}>
                      <td style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)'}}>
                        <div className={styles.rent}>
                          <div className={styles['upper-detail-format']}>
                            <div className={styles.detail}>
                              <h5>Housing (Rent/Mortgage)</h5>
                              <p>$500.00</p>
                            </div>

                            <div className={styles.billModel}>
                              <i class='bx bx-building-house' ></i>
                            </div>
                          </div>

                          <p className={styles['last-payment-comparison']}>
                            <i class='bx bx-pulse'></i>
                            <em>0%</em>
                            <span> vs payment last month</span>
                          </p>
                        </div>
                      </td>


                      <td>
                        <div className={styles.rent}>
                          <div className={styles['upper-detail-format']}>
                            <div className={styles.detail}>
                              <h5>Netflix Subscription</h5>
                              <p>$12.81</p>
                            </div>

                            <div className={styles.billModel}>
                              <i class='bx bx-building-house' ></i>
                            </div>
                          </div>

                          <p className={styles['last-payment-comparison']}>
                            <i class='bx bx-pulse'></i>
                            <em>0%</em>
                            <span> vs payment last month</span>
                          </p>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)'}}>
                        <div className={styles['rent']}>
                          <div className={styles['upper-detail-format']}>
                            <div className={styles.detail}>
                              <h5>Percent of Income</h5>
                              <p>28.2%</p>
                            </div>

                            <div className={styles.billModel}>
                              <i class='bx bx-building-house' ></i>
                            </div>
                          </div>

                          <p className={styles['last-payment-comparison']}>
                            <i class='bx bx-pulse'></i>
                            <em>8%</em>
                            <span> vs payment last month</span>
                          </p>
                        </div>
                      </td>


                      <td>
                        <div className={styles.rent}>
                          <div className={styles['upper-detail-format']}>
                            <div className={styles.detail}>
                              <h5>Groceries and Food</h5>
                              <p>$380.00</p>
                            </div>

                            <div className={styles.billModel}>
                              <i class='bx bx-building-house' ></i>
                            </div>
                          </div>

                          <p className={styles['last-payment-comparison']}>
                            <i class='bx bx-pulse'></i>
                            <em>0%</em>
                            <span> vs payment last month</span>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </table>
                 </div>
               </div>
              </div>
            </div>
          </div>
 
  )
}

export default Budget