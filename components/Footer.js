import React from 'react'
import Link from 'next/link'
import { Form, Button} from 'react-bootstrap'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
        <footer className={styles['footer']}>
            <hr  style={{ height: '2px', color: '#6da3d9', margin: 0}}/>
                <div className={styles['footer-wrapper']}>
                    <div className={styles.first}>

                            <div className={styles.logo}>
                                <img src='/mukadi-logo-black.svg' />
                                <img src='/MUKADI.svg' /> 
                            </div>

                            <div className={styles.signup}>
                                <p>Be the first to know the latest updates and all the recent trends in web & mobile javascript development.</p>
                                <div>
                                <Form style={{ display: 'flex', alignItems: 'baseline'}}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{width: '40%' }}>
                                        <Form.Control type="email" placeholder="your-email@mukadi.com"  style={{borderRadius: 0}} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" style={{ marginLeft: '1.2rem', display: 'flex', alignItems: 'center'}}>
                                        Send
                                        <i class='bx bx-right-arrow-alt' style={{ fontSize: '1.2rem'}}></i>
                                    </Button>
                                </Form> 
                            </div>
                        </div>
                    </div>

                    

                <div className={styles.second}>
                    <div className={styles['what-is-mukadi']}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est odio, vehicula nec arcu ac, lacinia blandit velit. Proin laoreet arcu et tortor rhoncus scelerisque vel et justo. </p>
                    </div>
                    <div className={styles.categories}>
                        <ul>
                            <p>Home</p>
                            <li><a href='#'>Coming Soon</a></li>
                        </ul>

                        <ul>
                            <p>Features</p>
                            <li><a href='#'>Subscriptions</a></li>
                            <li><a href='#'>Spending</a></li>
                            <li><a href='#'>Risk System</a></li>
                        </ul>

                        <ul>
                            <p>Company</p>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>About Us</a></li>
                        </ul>

                        <ul>
                            <p>Legal</p>
                            <li><a href='#'>Terms of Service</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles['follow-us']}>
                    <p>Follow Us!</p>

                    <div className={styles.buttons}>
                        <img src='/blog-assets/Logo blue.svg' alt='' />
                        <img src='/blog-assets/Instagram_Glyph_Gradient_RGB.png' alt='' />
                    </div>
                </div>
                    
                </div>
            </footer> 
  )
}

export default Footer