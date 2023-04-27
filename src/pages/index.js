import react, {useState, useEffect} from 'react'
import styles from '/styles/index.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DecisionsFeatureDisplay from '../../components/DecisionsFeatureDisplay';

const index = () => {
    
    const titleDetails = 
        [
            [
                'shopping.svg',
                'Discover your best and worst financial moves that help or hinder your goals.'
            ],
            [
                'dragon-chart.svg', 
                "Get to know how you spend, and what habits are setting you back from peace of mind."
            ],
            [
                'fish.svg',
                'Stay a few steps ahead by knowing how purchases may affect your finances in the long run.'
            ]
        ]


    /// default will be the first item in list
    const [current, setCurrent] = useState(0);



    const clickDisplayData = () => {
        return <DecisionsFeatureDisplay 
                    key={(current)}
                    image={titleDetails[current][0]}
                    detail={titleDetails[current][1]}
                >
                </DecisionsFeatureDisplay>
    }
    
    
    return (
       <section className={styles.page}>
           <div className={styles.ad}></div>
           <header className={styles.navigation}>
                <a className={styles.logo} src='/'>
                <img src='/mukadi-logo-full.svg' className={styles.innerLogo}/>
                </a>
                <div className={styles.mainItems}>
                        <div className={styles.extra}>
                        </div>
                </div>
            </header>


           <section className={styles.pageWrapper}>
               <section className={styles.mainCopy}>
                    <div className={styles.wrapper}>

                    <div className={styles.mainImage}>
                        <img src='/main-1024.svg' className={styles.image1024}/>
                    </div>
                        <div className={styles.mainContent}>
                            <div className={styles.miniMessage}>
                                <i className='bx bx-message-square-dots'></i>
                                <p>Let's make better decisions for tomorrow.</p>
                            </div>
                            <h1 className={styles.headline}>
                                Helping you make <span>the best decisions</span> a reality.
                            </h1>

                            <p className={styles.subHeadline}>
                                Mukadi provides a unique view 
                                of your finances focusing on how 
                                your buying decisons impact finances today and in the future.
                            </p>


                            <div className={styles.registerEmail}>

                                <Form className={styles.emailForm}>
                                    <Form.Group className={styles.emailEntry} controlId="formBasicEmail">
                                        <Form.Control className={styles.entryInfo} type="email" placeholder="Your email" />
                                    

                                    <Button variant="primary" type="submit"  className={styles.button}>
                                        <p>Get Early Access</p>
                                    </Button></Form.Group>
                                    <Form.Text className={styles.subtext}>
                                        *We'll keep you updated.
                                    </Form.Text>
                                </Form>

                            
                            </div>

                            <div className={styles.additionalInfo}>
                                
                                <div className={styles.featureOutline}>
                                    <div className={styles.featureImage}></div>
                                    <div className={styles.featureImageMini}></div>
                                </div>
                                <div className={styles.description}>
                                    <h5>Plan ahead, rest easy</h5>
                                     <p className={styles.subHeadline}>
                                        Mukadi provides a unique view 
                                        of your finances focusing on how 
                                        your buying decisons impact finances today and in the future.
                                    </p>
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </section>
            </section>

            <section className={styles.decisionfeaturesWide}>
                <h2 className={styles.title}>Let Mukadi guide you</h2>
                <div className={styles.description}>
                    <p>Designed to help you make better financial decisions in an easy-to-follow format.</p>
                </div>
                <div className={styles.wrapper}>
                    

                    <div className={styles.content}>
                        <div className={styles.decisionFeatures}>
                            <p onClick={() => {setCurrent(0)}} style={current === 0 ? 
                                { 
                                    backgroundColor:'#7FD1AE',
                                    padding: '0.3em 0.8em',
                                    borderRadius: '20px',
                                    transition: 'padding 0.2s ease-in-out, background-color 0.2s linear, opacity 0.2s linear, visibility 0s 0s'
                                }
                                : null}
                                >
                            Balance buying decisons.
                            </p>

                            <p onClick={() => {setCurrent(1)}} style={current === 1 ? 
                                { 
                                    backgroundColor:'#7FD1AE',
                                    padding: '0.3em 0.8em',
                                    borderRadius: '20px',
                                }
                                : null}
                                >
                                Track spending behavior.
                                </p>

                                <p onClick={() => {setCurrent(2)}} style={current === 2 ? 
                                { 
                                    backgroundColor:'#7FD1AE',
                                    padding: '0.3em 0.8em',
                                    borderRadius: '20px',
                                }
                                : null}
                                >
                                Find out the impact before it's too late.
                                </p>
                        </div>

                        <div>
                            {clickDisplayData()}
                        </div>

                        {/* <div> 
                            {
                                loading ? 
                                <p>Loading your account....</p> : 
                                    accounts.map((item, i) => (  
                                        <DecisionsFeatureDisplay
                                            key={i}
                                            image={Object.values(item)[0].name}
                                            detail={Object.values(item)[0]['date-added']}
                                        >
                                        </DecisionsFeatureDisplay>   
                                    ))  
                            }
                        </div> */}
                    </div>
                </div>
            </section>

            <section className={styles.decisionFeature}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Let Mukadi guide you</h2>
                    <div className={styles.description}>
                        <p>Designed to help you make better financial decisions in an easy-to-follow format.</p>
                    </div>

                    

                    {/* <img src='/decision-girl.svg' className={styles.decisionImage} /> */}

                    <article className={styles.decisionItems}>
                        <div className={styles.decisionFeatureItem}>
                            <img src='/shopping.svg' />
                            <div className={styles.details}>
                                <h6>Balance buying decisions</h6>
                                <p>Discover your best and worst financial moves that help or hinder your goals.</p>
                            </div>
                        </div>

                        <div className={styles.decisionFeatureItem}>
                            <img src='/dragon-chart.svg' />
                            <div className={styles.details}>
                                <h6>Track spending behavior</h6>
                                <p>Get to know how you've been spending, and what habits are setting you back from peace of mind.</p>
                            </div>
                        </div>

                        <div className={styles.decisionFeatureItem}>
                            <img src='/fish.svg' />
                            <div className={styles.details}>
                                <h6>Find out the impact before it's too late</h6>
                                <p>Stay a few steps ahead by knowing how purchases may affect your finances in the long run.</p>
                            </div>
                        </div>
                    </article>
                   
                </div>
            </section>

            {/* <section className={styles.sellingPoint}>
                <h1>Don't settle for financial uncertainty</h1>
                <p>Move forward and make the decisions to make you the most money</p>
            </section> */}

            <section className={styles.featuresWide}>
                
                <div className={styles.incomeSection}>
                <p className={styles.topTitle}>Stay on top of your income at every turn of life</p>
                    <div className={styles.imageDetails}>
                        <img src='/main-income-1024-2.svg' />
                    </div>
                    
                    <p className={styles.mainHeadline}>Get a clear, easy to follow view of various income details.</p>
                    

                    <div className={styles.featureDetails}>
                        <div className={styles.incomeList}>
                            <div>
                                <i className='bx bxs-badge-check' ></i>
                                <p>Get estimates on <strong>upcoming paychecks</strong></p>
                            </div>
                            <div>
                                <i className='bx bxs-badge-check' ></i>
                                <p>Review <strong>breakdowns</strong> on income spending</p>
                            </div>
                            <div>
                                <i className='bx bxs-badge-check' ></i>
                                <p>Obtain analyses on the <strong>impacts of raises and drops</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.biggerPictureSection}>
                <h3 className={styles.topTitle}>Take a step back to see the bigger picture</h3>
                                   
                    
                    <div className={styles.imageDetails}>
                        <img src='/bigger-picture.svg' />
                    </div>
                    
                    <p className={styles.mainHeadline}>Balance your spending habits through insights on how much goes in and out of your accounts.</p>
                    <div className={styles.incomeList}>
                        <div>
                            <i className='bx bxs-badge-check' ></i>
                            <p>Follow your <strong>account changes</strong> in real-time</p>
                        </div>
                        <div>
                            <i className='bx bxs-badge-check' ></i>
                            <p>View detailed, <strong>interesting stats</strong> on spending and earnings</p>
                        </div>
                        <div>
                            <i className='bx bxs-badge-check' ></i>
                            <p><strong>Create limits</strong> on purchases over time</p>
                        </div>
                    </div>
                </div>
                

               
                
            </section>
            

            <section className={styles.features}> 
                <div className={styles.wrapper}>
                    

                    <div className={styles.feature1}>
                        <div className={styles.backdrop}>
                            <picture>
                                <img src='/construction-worker.jpg' className={styles.figure} />
                            </picture>
                            
                            <div className={styles.details}>
                                <h3 className={styles.subtitle}>Stay on top of your income at every turn of life</h3>
                                <div className={styles.incomeDetails}>
                                    <p>Get a clear, easy to follow view of various income details.</p>
                                    <div className={styles.incomeList}>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>Get estimates on <strong>upcoming paychecks</strong></p>
                                        </div>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>Review <strong>breakdowns</strong> on income spending</p>
                                        </div>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>Obtain analyses on the <strong>impacts of raises and drops</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.feature2}>
                        <div className={styles.backdrop}>
                            <picture>
                                <img src='/beach-group.jpg' className={styles.figure} />
                            </picture>
                            
                            <div className={styles.details}>
                                <h3 className={styles.subtitle}>Grow each area of your savings</h3>
                                <div className={styles.incomeDetails}>
                                    <p>Create detailed savings strategies that help you save consistently.</p>
                                    <div className={styles.incomeList}>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>Develop an <strong>ever-growing Emergency fund</strong></p>
                                        </div>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>Track savings growth using <strong>compounding interest tools</strong></p>
                                        </div>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>Choose from several popular <strong>savings strategies</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.feature3}>
                        <div className={styles.backdrop}>
                            <picture>
                                <img src='/family.jpg' className={styles.figure} />
                            </picture>
                            
                            <div className={styles.details}>
                                <h3 className={styles.subtitle}>Take a step back to see the bigger picture</h3>
                                <div className={styles.incomeDetails}>
                                    <p>Balance your spending habits through insights on how much goes in and out of your accounts.</p>
                                    <div className={styles.incomeList}>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>Follow your <strong>account changes</strong> in real-time</p>
                                        </div>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p>View detailed, <strong>interesting stats</strong> on spending and earnings</p>
                                        </div>
                                        <div>
                                            <i className='bx bxs-badge-check' ></i>
                                            <p><strong>Create limits</strong> on purchases over time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button variant="primary" type="submit"  className={styles.button}>
                        <p>Explore Now</p>
                    </Button>
                </div>
            </section>

            <footer className={styles.footer}>
                <img src='/mukadi-logo-white.svg' className={styles.innerLogo}/>

                <div className={styles.links}>
                    <p>Making the best decisions a reality.</p>
                </div>
            </footer>

            

            
            </section>
       
    )
}

export default index