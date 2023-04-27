// www.mukadi.com/app
import React, {Fragment, useEffect, useState} from 'react'
import styles from '/styles/appindex2.module.scss'
import supabase from '../../../supabase/supabase-config'
import bardata from '../../../charts/bar/data'
import { Dropdown, Accordion, Form, Button } from 'react-bootstrap'
import MyResponsiveBar from '../../../charts/bar/example'
//import data from '../../../charts/data'
import axios from 'axios'
import OverviewSidebar from '../../../components/OverviewSidebar'
import ShortSidebar from '../../../components/Sidebar2-short'
import LineGraph from '../../../charts/1024/line-example/LineGraph'
import data from '../../../charts/1024/line-example/data'
import ProgressBar from '../../../charts/bar2/example2'
import progressBarData from '../../../charts/bar2/data'
import SavingsCalculator from '../../../charts-production/savings-calculator/calculator'
import calc_data from '../../../charts-production/savings-calculator/data'
import { convertUSDFormat } from '../../../utils/dollar-format'



const index2 = () => {

  // p = initial value = 2500
  // n = compounding periods per year = 12
  // r = nominal interest rate, compounded n times per year = 4% = 0.04
  // i = periodic interest rate = r/n = 0.04/12 = 0.00333333
  // y = number of years = 5
  // t = number of compounding periods = n*y = 12*5 = 60
  // d = periodic deposit = 100

 



 

  // state vars for savings calculator 
  const [initialAmount, setInitialAmount] = useState(0);
  const [periodicDeposits, setPeriodicDeposits] = useState(0);
  const [periodsPerYear, setPeriodsPerYear] = useState(0);
  const [nominalInterestRate, setNominalInterestRate] = useState(0);
  const [yearsToHold, setYearsToHold] = useState(0);

  // function to determine savings 
  const savingsCalculation = () => {
    let p = initialAmount; 
    let n = periodsPerYear;
    let r = nominalInterestRate / 100;
    let i = r/n;
    let y = yearsToHold;
    let t = n*y;  // number of compounding periods over the years 
    let d = periodicDeposits;

    //let FUTURE_VALUE = initialAmount * ((1 + ((interestRate/100) / timeFrame)) ^ (timeFrame * yearsToHold))

    const FUTURE_VALUE = d*(((Math.pow((1 + i), t)) - 1)/i)*(1 + i);
    const PRESENT_FUTURE_VALUE = p*(Math.pow((1 + i), t));

    const TOTAL = convertUSDFormat(PRESENT_FUTURE_VALUE + FUTURE_VALUE)
    return TOTAL
  }

  // function to determine interest gained 
  const interestCalculation = () => {
    let p = initialAmount; 
    let n = periodsPerYear;
    let r = nominalInterestRate / 100;
    let i = r/n;
    let y = yearsToHold;
    let t = n*y;  // number of compounding periods over the years 
    let d = periodicDeposits;

    const FUTURE_VALUE = d*(((Math.pow((1 + i), t)) - 1)/i)*(1 + i);
    const FUTURE_INTEREST_ACCRUED = FUTURE_VALUE - (t * d);

    const PRESENT_FUTURE_VALUE = p*(Math.pow((1 + i), t));
    const PRESENT_INTEREST_ACCRUED = PRESENT_FUTURE_VALUE - (p);

    return convertUSDFormat(FUTURE_INTEREST_ACCRUED + PRESENT_INTEREST_ACCRUED);
  }

    // function takes in variables and creates a list of amounts per year
    const SavingsCalculatorDataDisplay = () => {
      let p = initialAmount; 
      let n = periodsPerYear;
      let r = nominalInterestRate / 100;
      let i = r/n;
      let y = yearsToHold;
      let t = n*y;  // number of compounding periods over the years 
      let d = periodicDeposits;

      let returnsList = []

      const FUTURE_VALUE = d*(((Math.pow((1 + i), t)) - 1)/i)*(1 + i);
      const FUTURE_INTEREST_ACCRUED = FUTURE_VALUE - (t * d);


      
      // count out the years for t
      for ( let count = 0; count <= y; count++ ) {
        let t = n*count;
        const FUTURE_VALUE = d*(((Math.pow((1 + i), t)) - 1)/i)*(1 + i);
        const FUTURE_INTEREST_ACCRUED = FUTURE_VALUE - (t * d);

        returnsList.push({ 
          'x' : count,
          'y' : FUTURE_INTEREST_ACCRUED + FUTURE_VALUE
        })
      }


      return returnsList.slice(1)
    }

    let savings_prediction_data = {
      "id": "current",
      "color": "hsl(142, 70%, 50%)",
      "data": [SavingsCalculatorDataDisplay()]
    }

    let null_data = {
      "id": "current",
      "color": "hsl(142, 70%, 50%)",
      "data": [SavingsCalculatorDataDisplay()]
    }
  
    console.log(Object.values(savings_prediction_data)[2])





    return(
        <div className={styles.entirePage}>
          <ShortSidebar />

          <div className={styles.mainWrapper}>
          {/* <Sidebar2 /> */}

            <header>
              <h1>Let's make better decisions!</h1>

              <p>
                How's the weather? Also your next payday is Jun 14.
              </p>

              <p>
                August 16th, 2023
              </p>
            </header>

            <section className={styles.features}>

              <article className={styles.decisionsReport}>
                <div className={styles.positive}>
                  <div className={styles.wrapper}>
                    <div className={styles.leftSide}>
                      <div className={styles.keyStatline}>
                        <p className={styles.keyDecisions}>03 <span>positive decisons</span></p>
                      </div>
                      <p className={styles.subtitle}>These are the decisions that had the greatest impact. Neutral decisons had little to no impact on finances.</p>
                    </div>

                    <div className={styles.middleSection}>
                      <div className={styles.progress}>
                        <p>Progress</p>
                        <div className={styles.graph}>
                        </div>
                      </div>
                    </div>

                    <div className={styles.rightSide}>
                      <img src='/book-girl.svg' />
                      </div>
                  </div>
                </div>


                <div className={styles.negative}>
                  <div className={styles.wrapper}>
                    <div className={styles.leftSide}>
                      <div className={styles.keyStatline}>
                        <p className={styles.keyDecisions}>05 <span>negative decisons</span></p>
                      </div>
                      <p className={styles.subtitle}>These are the decisions that had the greatest impact. Neutral decisons had little to no impact on finances.</p>
                    </div>

                    <div className={styles.middleSection}>
                      <div className={styles.progress}>
                        <p>Progress</p>
                        <div className={styles.graph}>
                        </div>
                      </div>
                    </div>

                    <div className={styles.rightSide}>
                      <img src='/fish.svg' />
                      </div>
                  </div>
                </div>
              </article>
              

          
              <div className={styles.grouping2}>
              <section className={styles.decisionsBoard}>
                <div className={styles.dbWrapper}>
                  <header>
                    <p>Money managed</p>
                    {/* <p>
                      This represents all money you've touched between your
                      decisions whether you've spent or gained it.
                    </p> */}

                    <div className={styles.headerList}>
                      <div className={styles.decisionItem}>
                        <p className={styles.decisionCount}>$1,349.83</p>
                      </div>
                    </div>
                  </header>

                  
                  <div className={styles.graphHeader}>
                    <div className={styles.timeHeader}>
                      <p className={styles.title}>Total Summary in</p>
                      
                      <Dropdown>
                        <Dropdown.Toggle variant="link"  className={styles.dropdown}>
                          Month
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                  
                    </div>

                    <div className={styles.indexHeader}>
                      <div>
                        <div className={styles.dot1}></div>
                        <p className={styles.indexTitle}>Gained</p>
                      </div>
                      
                      <div>
                        <div className={styles.dot2}></div>
                        <p className={styles.indexTitle}>Spent</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.graph}>
                  </div>
                  
                </div>
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
              </div>


              <section className={styles.income}>
                <div className={styles.wrapper}>

                  <div className={styles.graph}>
                  </div>

                  <div className={styles.incomeHeader}>

                   <div className={styles.status}>
                     <div className={styles.payDetails}>
                       <p className={styles.title}>Last Pay</p>
                       <p className={styles.dataDetail}>$286.91</p>
                     </div>

                     <div className={styles.payDetails}>
                        <p className={styles.title}>Saved Portion</p>
                       <p className={styles.dataDetail}>$86.91</p>
                     </div>

                     <div className={styles.payDetails}>
                        <p className={styles.title}>Recieved on</p>
                       <p className={styles.dataDetail}>Mar. 9th</p>
                     </div>
                   </div>

                    <div className={styles.savingsDepot}>
                      <i className='bx bxs-crown' ></i>

                      <p className={styles.savingsPercentage}>
                        52%
                      </p>

                      <p className={styles.subtitles}>income saved per month</p>

                      <hr width='100%' style={{opacity: 0.1, margin: '10px auto'}} />

                      <p className={styles.subtitles}>appr. saved</p>
                      <p className={styles.savingsPercentage}>
                        $388.12
                      </p>

                      
                    </div>

                    <article>
                      <div className={styles.incomeGained}>
                        <div className={styles.title}>
                          <p>
                            Income So Far 
                          </p>
                        </div>

                        <p className={styles.incomeAmountGained}>
                          <span className={styles.current}>+$679.12</span>
                          <i className='bx bxs-right-arrow' ></i>
                          <span className={styles.monthMax}>$1,246.89</span>
                        </p>

                        <hr width='100%' style={{opacity: 0.1, margin: '10px auto'}} />
                        
                        <p className={styles.extraData}>Currently 52% of expected income this month</p>
                      </div>

                      <div className={styles.upcomingIncome}>
                        <div className={styles.title}>
                          <p>Upcoming Income</p>

                          <p className={styles.incomeAmountUpcoming}>
                            $324.09
                            <i class='bx bxs-left-arrow' ></i>
                            <span>Expected March 29th</span>
                          </p>
                        </div>
                      </div>
                    </article>
                    
                  </div>

                 
                </div>
              </section>

              <section className={styles.savings}>
                <div className={styles.header}>
                  <div className={styles.timeExpected}>
                    <p>Expected to save:</p>

                    <Dropdown>
                      <Dropdown.Toggle variant="outline-success" id="dropdown-basic"  className={styles.dropdown}>
                        This Month
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className={styles.amountDetails}>
                    <p className={styles.amount}>$1,125.89</p>
                    <p className={styles.interest}> at 3.5% interest</p>
                  </div>
                </div>

                <div className={styles.savingsDetails}>
                  <div className={styles.graph}>
                  </div>

                  <div className={styles.savingsAccounts}>
                    <div className={styles.emergencyAcct}>
                      <div className={styles.header}>
                        <i class='bx bxs-landscape' ></i>
                        <p>Emergency Fund</p>
                      </div>
                      <p className={styles.bankName}>Bank of Mukadi</p>
                      <div className={styles.amount}>
                        <p>$12,356.12</p>
                        <p>at <span>~0.03% interest</span></p>
                      </div>

                      <div className={styles.extraDetails}>
                        <div className={styles.projection}>
                          <p className={styles.title}>Projection</p>
                          <p className={styles.projection_text}>
                            If you continue saving <span>$300 per month</span>, plus interest, 
                            you're expecting to end the year with roughly <span>$15,145.14</span>
                          </p>
                        </div>

                        <div className={styles.transactionHistory}>
                          <p className={styles.title}>Transactions This Month</p>
                          
                          <div className={styles.transaction_type}>
                            <div className={styles.withdrawals}>
                              <p className={styles.subtitle}>Withdrawals</p>
                              <p className={styles.count}>03</p>
                            </div>

                            <div className={styles.last_transaction}>
                              <p className={styles.subtitle}>Last Deposits</p>
                              <p className={styles.count}>04</p>
                            </div>
                          </div>

                          <div className={styles.transactions_list}>
                              <p>11/11/23</p>
                              <p>$400.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <section className={styles.savingsTracker}>
                <div className={styles.wrapper}>
                  <p className={styles.title}>Savings Calculator</p>

                  <p className={styles.description}>
                    Plan out your future. Enter data to find out how much you could save either now or later.
                  </p>

                  <div className={styles.analytics}>
                    <p>In {yearsToHold} years, you'll have</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px'}}>
                      <div className={styles.earned}>
                      <p className={styles.amount}>
                      {
                         savingsCalculation() === '$NaN'
                        ? '$0.00'
                        : savingsCalculation()
                        }
                      </p>
                    </div>

                   

                    <p>and <span>
                    {
                      interestCalculation() === '$NaN'
                      ? '$0.00'
                      : interestCalculation()
                    }
                    </span> in interest.</p>
                    </div>
                    
                  </div>

                  <div className={styles.graph}>
                    <SavingsCalculator 
                      data=
                      {
                        data
                      } 
                    />
                  </div>

                  <div className={styles.currentInfo}>
                    <p className={styles.title}>Current Standing</p>
                    <p className={styles.subtitle}>You are currently saving <span>$250 per month</span>, or <span>$150 per week</span>, at an averge interest of <span>2.3%</span>.</p>
                  </div>

                  <Form>
                    <div className={styles.formWrapper}>
                      <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                          <Form.Label>Initial Amount</Form.Label>
                          <Form.Control type="telephone" placeholder="$123.45"  onChange={e => setInitialAmount(e.target.value)} />
                          <Form.Text className="text-muted">
                            Any starting amount.
                          </Form.Text>
                        </Form.Group>
                      </div>
                    
                      <div style={{ display: 'flex', gap: 30}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                          <Form.Label>Monthly Deposits</Form.Label>
                          <Form.Control type="telephone" placeholder="$123.45" onChange={e => setPeriodicDeposits(e.target.value)}
                          />
                          <Form.Text className="text-muted">
                            The money you plan on depositing. 
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                          <Form.Label>Deposits per month</Form.Label>
                          <Form.Control type="text" placeholder="ex: 1, 2, 3" onChange={e => setPeriodsPerYear(e.target.value)} />
                          <Form.Text className="text-muted">
                            How often are you depositing?
                          </Form.Text>
                        </Form.Group>
                      </div>

                      <div style={{ display: 'flex', gap: 30}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                          <Form.Label>Interest Rate</Form.Label>
                          <Form.Control type="number" placeholder="1.5%" onChange={e => setNominalInterestRate(e.target.value)} />
                          <Form.Text className="text-muted">
                            The interest percentage to be gained.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                          <Form.Label>Number of Years</Form.Label>
                          <Form.Control type="text" placeholder="ex: 1, 2, 3" onChange={e => setYearsToHold(e.target.value)} />
                          <Form.Text className="text-muted">
                            How many years do you plan on saving?
                          </Form.Text>
                        </Form.Group>
                      </div>
                   

                      <Button 
                        variant="primary" 
                        type="submit" 
                        style={{ marginRight: 20}}
                        onClick={(e) => {
                          e.preventDefault()
                          savingsCalculation()
                          interestCalculation()  
                          SavingsCalculatorDataDisplay()
                      }}>
                        Submit
                      </Button>

                      <Button variant="danger" type="submit" style={{ marginRight: 20}}>
                        Reset
                      </Button>
                    </div>
                  </Form>


                </div>
              </section> */}
            </section>
            
          
          </div>
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const { user } = await supabase.auth.api.getUserByCookie(context.req);
    
  
//     // but if we don't have a client then...
//     if (!user) {
//       return {
//         redirect: {
//           permanent: false, 
//           destination: '/login', 
//         }, 
//         props: {},
//         };
//       }
  
//       // if we have a user, let's return empty props 
//       return {
//         props: { },
//       }
//     };
  
  
  export default index2