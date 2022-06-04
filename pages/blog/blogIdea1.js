import React from 'react'
import styles from '/styles/post-example.module.scss'
import { Nav, Navbar, Container, Button, InputGroup, FormControl} from 'react-bootstrap'
import Footer from '../../components/Footer';

const blogIdea1 = () => {

  const postContent = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum metus nec arcu placerat laoreet. Phasellus porttitor velit sit amet leo tincidunt imperdiet. Nam maximus egestas tincidunt. Sed porttitor porta est, sit amet pulvinar turpis sollicitudin non. Nam sed mi.';


  return (
    <div style={{ backgroundColor: '#F5F0F6'}}>
      <header className={styles['navbar']}>
            <nav>
                <Navbar className={styles.navi}>
                    <Container className={styles.container}>
                        <Navbar.Brand href="http://localhost:3000/" className={styles.logo}>
                            <img src='/mukadi-logo-black.svg' style={{ height: '2.4rem' }} />
                            <img src='MUKADI.svg' alt="" />
                        </Navbar.Brand>
                    </Container>

                    <Container className={styles.container}>
                        <Nav className={styles['nav-options']}>
                            <Nav.Link href="#" className={styles.link}>Home</Nav.Link>
                            <Nav.Link href="#" className={styles.link}>Features</Nav.Link>
                            <Nav.Link href="#" className={styles.link}>Blog</Nav.Link>
                            <Nav.Link href="#" className={styles.link}>About</Nav.Link>
                        </Nav>
                    </Container>

                    <Container className={styles.container}>
                            <Button variant="outline-primary">
                                Coming Soon
                            </Button>

                            <Button variant="outline-primary">
                                Instagram
                            </Button>
                    </Container>
                </Navbar>
            </nav>
        </header>

        <section className={styles.blog}>
          
          <div className={styles.blogContent}>
              
              <div className={styles.firstSection}>


                <div style={{ margin: '0 3rem 9rem 3rem'}}>
                  <ul className={styles.tags}>
                    <li><a href=''>Growth</a></li>
                    <li><a href=''>Finance</a></li>
                  </ul>

                  <div className={styles['extra-details']}>
                    <p>Feb 22, 2021</p>
                    <p>7 Min Read</p>
                </div>

                  <h1>My Longtail Keyword <br/>Title About Some Topic.</h1>
                </div>

                <div className={styles.side1}>
                  <p>{postContent}</p>
                </div>

                <div className={styles.side2}>
                  <p>{postContent}</p>
                  <div className={styles.mainImage}></div>
                </div>


              </div>
            </div>
        </section>

        <section>
          <Footer />
        </section>
    </div>
  )
}

export default blogIdea1