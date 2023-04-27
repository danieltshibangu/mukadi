import React from 'react';
import { Dropdown,Accordion } from 'react-bootstrap';
import DecisionsGraph from '../charts/rightSidebar/baseline/baseLineGoals';
import choiceData from '../charts/rightSidebar/baseline/data';
import GainedGraph from '../charts/rightSidebar/Mini-graphs/gained/GainedGraph';
import LossGraph from '../charts/rightSidebar/Mini-graphs/loss/LossGraph';
import styles from '../styles/extrasidebar.module.scss'


function ExtraSidebar() {
  return (
    <section className={styles.rightSidebar}>
      <div className={styles.wrapper}>
        <div className={styles.topbar}>
   
          <h4 className={styles.decisionNum}>
            <p className={styles.topNum}>08</p>
            <p className={styles.title}> key decisions made.</p>
            <p className={styles.description}>
              These are the decisions that had the greatest impact.
              Neutral decisons had little to no impact on finances.
            </p>
          </h4>

        <article className={styles.decisionCount}>
        <Accordion>
              <Accordion.Item  style={{border: 'none', background: 'none'}} eventKey="0">
                <Accordion.Header  style={{border: 'none', background: 'none'}}>
                  <div className={styles.number}>
                    4
                    <span className={styles.title}> bad decisions</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body  style={{border: 'none', overflowY: 'scroll'}}>
                  <div className={styles.item}>
                    <div className={styles.itemHeader}>
                      <div className={styles.price}>-$78.77</div>
                      <div className={styles.date}>On Thurs. Oct. 19th</div>
                    </div>

                    <div className={styles.itemDetail}>
                      <p>Category: Overspending</p>
                      <p>Changes:</p>
                      <p>
                        <i class='bx bxs-right-down-arrow-circle'></i>
                        24% decrease in savings for month
                      </p>
                    </div>
                    <hr/>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"  style={{border: 'none', background: 'none'}}>
                <Accordion.Header  style={{border: 'none', background: 'none'}}>
                <div className={styles.number}>
                    3
                    <span className={styles.title}> good decisions</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body  style={{border: 'none', overflowY: 'scroll'}}>
                  <div className={styles.item}>
                    <div className={styles.itemHeader}>
                      <div className={styles.price}>+$209.33</div>
                      <div className={styles.date}>On Oct. 12th</div>
                    </div>

                    <div className={styles.itemDetail}>
                      <p>Category: Saving</p>
                      <p>Changes:</p>
                      <p>
                        <i class='bx bxs-right-down-arrow-circle'></i>
                        met weekly saving goal
                      </p>
                    </div>
                    <hr/>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2"  style={{border: 'none', background: 'none'}}>
                <Accordion.Header  style={{border: 'none', background: 'none'}}>
                <div className={styles.number}>
                    20
                    <span className={styles.title}> neutral decisions</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body  style={{border: 'none', overflowY: 'scroll'}}>
                  <div className={styles.item}>
                    <div className={styles.itemHeader}>
                      <div className={styles.price}>+$209.33</div>
                      <div className={styles.date}>On Oct. 12th</div>
                    </div>

                    <div className={styles.itemDetail}>
                      <p>Category: Saving</p>
                      <p>Changes:</p>
                      <p>
                        <i class='bx bxs-right-down-arrow-circle'></i>
                        met weekly saving goal
                      </p>
                    </div>
                    <hr/>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </article>
        </div>


          <article className={styles.decisionData}>
              <div className={styles.amount}>
                <div className={styles.rate}>
                  <p className={styles.moneyManaged}>$387.33</p>
                  <p className={styles.title}>Managed this week</p>
                  <p className={styles.description}>
                    This represents all money you've touched between your <br/>decisions
                    whether you've spent or gained it. 
                  </p>
                </div>
              </div>

              <div className={styles.comparison}>
           
                <div className={styles.gain}>
                  <div className={styles.graphInfo}>
                    <p className={styles.title}>Gained</p>
                    <p className={styles.amountGained}>
                      $310.10
                    </p>

                    <div className={styles.graph}>
                      <GainedGraph data={choiceData}/>
                    </div>
                  </div>
                
                

                  <div className={styles.moreInfo}>
                    <div className={styles.lastSpent}>
                      <p className={styles.title}>Last Spent</p>
                      <p>$12.98</p>
                    </div>
                    <div className={styles.dateSpent}>
                      <p className={styles.title}>Date</p>
                      <p>Sept. 11</p>
                    </div>
                  </div>
                  
                </div>
                




                <div className={styles.loss}>
                  <div className={styles.graphInfo}>
                    <p className={styles.title}>Spent</p>
                    <p className={styles.amountSpent}>
                      $310.10
                    </p>

                    <div className={styles.graph}>
                      <LossGraph data={choiceData}/>
                    </div>
                  </div>

                  <div className={styles.moreInfo}>
                    <div className={styles.lastSpent}>
                      <p className={styles.title}>Last Spent</p>
                      <p>$12.98</p>
                    </div>
                    <div className={styles.dateSpent}>
                      <p className={styles.title}>Date</p>
                      <p>Sept. 11</p>
                    </div>
                  </div>
                </div>
              </div>
          </article>



          <article className={styles.behavior}>
            <h5 className={styles.subheading}>Spending Behavior</h5>
            <p className={styles.description}>
              Track your spending behavior throughout the week.<br />
              Get insights on how much and how often you're spending.
            </p>
            
            <div className={styles.graph}>
              <DecisionsGraph data={choiceData}/>
            </div>

            
            <div className={styles.expDay}>
              <p className={styles.tag}>Most Expensive Day</p>
              <div className={styles.dayData}>
                <p className={styles.day}>Friday</p>
                <p className={styles.amount}><span>You spent</span> $112.08</p>
              </div>
              
            </div>

            <div className={styles.expensivePurchase}>

              
              <div className={styles.item1}>
                <p className={styles.num}>01</p>
                <div className={styles.tag}>Highest Purchase</div>
                <p className={styles.expAmount}>$90.02</p>
                <p className={styles.date}>On Thurs. Dec. 11</p>
              </div>
              <div className={styles.item2}>
                <p className={styles.num}>02</p>
                <p className={styles.expAmount}>$90.02</p>
                <p className={styles.date}>On Thurs. Dec. 11</p>
              </div>
              <div className={styles.item3}>
                <p className={styles.num}>03</p>
                <p className={styles.expAmount}>$90.02</p>
                <p className={styles.date}>On Thurs. Dec. 11</p>
              </div>
            </div>

          </article>
      </div>
    </section>
  );
}

export default ExtraSidebar;
