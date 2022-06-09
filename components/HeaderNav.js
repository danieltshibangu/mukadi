import React from 'react'
import styles from '/styles/navbar.module.scss'
import { Nav, Navbar, Container, Button, Form, FormControl, NavDropdown} from 'react-bootstrap'

const HeaderNav = () => {
  return (
    <div className={styles.navPanel}>
        <Navbar collapseOnSelect expand="lg"  variant="light">
  <Container style={{ paddingBottom: '5rem', display: 'flex', justifyContent: 'space-between'}}>
    <Navbar.Brand href="#home" className={styles.logos}>
      <img src='/mukadi-logo-black.svg' className={styles.logo} />
      <img src='/MUKADI.svg' className={styles.logoName} />    
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      </Nav>

      <Nav>
          <Nav.Link href="#features" className={styles.navLink}>Blog</Nav.Link>
          <Nav.Link href="#pricing" className={styles.navLink}>Features</Nav.Link>
          <Nav.Link href="#us" className={styles.navLink}>About</Nav.Link>
      </Nav>
      <Form className="d-flex">
          <Button variant="outline-success">Coming Soon</Button>
        </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default HeaderNav