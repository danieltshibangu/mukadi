import React from 'react'
import { InputGroup, Button, FormControl, Dropdown} from 'react-bootstrap'
import styles from '/styles/component-styles/risk.module.scss'


const Risk = () => {
  return (
    <div>
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
    </div>
  )
}

export default Risk