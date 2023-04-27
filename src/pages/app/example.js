// www.mukadi.com/app
import React, {useState, useEffect} from 'react'
import styles from '/styles/appindex.module.scss'
import { InputGroup, Button, FormControl, Dropdown} from 'react-bootstrap'
import Link from 'next/link'
import ShortSidebar from '../../../components/Sidebar2-short'
import SavingsCalculator from '../../../charts-production/savings-calculator/calculator'
import data from '/charts/1024/line-example/data'
import ProgressBar from '../../../charts/bar2/example2'
import progressBarData from '../../../charts/bar2/data'
import MyResponsiveHeatMap from '../../../charts-production/shopping-spree/ShoppingSpreeGraph'
import shoppingSpreeData from '../../../charts-production/shopping-spree/data'
import supabase from '../../../supabase/supabase-config'
import axios from 'axios'
import GainToExpense from '../../../components-production/charts/GainToExpense'
import Alerts from '../../../components-production/charts/Alerts'

const index = () => {
  const [gains, setGains] = useState(0);
  const [expenses, setExpenses] = useState(0);

  function handleGainExpenseData(gainData, expenseData) {
    setGains(gainData); 
    setExpenses(expenseData);
  }


  return (
    <div className={styles.root}>
     
     <ShortSidebar />

     <div className={styles.main}>
       <section className={styles.topbar}>
         <div className={styles.greetingMessage}>
          <p>Good Morning, Daniel.</p>
          <p>Careful what you spend today.</p>
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

      <div className={styles.hrline}>
        <hr />
      </div>
       

       <section className={styles.overviewTables}>

         <div className={styles.graphList}>
           <div className={styles.spendingBehavior}>
             <div>
              <p className={styles.graphTitle}>Spending Behavior Past Week</p>
             </div>

             
             <div className={styles.projection}>
               <div className={styles.gainsProjection}>
                <div className={styles.gains}></div>
                <p className={styles.totalGained}>+${gains}</p>
               </div>

               <div className={styles.expenseProjection}>
                <p className={styles.totalExpenses}>
                  <span>Expenses Total:</span>
                  +${expenses}</p>
               </div>
               
             </div>
             <div className={styles.graph}>
              <GainToExpense handleDataTotals={handleGainExpenseData}/>
             </div>
           </div>

           <div className={styles.alerts}>
             <p className={styles.graphTitle}>Alerts This Week</p>
             <p className={styles.projection}>You've been spending 24% less compared to last week.</p>

             <div className={styles.legend}>
               <div>
                  <div className={styles.deposits}>
                    <div></div>
                    <p>Deposits</p>
                  </div>

                  <div className={styles.withdrawal}>
                    <div></div>
                      <p>Withdrawals</p>
                  </div>
                </div>
              
                <div>
                  <div className={styles.saved}>
                    <div></div>
                      <p>Money Saved</p>
                    </div>

                    <div className={styles.overspent}>
                      <div></div>
                      <p>Overspent</p>
                    </div>
                </div>
              </div>
              
             <div className={styles.graph}>
              <Alerts />
             </div>
           </div>

           <div className={styles.shoppingSpree}>
             <p className={styles.graphTitle}>Shopping Spree</p>
             <p className={styles.projection}>You've been spending 24% less compared to last week.</p>
             <div className={styles.graph}>
              <MyResponsiveHeatMap data={shoppingSpreeData} />
             </div>
           </div>
         </div>
       </section>

        <section className={styles.overview}>
          <p className={styles.subtitle}>Total Balance in USD</p>
          <p className={styles.totalAmount}>
            $27,211
            <span className={styles.cents}>.83</span>
          </p>
        </section>

        <section className={styles.accountOverview}>

          {/* CHECKINGS DATA AND GRAPH */}
          <article className={styles.checking}>
            <div className={styles.header}>
              <div className={styles.titleHeader}>
                <i class='bx bxs-circle-half' ></i>
                <p className={styles.title}>Checking</p>
              </div>
              <p className={styles.accountHeader}>
                Between 2 accounts
              </p>
            </div>

            <div className={styles.graph}>
              <SavingsCalculator data={data} />
            </div>

            <div className={styles.checkingsDetails}>
              <div className={styles.totalBalance}>
                <div>
                  <p className={styles.title}>TOTAL</p>
                  <p className={styles.totalAmount}>$12,938.01</p>
                </div>

                <div className={styles.change}>
                  <p className={styles.title}>CHANGE</p>
                  <div>
                    <p className={styles.rate}>2.3%</p>
                    <i class='bx bxs-circle' ></i>
                    <p className={styles.dollarChange}>$15.12</p>
                  </div>
                </div>
              </div>

              <div className={styles.gainloss}>
                <div className={styles.gain}>
                  <div className={styles.gainLegend}>
                      <div className={styles.gainID}></div>
                      <p>Gains</p>
                    </div>

                    <div className={styles.lastDeposit}>
                      <p className={styles.title}>Last Deposit</p>
                      <p className={styles.amount}>+$45.19</p>
                      <p className={styles.date}>Oct. 12th</p>
                    </div>
                </div>

                <div className={styles.progressGraph}>
                  <ProgressBar data={progressBarData} />
                </div>

                <div className={styles.loss}>
                  <div className={styles.lossLegend}>
                      <div className={styles.lossID}></div>
                      <p>Loss</p>
                    </div>

                    <div className={styles.lastWithdrawal}>
                      <p className={styles.title}>Last Withdrawal</p>
                      <p className={styles.amount}>-$12.05</p>
                      <p className={styles.date}>Oct. 12th</p>
                    </div>
                </div>
              </div>

              <div className={styles.recentActivity}>
                <h4 className={styles.title}>Recent Activity</h4>

                <div className={styles.activityChart}>
                  <div className={styles.dummydata}>
                    <p className={styles.bankTitle}>Bank of Bitcoin</p>
                    <div className={styles.details}>
                      <p className={styles.itemName}>MEGAMAN BTN E...</p>
                      <p className={styles.date}>Sept 15th</p>
                      <p className={styles.amount}>$35.13</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* SAVINGS DATA AND GRAPH */}
          <article className={styles.savings}>
          <div className={styles.header}>
              <div className={styles.titleHeader}>
                <i class='bx bxs-circle-half' ></i>
                <p className={styles.title}>Savings</p>
              </div>
              <p className={styles.accountHeader}>
                Between 3 accounts
              </p>
            </div>

            <div className={styles.graph}>
              <Alerts />
            </div>
          </article>
        </section>

        <section className={styles.highlights}>
          <div className={styles.highlightsWrapper}>
            <h2>Highlights</h2>
            <div className={styles.cards}>
              <div className={styles.item}>

                <div className={styles.tophalf}>
                  <div className={styles.header}>
                    <div>
                      <i className='bx bxs-car-crash'></i>
                      <p className={styles.cardTitle}>Priciest<br/> Purchase</p>
                    </div>

                    <div className={styles.logo}>
                      <img src='/official-mukadi-logo.svg' />
                    </div>
                    
                  </div>
                  

                <p className={styles.amount}>$212.00</p>
                </div>

                <div className={styles.bottomhalf}>
                  <div className={styles.infoGroup}>
                  <i className='bx bxs-paper-plane'></i>
                  <p>Beats out last highest purchase of $91.00 by 33%</p>
                  </div>
                  
                  <div className={styles.infoGroup}>
                    <i className='bx bxs-wrench' ></i>
                    <p>Lowers possible savings by 2.67%</p>
                  </div>
                  
                  
                </div>
              </div>



              <div className={styles.item}>

                <div className={styles.tophalf}>
                  <div className={styles.header}>
                    <div>
                      <i className='bx bxs-battery-low' ></i>
                      <p className={styles.cardTitle}>Spent So<br />Far Today</p>
                    </div>

                    <div className={styles.logo}>
                      <img src='/official-mukadi-logo.svg' />
                    </div>
                    
                  </div>
                  

                <p className={styles.amount}>$38.12</p>
                </div>

                <div className={styles.bottomhalf}>
                  <div className={styles.infoGroup}>
                  <i className='bx bxs-paper-plane'></i>
                  <p>Beats out last highest purchase of $91.00 by 33%</p>
                  </div>
                  
                  <div className={styles.infoGroup}>
                    <i className='bx bxs-wrench' ></i>
                    <p>Lowers possible savings by 2.67%</p>
                  </div>
                  
                  
                </div>
              </div>

              <div className={styles.item}>

                <div className={styles.tophalf}>
                  <div className={styles.header}>
                    <div>
                      <i className='bx bxs-bank' ></i>
                      <p className={styles.cardTitle}>Savings <br /> Goal</p>
                    </div>

                    <div className={styles.logo}>
                      <img src='/official-mukadi-logo.svg' />
                    </div>
                    
                  </div>
                  

                <p className={styles.amount}>$21,454.01</p>
                </div>

                <div className={styles.bottomhalf}>
                  <div className={styles.infoGroup}>
                  <i className='bx bxs-paper-plane'></i>
                  <p>Beats out last highest purchase of $91.00 by 33%</p>
                  </div>
                  
                  <div className={styles.infoGroup}>
                    <i className='bx bxs-wrench' ></i>
                    <p>Lowers possible savings by 2.67%</p>
                  </div>
                  
                  
                </div>
              </div>

              <div className={styles.item}>

                <div className={styles.tophalf}>
                  <div className={styles.header}>
                    <div>
                      <i className='bx bxs-rocket' ></i>
                      <p className={styles.cardTitle}>Expected<br />Income</p>
                    </div>

                    <div className={styles.logo}>
                      <img src='/official-mukadi-logo.svg' />
                    </div>
                    
                  </div>
                  

                <p className={styles.amount}>$812.88</p>
                </div>

                <div className={styles.bottomhalf}>
                  <div className={styles.infoGroup}>
                  <i className='bx bxs-paper-plane'></i>
                  <p>Beats out last highest purchase of $91.00 by 33%</p>
                  </div>
                  
                  <div className={styles.infoGroup}>
                    <i className='bx bxs-wrench' ></i>
                    <p>Lowers possible savings by 2.67%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 

        <section className={styles.decisionsReport}>
          <h4 className={styles.title}>Your Decisions</h4>
          <div className={styles.positive}>
            <div className={styles.wrapper}>
              <div className={styles.leftSide}>
                <div className={styles.keyStatline}>
                  <p className={styles.keyDecisions}>03 <span>positive impacts</span></p>
                </div>
                <p className={styles.subtitle}>These are the decisions that had the greatest impact. Neutral decisons had little to no impact on finances.</p>
              </div> 
            

              <div className={styles.rightSide}>
                <div className={styles.top}>
                  <div className={styles.graph}>
                    <ProgressBar data={progressBarData} />
                  </div>

                  <div className={styles.comparison}>
                    <div className={styles.header}>
                      <i class='bx bx-line-chart'></i>
                      <p>32% increase</p>
                    </div>

                    <div className={styles.comparisonDetails}>
                      <div className={styles.lastWeek}>
                        <p className={styles.title}>last week</p>
                        
                        <div className={styles.item}>
                          <div className={styles.saved}></div>
                          <p>5</p>
                        </div>

                        <div className={styles.item}>
                          <div className={styles.goalsReached}></div>
                          <p>4</p>
                        </div>

                      </div>

                      <div className={styles.divider}>
                        <hr />
                        <p>VS</p>
                        <hr  />
                      </div>

                      <div className={styles.thisWeek}>
                        <p className={styles.title}>this week</p>
                        
                        <div className={styles.item}>
                          <div className={styles.saved}></div>
                          <p>5</p>
                        </div>

                        <div className={styles.item}>
                          <div className={styles.goalsReached}></div>
                          <p>4</p>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className={styles.decisionItem}>
              <div className={styles.datePrice}>
                <p className={styles.date}>Thurs, 25 Mar</p>
                <p className={styles.amount}>$312.00</p>
              </div>

              <div className={styles.itemDescription}>
                <p className={styles.itemName}>MEGAMAN BTN Collection - NINTENDO</p>
                <p className={styles.category}>Category: [ <span>   video game   </span> ]</p>
              </div>

              <div className={styles.impact}>
                <div className={styles.header}>
                  <i className='bx bxs-star'></i>
                  <p className={styles.title}>Impacts</p>
                </div>

                <p className={styles.benefit}>Deposit into Account</p>
              </div>
            </div>
          </div>


          <div className={styles.negative}>
            <div className={styles.wrapper}>
              <div className={styles.leftSide}>
                <div className={styles.keyStatline}>
                  <p className={styles.keyDecisions}>03 <span>negative impacts</span></p>
                </div>
                <p className={styles.subtitle}>These are the decisions that had the greatest impact. Neutral decisons had little to no impact on finances.</p>
              </div> 
            

              <div className={styles.rightSide}>
                <div className={styles.top}>
                  <div className={styles.graph}>
                    <ProgressBar data={progressBarData} />
                  </div>

                  <div className={styles.comparison}>
                    <div className={styles.header}>
                      <i class='bx bx-line-chart'></i>
                      <p>32% increase</p>
                    </div>

                    <div className={styles.comparisonDetails}>
                      <div className={styles.lastWeek}>
                        <p className={styles.title}>last week</p>
                        
                        <div className={styles.item}>
                          <div className={styles.saved}></div>
                          <p>5</p>
                        </div>

                        <div className={styles.item}>
                          <div className={styles.goalsReached}></div>
                          <p>4</p>
                        </div>

                      </div>

                      <div className={styles.divider}>
                        <hr />
                        <p>VS</p>
                        <hr  />
                      </div>

                      <div className={styles.thisWeek}>
                        <p className={styles.title}>this week</p>
                        
                        <div className={styles.item}>
                          <div className={styles.saved}></div>
                          <p>5</p>
                        </div>

                        <div className={styles.item}>
                          <div className={styles.goalsReached}></div>
                          <p>4</p>
                        </div>

                      </div>
                      
                    </div>
                  </div>
                </div>

          
                


              </div>
            </div>

            
            <div className={styles.decisionItem}>
              <div className={styles.datePrice}>
                <p className={styles.date}>Thurs, 25 Mar</p>
                <p className={styles.amount}>$312.00</p>
              </div>

              <div className={styles.itemDescription}>
                <p className={styles.itemName}>MEGAMAN BTN Collection - NINTENDO</p>
                <p className={styles.category}>Category: [ <span>   video game   </span> ]</p>
              </div>

              <div className={styles.impact}>
                <div className={styles.header}>
                  <i className='bx bxs-star'></i>
                  <p className={styles.title}>Impacts</p>
                </div>

                <p className={styles.benefit}>Deposit into Account</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
  

// export const getServerSideProps = async (context) => {
//   const { user } = await supabase.auth.api.getUserByCookie(context.req);
//   //console.log(user);
    
  
//   // but if we don't have a client then...
//   if (!user) {
//     return {
//       redirect: {
//         permanent: false, 
//         destination: '/login', 
//       }, 
//       props: {},
//     };
//   }

//   // if we have a user, let's return empty props 
//   return {
//     props: { },
//   }
// };
        
       

export default index