import React from 'react';
import styles from '../styles/extrasidebar.module.scss'
import SidebarSavingsGraph from './charts/SidebarSavingsGraph';

function ExtraSidebar() {
  return (
    <div>
        <div className={styles['extra-sidebar']}>

          <div className={styles['highest-purchase']}>
            <div className={styles['purchase-wrapper']}>
              <p className={styles['header-title']}>Highest Purchase This Month</p>
              <p className={styles['price']}>$212.12</p>
              <p className={styles['product-detail']}>DISCOVER E-PAYMENT 0185 WEB ID: 2510020270</p>
              <p className={styles['purchase-date']}>Purchased on 10, Sep. 2021 at 3:32 PM</p>
            </div>
          </div>

          <p className={styles['section-title']}>Your Recent Transactions</p>

          <div className={styles['recent-transactions']}>
            <p className={styles['buy-date']}>13, Sep. 2021</p>

            <div className={styles['purchase-item']}>

              <i class='bx bxs-devices' style={{ fontSize: '2.5rem'}}></i>

              <div className={styles['product-info']}>
                <p className={styles['product-service']}>Apple iTunes</p>
                <p className={styles['product-date']}>10, Sep. 2021 at 3:32 PM</p>
              </div>

              <p className={styles['product-price']}>$10.52</p>
            </div>

            <div className={styles['purchase-item']}>

              <i class='bx bxs-devices' style={{ fontSize: '2.5rem'}}></i>

              <div className={styles['product-info']}>
                <p className={styles['product-service']}>Apple iTunes</p>
                <p className={styles['product-date']}>10, Sep. 2021 at 3:32 PM</p>
              </div>

              <p className={styles['product-price']}>$10.52</p>
            </div>

            <p className={styles['buy-date']}>13, Sep. 2021</p>

            <div className={styles['purchase-item']}>

              <i class='bx bxs-devices' style={{ fontSize: '2.5rem'}}></i>

              <div className={styles['product-info']}>
                <p className={styles['product-service']}>Apple iTunes</p>
                <p className={styles['product-date']}>10, Sep. 2021 at 3:32 PM</p>
              </div>

              <p className={styles['product-price']}>$10.52</p>
            </div>
          </div>

          <div className={styles['upcoming-income']}>
            <p className={styles['section-title']} style={{ marginTop: '5%'}}>Your Price Breakdown</p>


            <div className={styles['budget-grid']}>
              <div className={`${styles['grid-item-1']} ${styles.rent}`}>
                <SidebarSavingsGraph />
                <p className={styles['savings-graph']}>Savings This Week</p>
              </div>
              <div className={`${styles['grid-item-2']} ${styles.rent}`}>
                <p className={styles['expense-graph']}>Expenses This Week</p>
              </div>
              <div className={`${styles['grid-item-3']} ${styles.rent}`}>
                <p className={styles['expense-graph']}>Card Utilization</p>
              </div>
              <div className={`${styles['grid-item-4']} ${styles.rent}`}>
                <p className={styles['expense-graph']}>Card Utilization</p>
              </div>
            </div>

          </div>
        </div>
    </div>
  );
}

export default ExtraSidebar;
