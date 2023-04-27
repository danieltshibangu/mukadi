// www.mukadi.com/app
import React, {Fragment, useEffect, useState} from 'react'
import ShortSidebar from '../../../components/Sidebar2-short'
import styles from '/styles/appindex3.module.scss'
import Link from 'next/link'
import {Button, Form, Dropdown, DropdownButton} from 'react-bootstrap/'
import SavingsCalculator from '../../../charts-production/savings-calculator/calculator'
import data from '/charts/1024/line-example/data'
import ProgressBar from '../../../charts/bar2/example2'
import progressBarData from '../../../charts/bar2/data'


const index3 = () => {
    return(
        <div className={styles.entirePage}>
           <ShortSidebar />
          {/*<OverviewSidebar /> */}

          <div className={styles.mainWrapper}>
            <section className={styles.topbar}>
                <div className={styles.searchbar}>
                    <Form className={styles.form}>
                        <Form.Group controlId="searchText">
                            <Form.Control type="text" placeholder="Search for something here..."  className={styles.formInput}/>
                            <Button variant="primary" type="submit" className={styles.button}>
                                <i className='bx bx-search' ></i>
                            </Button>
                        </Form.Group>
                        
                    </Form>
                </div>
            
                <nav className={styles.importantLinks}>
                    <ul className={styles.linkList}>
                        <li>
                        <Link href='#'>
                            <i class='bx bx-bell' ></i>
                        </Link>
                        </li>

                        <li>
                        <Link href='#'>
                            <i class='bx bx-message-dots' ></i>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </section>

            <div className={styles.contentSection}>
                <section className={styles.dashboard}>
                    <div className={styles.greetingMessage}>Dashboard</div>

                    <div className={styles.content}> 
                        <div className={styles.blocks}>
                            <section className={styles.overview}>
                            <div className={styles.title}>
                                <div className={styles.sectionBar}></div>
                                <h3>Checking Overview</h3>
                            </div>

                            <article className={styles.overviewContent}>
                                {/* <div className={styles.quickstats}>
                                        <div className={styles.totalBalance}>
                                            <p className={styles.subtitle}>Total Balance in USD</p>
                                            <p className={styles.statdata}>
                                                $27,211
                                                <span className={styles.cents}>.83</span>
                                            </p>
                                        </div>

                                        <div className={styles.totaleExpenses}>
                                            <p className={styles.subtitle}>Total Expenses</p>
                                            <p className={styles.statdata}>
                                                $742
                                                <span className={styles.cents}>.83</span>
                                            </p>
                                        </div>

                                        <div className={styles.positiveImpacts}>
                                            <p className={styles.subtitle}>Positive Impacts</p>
                                            <p className={styles.statdata}>08</p>
                                        </div>

                                        <div className={styles.negativeImpacts}>
                                            <p className={styles.subtitle}>Negative Impacts</p>
                                            <p className={styles.statdata}>03</p>
                                        </div>
                                </div> */}

                                <div className={styles.checkingSavingsBlock}>
                                        <div className={styles.mainInfo}>
                                            <div className={styles.dataField}>
                                                <div className={styles.title}>
                                                    <p>Checking</p>
                                                    <i className='bx bxs-circle' ></i>
                                                    <p>Between 2 accounts</p>
                                                </div>

                                                <div className={styles.totals}>
                                                    <p className={styles.amount}>$12,938.01</p>
                                                    <div className={styles.changes}>
                                                        <p className={styles.percentChange}>2.3%</p>
                                                        <p>|</p>
                                                        <p className={styles.dollarChange}>$15.26</p>
                                                    </div>
                                                </div>
                                            </div>
                                            

                                            <div className={styles.graph}>
                                                <SavingsCalculator data={data} />
                                            </div>
                                        </div>

                                        <div className={styles.extraDetails}>
                                            <div className={styles.ratio}>

                                                <div className={styles.content}>
                                                    <div className={styles.deposits}>
                                                        <p className={styles.subtitle}>Income</p>
                                                        <p className={styles.percentage}>42%</p>
                                                    </div>
                                                    <hr />
                                                    
                                                    <div className={styles.purchases}>
                                                        <p className={styles.subtitle}>Purchase</p>
                                                        <p className={styles.percentage}>58%</p>
                                                    </div>
                                                </div>

                                                <div className={styles.projectionReport}>
                                                    <p className={styles.subtitle}>Projection</p>

                                                    <p className={styles.details}> 
                                                        Careful, you've been <strong>spending more</strong> than you've made.
                                                        
                                                    </p>  
                                                </div>
                                                
                                            </div> 

                                            <div className={styles.dataAndTransactions}>

                                                {/* <div className={styles.progressGraph}>
                                                    <ProgressBar data={progressBarData} />
                                                </div>  */}

                                                <div className={styles.checkingsSquareData}>
                                                    <div className={styles.side1}>
                                                        <div className={styles.recentExpense}>
                                                            <p className={styles.subtitle}>Recent Expense</p>
                                                            <p className={styles.amount}>$24.12</p>
                                                        </div> 

                                                        <div className={styles.lastDeposit}>
                                                            <p className={styles.subtitle}>Last Deposit</p>
                                                            <p className={styles.amount}>$324.12</p>
                                                        </div> 
                                                    </div>

                                                    

                                                    <div className={styles.side2}>
                                                        <div className={styles.recentExpense}>
                                                            <p className={styles.subtitle}>Average Interest</p>
                                                            <p className={styles.amount}>3.02%</p>
                                                        </div> 

                                                        <div className={styles.lastDeposit}>
                                                            <p className={styles.subtitle}>Last Deposit</p>
                                                            <p className={styles.amount}>$324.12</p>
                                                        </div> 
                                                    </div>
                                                </div>

                                                <div className={styles.transactions}>

                                                    <div className={styles.item}>
                                                        <div className={styles.header}>
                                                            <div className={styles.status}></div>
                                                            <p className={styles.itemTitle}>MEGAMAN BTTL NETWORK</p>
                                                        </div>

                                                        <div className={styles.details}>

                                                        </div>
                                                        
                                                        <p></p>
                                                    </div>
                                                </div>

                                                
                                            </div> 

                                        </div>
                                </div>
                            </article>
                            </section>

                            <section className={styles.savingsOverview}>
                                <div className={styles.title}>
                                    <div className={styles.sectionBar}></div>
                                    <h3>Savings Overview</h3>
                                </div>

                                <div className={styles.mainContent}>
                                    <div className={styles.dataField}>
                                        <div className={styles.title}>
                                            <p>Savings</p>
                                            <i className='bx bxs-circle' ></i>
                                            <p>Between 2 accounts</p>
                                        </div>

                                        <div className={styles.totals}>
                                            <div>
                                                <p className={styles.title}>Current</p>
                                                <p className={styles.amount}>$12,938.01</p>
                                            </div>
                                            
                                            <i class='bx bxs-right-arrow'></i>

                                            <div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="link" id="dropdown-basic" className={styles.button}>
                                                        This Month
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <p className={styles.future}>$15,935.45</p>
                                            </div>
                                            
                                        </div>

                                        <div className={styles.graph}>
                                            <SavingsCalculator data={data} />
                                        </div>
                                    </div>

                                    <div className={styles.dataFieldDetails}>
                                        <div className={styles.quickstats}>
                                            <div className={`${styles.item} ${styles.item1}`}>
                                                <div className={styles.identifier}>
                                                    <i class='bx bxs-bank' ></i>
                                                </div>
                                                <div>
                                                    <p className={styles.subtitle}>Last Deposit</p>
                                                    <p className={styles.number}>$112.04</p>
                                                    <p className={styles.date}>Mon Dec. 19</p>
                                                </div>
                                            </div>

                                            <div className={styles.item}>
                                                <div className={styles.identifier}>
                                                    <i class='bx bx-money-withdraw' ></i>
                                                </div>
                                                <div>
                                                    <p className={styles.subtitle}>Withdrawal</p>
                                                    <p className={styles.number}>$87.12</p>
                                                    <p className={styles.date}>Thurs Dec. 21</p>
                                                </div>
                                            </div>  
                                        </div>

                                        <div className={styles.projection}>
                                            <p className={styles.subtitle}>Projection</p>
                                            <p className={styles.details}>
                                            If you continue saving $300 per month, plus interest, you're expecting to end the year with roughly $15,145.14
                                            </p>
                                        </div>

                                        <div className={styles.emergencyFund}>
                                            <div className={styles.title}>
                                                <p>Emergency Fund</p>
                                            </div>

                                            <p className={styles.bankName}>
                                                Bank of Bitcoin
                                            </p>

                                            <div className={styles.totals}>
                                            <p className={styles.amount}>$32,645.08</p>
                                            <div className={styles.changes}>
                                                <p className={styles.percentChange}>2.3%</p>
                                                <p>|</p>
                                                <p className={styles.dollarChange}>$15.26</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                              
                                </div>
                            </section>

                            <section className={styles.}>

                            </section>
                        </div>

                         <div >hi there</div>
                    </div>

                   
                </section>
            </div>
          </div>
        </div>
    )
}
  
  export default index3