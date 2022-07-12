// www.mukadi.com/app
import React, {useState} from 'react'
import BudgetBarGraphOverview from '../../charts/BudgetBarGraphOverview'
import CardFront from '../../components/CardFront'
import CardFrontSample from '../../components/CardFrontSample'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import Transactions from '../../components/Transactions'
import styles from '../../styles/appindex.module.scss'
import { InputGroup, Button, FormControl, Dropdown} from 'react-bootstrap'
import Sidebar2 from '../../components/Sidebar2'
import ExpenseIncomeOverview from '../../charts/ExpenseIncomeOverview'
import indexGraph from '../../charts/IndexGraph'
import data from '../../charts/ExpenseIncomeData'
import IndexGraph from '../../charts/IndexGraph'
import SavingsDoughnut from '../../charts/SavingsDoughnut'
import PolarSavingsChart from '../../charts/PolarSavingsChart'
import ExpenseComparison from '../../charts/ExpenseComparison'

const index = () => {

  const [sub, setSub] = useState([
    {
      id: 0,
      card: 'Chase x0782',
      title: 'Netflix', 
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
      title: 'Hulu', 
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
      title: 'Disney Plus', 
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

          <h4 className={styles.dashTitle}>Dashboard</h4>
          
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

            {/* <div className={styles.transactions}>
              <div className={styles['transaction-content']}>
              </div>
            </div> */}


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



          


          {/* recent transactions section */}
           <div className={styles['recent-subscriptions']}>
            <header>
              <div className={styles['color-bar']}></div>
              <p className={styles.title}>Latest Subscriptions</p>
            </header>

            <div className={styles.content}>
              

              <div className={styles.transactions}>
                {sub.map((activity, id) => <Transactions activity={activity} />)}
              </div>

            
            </div>
          </div>  

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

          
            


         <div className={styles.transactions}>
            <header>
              <div className={styles['color-bar']}></div>
              <p>Expense Insights</p>
            </header>

            <div className={styles.content}>

              <div>

              <div style={{ height: '20vh'}}><ExpenseComparison style={{ height: '20vh'}} /></div>
              <h5 className={styles['header-title']}>Expense History</h5>

              <div className={styles.expenseGroup}>
                <table className={styles.expenseMonthly}>
                  <tr>
                    <td style={{borderRight: '1px solid black'}}>
                      <p>$14,491</p>
                      <p>Housing</p>
                    </td>
                    <td>
                      <p>$341</p>
                      <p>Food</p>
                    </td>
                  </tr>

                  <tr>
                    <td style={{borderRight: '1px solid black'}}>
                      <p>$14,491</p>
                      <p>Housing</p>
                    </td>
                    <td>
                      <p>$341</p>
                      <p>Food</p>
                    </td>
                  </tr>
                </table>
              </div>

            </div>
            

              <div>
                <div style={{ width: '13rem' }}><SavingsDoughnut /></div>
              </div>

              
            </div>


          </div>


          <div className={styles.risks}>
            <header>
              <div className={styles['color-bar']}></div>
              <p className={styles.title}>Risk Analysis</p>
            </header>

            <div style={{display: 'flex', gap: '2rem', padding: '1.1rem'}}>

            <div className={styles.priceEntry}>
              <p>Enter a price</p>
              <InputGroup className="mb-3" style={{display: 'flex', alignItems: 'center', width: '20rem'}}>
                <FormControl
                placeholder="$0.00"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type="number"
                maxLength={10}
                style={{ padding: '1.1rem', borderRadius: '10px', border: '1px solid #ced4da'}}
                />
                <Button variant="outline-secondary" id="button-addon2"
                    style={{ 
                        border: 'none', position: 'absolute', right: '2rem',
                        backgroundColor: '#FBE6DA', borderRadius: '10px', width: '5rem', 
                        textAlign: 'center', zIndex: 10 }}>
                        <i class='bx bx-search'></i>
                    </Button>
              </InputGroup>

              

              

              <div>
                <div className={styles.riskType}>
                  <div className={styles.status}></div>
                  <p className={styles.feedback}>This purchase comes with a risk <br/>
                    of being set back by $** based on xyz.
                  </p>
                </div>
              </div>
            </div>


            <div className={styles.breakdown}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '1.3rem' }}>
        <i class='bx bxs-quote-alt-left' style={{ fontSize: '2rem'}}></i>
        <p style={{ 
            fontFamily: 'Poppins',
            fontSize: '1.2rem', 
            fontWeight: 200, 
            margin: '0 1%', 
            padding: '0rem 1rem'
        }}>Spend Wisely.</p>
        <i class='bx bxs-quote-alt-right' style={{ fontSize: '2rem'}}></i>
        </div>
              <div className={styles.budgetHeader}>
              <div>
                <p className={styles.title}>Month's Earnings</p>
                <p className={styles.amount}>$2100</p>
              </div>

              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>

              <div>
                <p className={styles.title}>Left Over</p>
                <p className={styles.amount}>$325</p>
              </div>
            </div>


            <div className={styles.requiredBills}>

              <table>
                <tr>
                  <td>
                    <div className={styles.category}>
                      <div className={styles.backgroundColor}><i class='bx bxs-party'></i></div>
                      <div>
                        <p className={styles.title}>Housing</p>
                        <p>$500 per mo.</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.category}>
                      <div className={styles.backgroundColor}><i class='bx bxs-party'></i></div>
                      <div>
                        <p className={styles.title}>Housing</p>
                        <p>$500 per mo.</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className={styles.category}>
                      <div className={styles.backgroundColor}><i class='bx bxs-party'></i></div>
                      <div>
                        <p className={styles.title}>Housing</p>
                        <p>$500 per mo.</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.category}>
                      <div className={styles.backgroundColor}><i class='bx bxs-party'></i></div>
                      <div>
                        <p className={styles.title}>Housing</p>
                        <p>$500 per mo.</p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className={styles.category}>
                      <div className={styles.backgroundColor}><i class='bx bxs-party'></i></div>
                      <div>
                        <p className={styles.title}>Housing</p>
                        <p>$500 per mo.</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.category}>
                      <div className={styles.backgroundColor}><i class='bx bxs-party'></i></div>
                      <div>
                        <p className={styles.title}>Housing</p>
                        <p>$500 per mo.</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>

              
             </div> {/*Required bills section */}
            
            </div> {/* The entire middle breakdown section */}

            

            </div> {/* the entire div content */}

            

          
          </div>

          <div className={styles.suggestions}>
              <p className={styles.title}>Consider These Suggestions</p>

              <div className={styles.content}>
                <div className={styles.growth}>Grow</div>
                <div className={styles.payback}>Pay</div>
                <div className={styles.pokemon}></div>
              </div>
            </div>

          </div>

          
          
        </main>
    </div>
  )
}

export default index