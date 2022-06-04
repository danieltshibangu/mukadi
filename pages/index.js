import React, { Fragment} from 'react'
import styles from '/styles/splitB.module.scss'
import { Nav, Navbar, Container, Button, InputGroup, FormControl} from 'react-bootstrap'
import Link from 'next/link'
import Footer from '../components/Footer'
import HeaderNav from '/components/HeaderNav'

const splitB = () => {
  return (
    <div style={{ position: 'relative'}}>
        <HeaderNav />
        <div style={{ position: 'absolute', height: '120vh', width: '100%', zIndex: -1, backgroundColor: '#FBE6DA', right: 0, top: 0}}>
        </div>


        <section className={styles.headerStyle2}>
            <div className={styles.bannerContent}>
                <div className={`${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>
                    <div className={styles.introCopy}>
                        The budgeting app that <strong style={{ color: '#f89a63'}}>adapts </strong> 
                        to your <em style={{ backgroundColor: '#D9F0DC'}}>financial goals.</em>
                        </div>
                    </div>

                <div className={`${styles.animated2} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}>
                    <p className={styles.copydetail}>
                        It's not just a bird's eye view of your finances but a system to help you focus 
                        on achieving your financial goals.
                    </p>
                </div>

                <div className={styles.joinListBar}>
                    <InputGroup className="mb-1">
                        <FormControl
                        placeholder="your-email@mukadi.com"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        style={{ padding: '3%', fontFamily: 'Poppins'}}
                        />
                        <Button variant="primary" id="button-addon2">
                        <p>Sign me up</p>
                        </Button>
                    </InputGroup>
                </div>

                
            

                <div className={styles.imageLineUp}>
                    <img src='/wallet.jpg' alt=''/>
                    <img src='/shopping.jpg' alt=''  style={{ marginTop: '10rem' }}  />
                    <img src='/website-assets/checking.svg' alt='' className={styles.appImage}/>
                    <img src='/disney-sub.jpg' alt='' style={{ marginTop: '10rem' }} />
                    <img src='/finance-image.jpg' alt='' />
                </div>
            </div>
        </section>


        {/* <section className={styles['landing-page-front']}>
            <div className={styles.content}>

                <h2 className={styles['copy-title']}>
                     The best sleep of your life <br/>comes when you feel <br/>the comfort <br/>of having your finances<br /> in order.

                    Get the best <br/>sleep of your life.<br/> We'll handle <br/>the rest. 
                
                    <span>Budget daily. <br/>Saving monthly. <br/>Growing evermore.<br/></span> 

                    Budget. <br/>Saving. Growing.<br/>
                    <span style={{ color: '#FF743C'}}>Helping</span> you <br /> <span style={{ color: '#6ED47C'}}>rest</span> easy. 
                </h2>

                <p className={styles['copy-info']}>
                    It's not just a bird's eye view of your finances but a system to help you focus 
                    on achieving your financial goals.<br /><br />

                    Through this free offer, we'll give you the tools you need to sleep better with a 
                    clear idea of where your money was, is, and the grand heights it's headed to next.

                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. 
                </p>

                <div style={{ width: '67%'}}>
                    <p className={styles['action-supertitle']}>Be the first to try at launch!</p>
                    <InputGroup className="mb-1">
                        <FormControl
                        placeholder="Your Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        style={{ padding: '3%'}}
                        />
                        <Button variant="primary" id="button-addon2">
                        <p>Sign me up</p>
                        </Button>
                    </InputGroup>
                </div>
            </div>

            <div className={styles['landing-page-image']}>
                <div className={styles.img1}></div>
                <div className={styles.shadow1}></div>
                <div className={styles.img2}></div>
                <div className={styles.shadow2}></div>
                <img src='/website-assets/credit.svg' alt='' className={styles['credit-card-info']} />
                <img src='/website-assets/checking.svg' className={styles['app-content2']} />
                <div className={styles['quote']}>
                    <i class='bx bxs-quote-alt-left' style={{ fontSize: '4rem', color: '#000'}}></i>
                        <p style={{ 
                            fontFamily: 'Poppins',
                            fontSize: '1.2rem', 
                            fontWeight: 200, 
                            margin: '0 1%', 
                            padding: '1% 1%', 
                        }}>Choose your subscriptions wisely.</p>
                </div>
                <img src='/website-assets/budget-card-NEW.svg' className={styles['app-content3']} />
            </div>
        </section> */}


        <section className={styles['key-features']}>
        <div className={styles.exploreHow}>
            <div className={styles.content}>
              <p className={styles.intro}>Introducing our service</p>
              <p className={styles.introBottom}>Let's explore how it works</p>

              <div className={styles.benefits}>
                  <div className={styles.attentionText}>
                      <h4 className={styles.subtitle}>Benefits</h4>
                      <h3 className={styles.mainText}>A budgeting app with <strong style={{ color: '#392D38'}}>your best interests at heart and more</strong></h3>
                      <Button variant='outline-success' className={styles.inviteBtn}>Show it to me</Button>
                  </div>
                  <div className={styles.details}>
                      <div className={`${styles.asset} ${styles.item1}`}>
                        <i class='bx bx-conversation'></i>
                        <div>
                            <h5>It's secure, as all things should be</h5>
                            <p>The process of scheduling and managing hundreds of classroom training is automated, transparent and excel-free.</p>
                        </div>
                      </div>

                      <div className={`${styles.asset} ${styles.item1}`}>
                        <i class='bx bx-shopping-bag'></i>
                        <div>
                            <h5>It helps cut spending</h5>
                            <p>The process of scheduling and managing hundreds of classroom training is automated, transparent and excel-free.</p>
                        </div>
                      </div>

                      <div className={`${styles.asset} ${styles.item1}`}>
                        <i class='bx bx-wallet'></i>
                        <div>
                            <h5>It sets your goals</h5>
                            <p>The process of scheduling and managing hundreds of classroom training is automated, transparent and excel-free.</p>
                        </div>
                      </div>

                      <div className={`${styles.asset} ${styles.item1}`}>
                        <i class='bx bx-layer'></i>
                        <div>
                            <h5>It organizes your accounts</h5>
                            <p>The process of scheduling and managing hundreds of classroom training is automated, transparent and excel-free.</p>
                        </div>
                      </div>

                      <div className={`${styles.asset} ${styles.item1}`}>
                        <i class='bx bx-notification'></i>
                        <div>
                            <h5>It keeps you updated</h5>
                            <p>The process of scheduling and managing hundreds of classroom training is automated, transparent and excel-free.</p>
                        </div>
                      </div>

                      <div className={`${styles.asset} ${styles.item1}`}>
                        <i class='bx bx-user-circle' ></i>
                        <div>
                            <h5>It fits your needs</h5>
                            <p>The process of scheduling and managing hundreds of classroom training is automated, transparent and excel-free.</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.keyFeature1}>
            <div className={styles.bannerContent}>
                <div className={styles.riskImages}></div>
                <div className={styles.riskInfo}>
                    <h3 className={styles.riskTitle}>What's the risk?</h3>
                    <h2 className={styles.riskHeader}>Assess the risk of each purchase before you buy</h2>
                    <p className={styles.riskDetail}>Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Create professional ads, branded content, and stunning stories in minutes.</p>
                </div>
            </div>
        </section>

        <section className={styles.founderMessage}>
        <div className={styles.content}>
               <img src='/website-assets/MUKADI_FOUNDER.svg' alt='' />
            <div className={styles.mission}>
                <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
        </section>

        

        <section className={styles.generalFeatures}>
            <div className={styles.content}>
                <div> 
                    <h3 className={styles.featureSub}>Key Features</h3>
                    <h2 className={styles.featureTitle}>One App, Many Uses</h2>
                </div>

                <div className={styles.features}>
                    <div className={styles.savings}>
                        <i class='bx bx-save'>
                            <div className={styles.circle}></div>
                        </i>
                        <h5>Get Future Estimates around How Much You Save</h5>
                        <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                    </div>

                    <div className={styles.checking}>
                        <i class='bx bx-money'>
                            <div className={styles.circle}></div>
                        </i>
                        <h5>Enterprise-wide productivity with Workflows</h5>
                        <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                    </div>

                    <div className={styles.budget}>
                        <i class='bx bx-table'>
                            <div className={styles.circle}></div>
                        </i>
                        <h5>Enterprise-wide productivity with Workflows</h5>
                        <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                    </div>

                    <div className={styles.risk}>
                        <i class='bx bx-line-chart'>
                            <div className={styles.circle}></div>
                        </i>
                        <h5>Enterprise-wide productivity with Workflows</h5>
                        <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                    </div>

                    <div className={styles.cards}>
                        <i class='bx bx-credit-card-alt'>
                            <div className={styles.circle}></div>
                        </i>
                        <h5>View a Detailed Map of Your Debit Cards</h5>
                        <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                    </div>
                </div>
            </div>
        </section>

        <hr style={{ width: '80%', margin: '0 auto'}}></hr>

        <section className={styles.aboutus}>
            <div className={styles.bannerContent}>
                <div className={styles.sideImage}>
                    <img src='/wallet.jpg' alt='' />
                </div>
                <div className={styles.aboutInfo}>
                    <h3 className={styles.title}>Our Values</h3>
                    <h2 className={styles.aboutUsCopy}>Why people <br/> choose Mukadi</h2>
                    <p className={styles.aboutUsDetails}>
                        <div className={styles.feedback}>
                            <h5>Transparent Feedback</h5>
                            <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                        </div>

                        <div className={styles.interface}>
                            <h5>Friendly Interface</h5>
                            <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                        </div>

                        <div className={styles.security}>
                            <h5>Secure and Updated</h5>
                            <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                        </div>

                        <div className={styles.support}>
                            <h5>Quick Customer Support that Listens</h5>
                            <p>Advanced automated workflows that will improve your company's efficiency and automate your processes.</p>
                        </div>
                    </p>
                </div>
            </div>
        </section>
        

        {/* <section className={styles.assets}> 
            <div> 
                <h3 className={styles['section-title']}>A clear view of the bigger picture</h3>
                <div className={styles['section-subtitle']}>
                    <i class='bx bxs-quote-alt-left'></i>
                    <p>Taking a step back can often be the quickest way forward.</p>
                    <i class='bx bxs-quote-alt-right'></i>
                </div>
            </div>

            <div className={styles['asset-format']}>
                <div className={styles['sub-content']}>
                    <div className={styles['a-side']}>
                        <div className={styles.img1}></div>
                        <div className={styles.shadow1}></div>
                        <div className={styles['sub-image']}></div>
                        <img src='/dotwall.svg' alt='' className={styles.dotwall} />
                    </div>

                    <div className={styles['b-side']}>
                        <div className={styles['asset-copy']}>
                            <h4 className={styles['asset-header']}>Know your subscriptions</h4>
                            <p className={styles['asset-detail']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>

                <div className={styles['spending-content']}> 
                    <div className={styles['a-side']}>
                        <div className={styles['asset-copy']}>
                            <h4 className={styles['asset-header']}>Track your spending habits</h4>
                            <p className={styles['asset-detail']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>

                    <div className={styles['b-side']}>
                        <div className={styles.img1}></div>
                        <div className={styles.shadow1}></div>
                        <div className={styles['spend-detail']}></div>
                    </div>
                </div>

                <div className={styles['risk-content']}>
                    <div className={styles['a-side']}>
                        <div className={styles.img1}></div>
                        <div className={styles.shadow1}></div>
                        <div className={styles['spend-detail']}></div>
                    </div>

                    <div className={styles['b-side']}>
                        <div className={styles['asset-copy']}>
                            <h4 className={styles['asset-header']}>Track your risks before you buy</h4>
                            <p className={styles['asset-detail']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        



        {/* <div>
            <h2 className={styles['section-title']}>Check out our blog</h2>
            <div className={styles['section-subtitle']}>
                <i class='bx bxs-quote-alt-left'></i>
                <p>One reason people succeed is that they have knowledge other people don't.</p>
                <i class='bx bxs-quote-alt-right'></i>
            </div>

            <p className={styles['section-description']}>
                Learn something new to help you make the best personal finance decisions.<br/> New articles posted every Friday morning (EST).
            </p>
        </div> */}

      <section>
        <Footer />
      </section> 

      
    </div>
  )
}

export default splitB