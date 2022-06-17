// www.mukadi.com/app
import React, {useState} from 'react'
import BudgetBarGraphOverview from '../../charts/BudgetBarGraphOverview'
import CardFront from '../../components/CardFront'
import CardFrontSample from '../../components/CardFrontSample'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import Transactions from '../../components/Transactions'
import styles from '../../styles/appindex.module.scss'
import { Button, Dropdown} from 'react-bootstrap'
import Sidebar2 from '../../components/Sidebar2'

const index = () => {

  const [sub, setSub] = useState([
    {
      id: 0,
      card: 'Chase x0782',
      title: 'Netflix [Premium]', 
      type: 'Entertainment',
      firstPayment: 'Jan. 2021',
      amount: 10.23, 
      time: '4:45 pm',
      stillActive: 'active',
      renewDate: 'Dec. 23, 2021'
    }, 
    {
      id: 1,
      card: 'Disc. x0185',
      title: 'Hulu [Standard]', 
      type: 'Entertainment',
      time: '3:27 pm',
      firstPayment: 'Jan. 2021',
      amount: 1.02, 
      stillActive: 'active',
      renewDate: 'Dec. 23, 2021'
      }, 
      {
      id: 2,
      card: 'Amex x5001',
      title: 'Disney Plus [Family]', 
      type: 'Entertainment',
      firstPayment: 'Jan. 2021',
      amount: 13.05, 
      time: '3:27 pm',
      stillActive: 'not active',
      renewDate: 'Dec. 23, 2021'
      },
  ])


  return (
    <div className={styles['main-content']}>
      <Sidebar2 />
        
        <Topbar />

        <main className={styles['main']}>

          <h4 className={styles.title}>Dashboard</h4>
          
          <div className={styles['main-content']}>
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
                    <div className={styles['exp-data']}>
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
              </div>
            </div>

            <div className={styles.transactions}>
              <div className={styles['transaction-content']}>
              </div>
            </div>


            {/* <div className={styles.credit}>
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

                  {/* progress bar 
                  <div className={styles.progress}>
                    <span className={styles["progress-bar"]} style={{width: "65%"}}></span>
                  </div>
                </div>
              </div>
            </div> */}

            <div className={styles.transactions}>
              
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


          {/* recent transactions section */}
          {/* <div className={styles['recent-subscriptions']}>
            <div className={styles.content}>
              <header>
                <div className={styles['color-bar']}></div>
                <p className={styles.title}>Latest Subscriptions</p>
              </header>

              <div className={styles.transactions}>
                {sub.map((activity, id) => <Transactions activity={activity} />)}
              </div>

              <div className={styles.allSubButton}>
                <Button variant="outline-primary" className={styles.button}>
                  All Subscriptions
                </Button>
              </div>

            </div>
          </div> */}

          <div className={styles.bills}>Anime</div>

          </div>


          
        </main>
    </div>
  )
}

export default index