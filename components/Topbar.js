import React, {useState, useEffect} from 'react'
import styles from '../styles/topbar.module.scss'
import { InputGroup, Button, FormControl} from 'react-bootstrap'
import supabase from '../supabase/supabase-config'

const Topbar = () => {

    

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
    <header className={styles['header']}>
        <div className={styles.content}>
            {/* <div className={styles.message}>
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
                        <i className='bx bx-search'></i>
                    </Button>
                </InputGroup>
            </div> */}

            <div className={styles.title}>
                <h1 className={styles.openingMessage}>Welcome Back, {capitalizeFirstLetter('Dan')}</h1>

                <p className={styles.subMessage}>{messages[currentIndex]}</p>
            </div>
            


            {/* <div className={styles['notif-profile']}>
                <i className='bx bx-bell' ></i>
                <i className='bx bx-message-dots' ></i>
                <div className={styles['profile-details']}>
                    <div className={styles['profile-content']}>
                        <img src="/homepage-header.jpg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    </header>
  )
}

export default Topbar