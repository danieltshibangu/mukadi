import React from 'react'
import styles from '/styles/component-styles/overview.module.scss'
import { InputGroup, Button, FormControl, Dropdown} from 'react-bootstrap'
import ExpenseIncomeOverview from '/charts/ExpenseIncomeOverview'
import data from '/charts/ExpenseIncomeData'

const Overview = () => {
  return (
    <div>
        <div className={styles.general}>
              <header>
                <div className={styles['color-bar']}></div>
                <p>Overview</p>
              </header>

              <div className={styles.overview}>
                <div className={styles['total-earnings']}>
                  <div className={styles['earnings-content']}>
                    <div className={styles.backColor}>
                      <i class='bx bx-wallet-alt' ></i>
                    </div>

                    <div className={styles.rate}>
                      <i class='bx bx-up-arrow-alt' ></i>
                      <p>3.4%</p>
                    </div>

                    <div className={styles['account-info']}>
                    <h5>Total Checking Amount</h5>
                      <p>$2K.42</p>
                    </div>
                  </div>


                  <div className={styles['savings-content']}>
                    <div className={styles.rate}>
                      <i class='bx bx-down-arrow-alt' ></i>
                      <p>2.1%</p>
                    </div>

                    <div className={styles.backColor}>
                      <i class='bx bx-save'></i>
                    </div>

                    <div className={styles['account-info']}>
                      <h5>Total Savings</h5>
                        <p>$14K.09</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles['future-data']}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <h5 className={styles['header-title']}>Future Expectations</h5>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Monthly
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Weekly</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Monthly</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Annually</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className={styles.content}>
                    <div className={styles['exp-data']} style={{ paddingLeft: 0}}>
                      <div className={styles.dot}></div>
                      <p className={styles.title}>Expected income</p>
                      <p className={styles.amount}>$2,145.98</p>
                    </div>

                    <div className={styles['exp-data']}>
                      <div className={styles.dot}></div>
                      <p className={styles.title}>Upcoming Expenses</p>
                      <p className={styles.amount}>$512.11</p>
                    </div>

                    <div className={styles['exp-data']}>
                      <div className={styles.dot}></div>
                      <p className={styles.title}>Budget Takeaway</p>
                      <p className={styles.amount}>$1,125.01</p>
                    </div>

                    <div className={styles['exp-data']}>
                      <div className={styles.dot}></div>
                      <p className={styles.title}>Budget Amount</p>
                      <p className={styles.amount}>$1,010.23</p>
                    </div>
                  </div>
                </div>

                <div className={styles.graphData}>
                  <ExpenseIncomeOverview data={data} />
                </div>
              </div>
            </div>
    </div>
  )
}

export default Overview