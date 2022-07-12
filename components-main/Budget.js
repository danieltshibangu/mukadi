import React from 'react'

const Budget = () => {
  return (
    <div>
        <div className={styles.sideCol}>
            <div className={styles.bills}>
              <div className={styles.frame}>
                <header>
                  <div className={styles['color-bar']}></div>
                  <p className={styles.title}>Upcoming Bills</p>
                </header>

                <div className={styles.content}>

                  <table>
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
                        <div className={styles['percentage-income']}>
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

            {/* budget graph section */}
             <div className={styles.budgetGraph}>
              <header>
                <div className={styles['color-bar']}></div>
                <p className={styles.title}>Your Budgets</p>
              </header>

              <div className={styles.graph}>
                <BudgetBarGraphOverview  />
              </div>
            </div> 
          </div>
    </div>
  )
}

export default Budget