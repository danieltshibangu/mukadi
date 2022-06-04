// www.mukadi.com/app/subscriptions
import { Layout } from "../../components/Layout";
import { useState, Fragment } from 'react';
import Sidebar from "../../components/Sidebar";
import styles from '../../styles/app-design/subscriptions.module.css'
import CardFront from "../../components/CardFront";
import UpcomingChargeTab from "../../components/tabs/UpcomingChargeTab";
import HighestSubTab from "../../components/tabs/HighestSubTab";
import SubscriptionList from "../../components/SubscriptionList";
import { Button } from "react-bootstrap";
import SubscriptionInfo from "../../components/SubscriptionInfo";
import { SubscriptionTab } from "../../components/SubscriptionTab";


const subscriptionPage = () => {

  const [ hidden, setHidden ] = useState(false)
  

  const [sub, setSub] = useState([
    {
      id: 0,
      card: 'Chase x0782',
      title: 'Netflix', 
      type: 'Entertainment',
      firstPayment: 'Jan. 2021',
      amount: 10.23, 
      time: '4:45 pm',
      renewDate: 'Dec. 23, 2021'
    }, 
    {
      id: 1,
      card: 'Discover x0185',
      title: 'Hulu', 
      type: 'Entertainment',
      time: '3:27 pm',
      firstPayment: 'Jan. 2021',
      amount: 1.02, 
      
      renewDate: 'Dec. 23, 2021'
      }, 
      {
      id: 2,
      card: 'Amex x5001',
      title: 'Disney Plus', 
      type: 'Entertainment',
      firstPayment: 'Jan. 2021',
      amount: 13.05, 
      time: '3:27 pm',
      renewDate: 'Dec. 23, 2021'
      },
      {
        id: 3,
        card: 'Amex x5001',
        title: 'Disney Plus', 
        type: 'Entertainment',
        firstPayment: 'Jan. 2021',
        amount: 13.05, 
        time: '3:27 pm',
        renewDate: 'Dec. 23, 2021'
        }
  ])


  // sample data for subscription box history 
  const [ recentSub, setRecentSub ] = useState([
    {
      id: 0,
      name: sub[0].title,
      card: 'Chase x0782',
      type: 'Standard', 
      lastPayment: 'Jan. 2021',
      amount: 10.23, 
    }, 
    {
      id: 1,
      name: sub[0].title,
      card: 'Chase x0782',
      type: 'Premium', 
      lastPayment: 'Jan. 2021',
      amount: 13.21, 
    },
    {
      id: 1,
      name: sub[0].title,
      card: 'Chase x0782',
      type: 'Premium', 
      lastPayment: 'Jan. 2021',
      amount: 13.21, 
    },
    {
      id: 1,
      name: sub[0].title,
      card: 'Chase x0782',
      type: 'Premium', 
      lastPayment: 'Jan. 2021',
      amount: 13.21, 
    },
    {
      id: 1,
      name: sub[0].title,
      card: 'Chase x0782',
      type: 'Premium', 
      lastPayment: 'Jan. 2021',
      amount: 13.21, 
    },
    {
      id: 1,
      name: sub[0].title,
      card: 'Chase x0782',
      type: 'Premium', 
      lastPayment: 'Jan. 2021',
      amount: 13.21, 
    },
  ])

  // change subscription info based on click  
  const [ showList, setShowList ] = useState(0)

  return (
    <div>
      <header className={styles['header']}>
        <div className={styles['header-left']}>
          <div className={styles['main-text']}> 14 Total Subscriptions</div>
            <div className={styles['sub-text']}>You pay $52.87 a month in total for subscriptions.</div>
          </div>

        <div className={styles['header-right']}>
          <div className={styles.profile}></div>
          <div className={styles.updates}>
            <img src="/updates.png" />
          </div>
          <div className={styles.settings}>
            <img src="/settings.png" />
          </div>
        </div>
      </header>

      <section style={{ display: 'flex', marginTop: '3%'}}>
        <div className={styles['card-info']}>
        <CardFront />
        </div>

          <div style={{ position: 'relative', width: '40%', marginLeft: '3% '}}>
            <div className={styles['card-details']}>
              <div className={styles['monthly-total']}>
                <p className={styles['sub-title']}>Expected Monthly Total</p>
                <p className={styles['sub-amount']}>$35.12</p>
                <p className={styles['sub-date']}>Updated Jan. 4</p>
              </div>
              <div className={styles['sub-on-card']} style={{ margin: '0 8%'}}>
                <p className={styles['sub-title']}>Subscriptions on Card</p>
                <p className={styles['sub-amount']}>3 Total</p>
                <p className={styles['sub-date']}>Updated Jan. 4</p>
              </div>
              <div className={styles['sub-on-card']}>
                <p className={styles['sub-title']}>Subscription Percentage</p>
                <p className={styles['sub-amount']}>12%</p>
                <p className={styles['sub-date']}>Updated Jan. 4</p>
              </div>
              <div className={styles['sub-rate']} style={{ margin: '0 8%'}}>
                <p className={styles['sub-title']}>Most Recent Payment</p>
                <p className={styles['sub-amount']}>$10.01</p>
                <p className={styles['sub-date']}>On Jan. 4</p>
              </div>
            </div>

            


          </div>
          
          <div style={{margin: '-2% 0 0 3%'}}>
            <UpcomingChargeTab />
            <HighestSubTab />
          </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <i class='bx bxs-quote-alt-left' style={{ fontSize: '2rem'}}></i>
        <p style={{ 
            fontFamily: 'Poppins',
            fontSize: '1.2rem', 
            fontWeight: 200, 
            margin: '0 1%', 
            padding: '3% 1%'
        }}>Choose your subscriptions wisely.</p>
        <i class='bx bxs-quote-alt-right' style={{ fontSize: '2rem'}}></i>
        </div>

      
      <div style={{ display: 'flex', marginLeft: '9%'}}>
        
        <div style={{ width: '20%'}}>
          <h2 className={styles['sub-header-title']}>Subscriptions</h2>
          <SubscriptionList sub={sub} onSelect={(id) => setShowList(showList = id)}/>
        </div>
        
        <div  style={{ width: '70%', height: '30%'}}>
          <SubscriptionInfo recentSub={recentSub} sub={sub[showList]}  />
        </div>
      </div>


      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default subscriptionPage