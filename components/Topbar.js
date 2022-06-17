import React from 'react'
import styles from '../styles/topbar.module.scss'
import { InputGroup, Button, FormControl} from 'react-bootstrap'

const Topbar = () => {
  return (
    <header className={styles['header']}>
        <div className={styles.content}>
            <div className={styles.message}>
                <InputGroup className="mb-3" style={{display: 'flex', alignItems: 'center'}}>
                    <FormControl
                    placeholder="Search for something here..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ padding: '1.1rem', width: '25rem', borderRadius: '10px', border: 'none'}}
                    />
                    <Button variant="outline-secondary" id="button-addon2"
                    style={{ 
                        border: 'none', position: 'absolute', right: '2rem',
                        backgroundColor: '#FBE6DA', borderRadius: '10px', width: '5rem', 
                        textAlign: 'center', zIndex: 10 }}>
                        <i class='bx bx-search'></i>
                    </Button>
                </InputGroup>
            </div>
            


            <div className={styles['notif-profile']}>
                <i class='bx bx-bell' ></i>
                <i class='bx bx-message-dots' ></i>
                <div className={styles['profile-details']}>
                    <div className={styles['profile-content']}>
                        <img src="/homepage-header.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Topbar