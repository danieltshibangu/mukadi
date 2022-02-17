import React from 'react';
import CardCircle from '../cardCircle';
import styles from '/styles/budget-section.module.scss'

const BudgetDashboard = () => {
  return (
  <div className={styles['budget-section']}>

    <div style={{padding: '2%'}}>
    <div className={styles['budget-header']}>
          <div className={styles['budget-list']}>
            <div className={`${styles['item-1']} ${styles['selection-design']}`}></div>
            <div className={`${styles['item-2']} ${styles['selection-design']}`}></div>
            <div className={`${styles['item-3']} ${styles['selection-design']}`}></div>
            <div className={`${styles['item-4']} ${styles['selection-design']}`}></div>
          </div>
        
          <div className={styles['budget-title']}>
            <p className={styles['budget-name']}> Groceries</p>
            <p className={styles['budget-update']}>Updated on 10, Sep. 2021 </p>
          </div>
        </div>
     

       <div className={styles['budget-usage-subtext']}>
        <i class='bx bxs-quote-alt-left' style={{ marginRight: '3%', fontSize: '1.5rem'}} ></i>
         You can only use <b>$61.12</b> this week alone.
         <i class='bx bxs-quote-alt-right' style={{ marginLeft: '3%', fontSize: '1.5rem'}}></i>
         </div>

        <div style={{ display: 'flex'}}>
          <div>
            <CardCircle />
          </div>

     
         
            <table style={{width: '110%'}} className={styles['mini-pie-table']}>
                <tr>
                  <td style={{width: '18%', height: '10%'}}>
              <div className={styles['current-total']}>
                <p className={styles.title}>Recent Purchase</p>
                <p className={styles.amount}>32.12%</p>
                <p className={styles.rate}>As of 10, Sep</p>
              </div>
              </td>
              
              <td>
              <div className={styles['current-total']}>
                <p className={styles.title}>Monthly Budget</p>
                <p className={styles.amount}>$225.02</p>
                <p className={styles.rate}>On 10, Sep</p>
              </div>
              </td>
              </tr>
              

              <tr>
              <td style={{width: '30%'}}>
              <div className={styles['current-total']} style={{ marginBottom: '30%'}}>
                <p className={styles.title}>Used So Far</p>
                <p className={styles.amount}>$103.98</p>
                <p className={styles.rate}>On 10, Sep</p>
              </div>
              </td>
              
              <td style={{ width: '30%', height: '5%'}}>
              <div className={styles['current-total']} style={{ marginBottom: '30%'}}>
                <p className={styles.title}>Remaining Budget</p>
                <p className={styles.amount}>$122.24</p>
                <p className={styles.rate}>On 10, Sep</p>
              </div>
              </td>
            </tr>
            </table>
         </div>


</div>
    </div>
  );
};

export default BudgetDashboard;
