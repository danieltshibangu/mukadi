// www.mukadi.com/app
import React, {Fragment, useEffect, useState} from 'react'
import styles from '/styles/appindex.module.scss'
import Sidebar2 from '/components/Sidebar2'
import supabase from '../../../supabase/supabase-config'
import ExtraSidebar from '../../../components/ExtraSidebar'
import Example from '../../../charts/Example'
import bardata from '../../../charts/bar/data'
import { Dropdown, Form, Button, Row, Col, InputGroup, DropdownButton } from 'react-bootstrap'
import MyResponsiveBar from '../../../charts/bar/example'
import data from '../../../charts/data'
import SingleResponsiveBar from '../../../charts/bar2/example2'
import singleBarData from '../../../charts/bar2/data'
import MostExpensiveBuy from '../../../charts/most-exp-purchase/example1'
import expData from '../../../charts/most-exp-purchase/data'
import MyResponsivePie from '../../../charts/cards/savings-goals/SavingsPie'
import leftoverData from '../../../charts/cards/savings-goals/data'
import axios from 'axios'
import CheckingTotal from '../../../charts/totals/checking/CheckingTotal'
import checkingTotalData from '../../../charts/totals/checking/data'
import SavingsTotal from '../../../charts/totals/savings/SavingsTotal'
import savingsTotalData from '../../../charts/totals/savings/data'
import Placeholder from 'react-bootstrap/Placeholder'

// get back the total amount using each check token 
const index = () => {

  const [checkingTotal, setCheckingTotal] = useState(0)
  const [savingsTotal, setSavingsTotal] = useState(0)
  const [numOfCheckingAccounts, setNumOfCheckingAccounts] = useState(0) 
  let max = 0;
  let min = 0;

  async function getCheckingData() {
    const res = await axios.get('/api/calculate-checking-total')
  
    // Recommendation: handle errors
    if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    setCheckingTotal(res.data.total);
  }

  async function getSavingsData() {
    const res = await axios.get('/api/calculate-savings-total')
  
    // Recommendation: handle errors
    if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    setSavingsTotal(res.data.total);
  }

  async function getCheckingGraphData() {
    const res = await axios.get('/api/get-checking-graph-data')

    // Recommendation: handle errors
    if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    //console.log(Object.values(res.data))

    const items = Object.values(res.data)

    for (let i=0; i <items.length; i++) {
      if (items[i].gain >= max)
        max = items[i].gain

        if (items[i].gain < min)
        min = items[i].gain
    }
  }

  async function getSavingsGraphData() {
  
    const res = await axios.get('/api/get-savings-graph-data')
  
    // Recommendation: handle errors
    if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    
    console.log(res.data)
  }

  // useEffect(() => {
  //   getCheckingData();
  //   getSavingsData();
  //   getCheckingGraphData();
  //   getSavingsGraphData();
  // }, [])

  

   // funvtion to capitalize first letter of name always 
   function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// gets the current user client side 
const user = supabase.auth.user();
const [currentIndex, setCurrentIndex] = useState(0)
// const name = Object.values(user)[11].firstName
const messages = [
    "How's the weather? Also your next payday is Jun 14.", 
    "You've spent -$29.99 and earned +$5,389 this month.",
    "Amazing! You're on track to save +$1,120 this month."
]

useEffect(() => {
    if (currentIndex === messages.length - 1) {
        console.log("Let's make the best decisions.")
        return;
    }
    const interval = setInterval(() => {
        const updatedData = currentIndex + 1;
        setCurrentIndex(updatedData)
    }, 5000);

    return () => clearInterval(interval);
}, [currentIndex])


  return (
    <div className={styles['main']}>
      <Sidebar2 />

        <ExtraSidebar />

        <main className={styles['main-content']}>
          <div className={styles.headerContent}>
            <div className={styles.title}>
              <h1 className={styles.openingMessage}>Welcome Back, {capitalizeFirstLetter('Dan')}</h1>

              <p className={styles.subMessage}>{messages[currentIndex]}</p>
            </div>
          </div>
          

          <div className={styles.layout}>
            <section className={styles.overview}>
              <article className={styles.totals}>
                <div className={styles.checkingTotal}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <div className={styles.tag}></div>
                       <p className={styles.subheading}>
                      Checking</p>
                    </div>
                    <i class='bx bxs-info-circle' ></i>
                  </div>
                  <div className={styles.checkingData}>
                    <div className={styles.checkingTotalGraph}>
                      <CheckingTotal 
                        data={checkingTotalData()}
                        high={max}
                        low={min} />
                    </div>
                    <div className={styles.details}>
                      <div>
                        <p className={styles.title}>TOTAL</p>
                        <div className={styles.totalAmount}>
                          { checkingTotal 
                            ? 
                            checkingTotal
                            :  
                            <Placeholder as="p" animation="glow">
                              <Placeholder bg="primary"style={{width:'6rem', height:'2rem'}} />
                            </Placeholder>
                          }
                        </div>
                      </div>
                      <hr size="60" width="1px" />
                      <div>
                        <p className={styles.title}>CHANGE</p>
                        <p className={styles.rate}>
                          <i class='bx bxs-right-top-arrow-circle'></i>
                          2.56%
                        </p>
                      </div>
                    </div>
                    <p className={styles.numOfAccounts}>between 2 accounts</p>
                  </div>
                </div>

                <div className={styles.savingsTotal}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <div className={styles.tag}></div>
                       <p className={styles.subheading}>
                      Savings</p>
                    </div>
                    <i class='bx bxs-info-circle' ></i>
                  </div>
                  <div className={styles.savingsData}>
                    <div className={styles.savingsTotalGraph}>
                      <SavingsTotal data={savingsTotalData()} />
                    </div>
                    <div className={styles.details}>
                      <div>
                        <p className={styles.title}>TOTAL</p>
                        <div className={styles.totalAmount}>
                        { savingsTotal 
                          ? 
                          savingsTotal
                          :  
                          <Placeholder as="p" animation="glow">
                            <Placeholder bg="primary"style={{width:'6rem', height:'2rem'}} />
                          </Placeholder>
                        }
                        </div>
                      </div>
                      <hr size="60" width="1px" />
                      <div>
                        <p className={styles.title}>CHANGE</p>
                        <p className={styles.rate}>
                          <i class='bx bxs-right-top-arrow-circle'></i>
                          2.56%
                        </p>
                      </div>
                    </div>
                    <p className={styles.numOfAccounts}>between 2 accounts</p>
                  </div>
                </div>
              </article>

              <article className={styles.income}>
                <div className={styles.wrapper}>
                  <div className={styles.header}>
                    <div className={styles.left}>
                      <i class='bx bxs-leaf'></i>
                      <p>Income</p>
                    </div>
                    <i class='bx bxs-info-circle' ></i>
                  </div>

                  <div className={styles.content}>
                    <div className={styles.topDetail}>
                      <div className={styles.monthly}>
                        <p className={styles.amount}>$1,134.55</p>
                        <p className={styles.description}>Monthly Income</p>
                      </div>

                      <div className={styles.extraDetails}>
  
                        <div className={styles.paydayCard}> 
                          <p className={styles.month}>January</p>

                          <div className={styles.container}>
                            <div className={styles.date}>07</div>
                            <div className={styles.paydayDetail}>
                              <p className={styles.expectedAmount}>Expected Amount</p>
                              <p className={styles.amount}>$385.04</p>
                              <p className={styles.predictor}>Are we right?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      

                    </div>

                    <div className={styles.graph}>
                      <Example data={data}/>
                    </div> 

                  <div className={styles.singleBar}>
                    <SingleResponsiveBar data={singleBarData}/>

                    <div className={styles.types}>
                      <div className={styles.item}>
                        <div className={styles.color}></div>
                        <p className={styles.name}>Leftovers - 12%</p>
                      </div>
                      <div className={styles.item}>
                        <div className={styles.color}></div>
                        <p className={styles.name}>Expenses - 38.5%</p>
                      </div>
                      <div className={styles.item}>
                        <div className={styles.color}></div>
                        <p className={styles.name}>Subscriptions - 27.77%</p>
                      </div>
                    </div>
                  </div>
                    
                  </div>
                </div>
              </article>

              <article className={styles.payday}>
                <h4 className={styles.title}>Your next payday</h4>

               
                  <div className={styles.cards}>
                    <div className={styles.group1}>
                      <div className={`${styles.card1} ${styles.design}`}>
                        <div style={{ padding: '1rem'}}>
                          <i class='bx bxs-purchase-tag'></i>
                          <p>Your Priciest Purchase</p>
                          <p className={styles.amount}>$89.44</p>
                        </div>
                        <div className={styles.graphDesign}>
                          <MostExpensiveBuy data={expData} />
                        </div>
                      </div>
                      <div className={`${styles.card2} ${styles.design}`}>
                        <
                          i class='bx bxs-bowl-rice' ></i>
                        <p className={styles.amount}>$89.44</p>
                        <p>Leftovers</p>
                        <div className={styles.pieData}>
                          <MyResponsivePie data={leftoverData} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.group2}>
                      <div className={`${styles.card3} ${styles.design}`}>
                        <i class='bx bxs-wallet' ></i>
                        <p className={styles.amount}>$89.44</p>
                        <p>Spent So Far</p>
                      </div>
                      <div className={`${styles.card4} ${styles.design}`}>
                        <i class='bx bxs-save' ></i>
                        <p className={styles.amount}>$89.44</p>
                        <p>Your Savings Goal</p>
                      </div>
                    </div>
                  </div>
                
              </article>
            </section>

            <section className={styles.savings}>
              <article className={styles.savingsExpected}>
                <div className={styles.expectedTitle} >
                  <p>Expected to save:</p>
                  <Dropdown className={styles.dropdown}>
                  <Dropdown.Toggle variant="outline-success" id="dropdown-basic" style={{ borderRadius: 50, fontSize: '0.8rem'}}>
                    This Month
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className={styles.subheader}>
                  <p className={styles.amountExpected}>$1,125.89</p>
                  <div className={styles.rate}>
                    <div>
                      <p className={styles.amount}><span><i class='bx bxs-right-top-arrow-circle'></i></span>+3.9%</p>
                  </div>
                  </div>
                </div>
              </article>

             

              <article className={styles.interest}>
                    <div className={styles.interestCash}>
                      <p>Interest</p>
                      <p className={styles.amount}>+$12.10</p>
                    </div>

                    <hr width="1" size="20" />

                    <div className={styles.interestCash}>
                      <p>Interest</p>
                      <p className={styles.amount}>+$12.10</p>
                    </div>

                    <hr width="1" size="20" />

                    <div className={styles.interestCash}>
                      <p>Interest</p>
                      <p className={styles.amount}>+$12.10</p>
                    </div>
                  </article>

                  <div className={styles.graph}>
                    <MyResponsiveBar data={bardata}/>
                  </div>

                  <article className={styles.savingAccounts}>
                    <div className={styles.wrapper}>
                      <div className={styles.container}>
                        <div className={styles.details}>
                          <p className={styles.tagName}>Emergency Fund</p>
                          <p className={styles.bank}>Mukadi Bank of America</p>
                          <p className={styles.amount}>
                            $32,645.08
                            <span><strong>0.03%</strong> interest</span>
                            </p>
                            <div className={styles.bonus}>
                              <div>
                                <p className={styles.title}>Last deposit</p>
                                <p className={styles.subdetail}>$212.00</p>
                              </div>

                              <div>
                                <p className={styles.title}>Average Monthly Gain</p>
                                <p className={styles.subdetail}>$212.00</p>
                              </div>

                              <div>
                                <p className={styles.title}>Last deposit Date</p>
                                <p className={styles.subdetail}>$212.00</p>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className={styles.scrollContainer}>
                        <div className={styles.detail}>
                          <p className={styles.bank}>Chase Bank LLC</p>
                          <div className={styles.amountDetails}>
                            <div>
                              <p className={styles.amount}>$32,645.08</p>
                              <p><span><i class='bx bxs-right-top-arrow-circle'></i></span>+3.9%</p>
                            </div>
                            
                            <div className={styles.itemInterest}>
                              <p>Interest</p>
                              <p>2.39%</p>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
            </section>
           
          </div>
          {/* <Overview2 className={styles.overview2} />  */}

          {/* <article className={styles.comparison}>
            <div className={styles.wrapper}>
            <div className={styles.graphHeading}>
              <h4 className={styles.title}>Spending to Savings</h4>
              <div className={styles.legend}>
                <div className={styles.line1}>
                  <div className={styles.color}></div>
                  <div className={styles.name}>Savings</div>
                </div>
                <div className={styles.line2}>
                  <div className={styles.color}></div>
                  <div className={styles.name}>Spending</div>
                </div>
              </div>
              <div className={styles.time}>
                <Dropdown className={styles.dropdown}>
                  <Dropdown.Toggle variant="outline-success" id="dropdown-basic" style={{ borderRadius: 50}}>
                    Monthly
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            
             <div className={styles.graph}>
               <div className={styles.graphData}>
                <Example data={data}/>
              </div>

              <div className={styles.dataEntry}>
              <Form>
              <Row className='mb-3'>
                <Col>
                  <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Label>Select an account</Form.Label>
                    <Form.Select size="lg">
                      <option>Emergency Account</option>
                    </Form.Select>
                    <Form.Text className="text-muted">
                      Default is Emergency Account.
                    </Form.Text>
                  </Form.Group>
                </Col>

                
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Custom Interest</Form.Label>
                    <InputGroup className="mb-3">
                    
                      <Form.Control aria-label="Text input with dropdown button" />

                      <DropdownButton
                        variant="outline-secondary"
                        title="Dropdown"
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                      </DropdownButton>
                    </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Custom Interest</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Col>
                  <Col>
                  <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Label>Select Time Frame</Form.Label>
                    <Form.Select>
                      <option>Next 3 Months</option>
                    </Form.Select>
                  </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Calculate Your Savings
                </Button>
              </Form>
              </div>
            </div> 
            </div>
          </article>  
          */}


          <div className={styles['main-content']}>
  
          </div>
        </main>
    </div>
  )
}

// export const getServerSideProps = async (context) => {
//   const { user } = await supabase.auth.api.getUserByCookie(context.req);
  

//   // but if we don't have a client then...
//   if (!user) {
//     return {
//       redirect: {
//         permanent: false, 
//         destination: '/login', 
//       }, 
//       props: {},
//       };
//     }

//     // if we have a user, let's return empty props 
//     return {
//       props: { },
//     }
//   };


export default index