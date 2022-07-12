// www.mukadi.com/app
import React, {useState} from 'react'
import BudgetBarGraphOverview from '../../charts/BudgetBarGraphOverview'
import Topbar from '../../components/Topbar'
import styles from '../../styles/appindex.module.scss'
import Sidebar2 from '../../components/Sidebar2'
import SavingsDoughnut from '../../charts/SavingsDoughnut'
import ExpenseComparison from '../../charts/ExpenseComparison'
import Overview from '../../components-main/Overview'
import Credit from '../../components-main/Credit'
import SavingsInsight from '../../components-main/SavingsInsight'
import Subscriptions from '../../components-main/Subscriptions'
import Risk from '../../components-main/Risk'

const index = () => {


  return (
    <div className={styles['main-content']}>
      <Sidebar2 />
        
        <Topbar />

        <main className={styles['main']}>

          <h4 className={styles.dashTitle}>Dashboard</h4>
          
          <div className={styles['main-content']}>
            <Overview />
            <Credit />
            <SavingsInsight />
            <Subscriptions />
            <Risk />

            <div className={styles.suggestions}>
              <p className={styles.title}>Consider These Suggestions</p>

              <div className={styles.content}>
                <div className={styles.growth}>Grow</div>
                <div className={styles.payback}>Pay</div>
                <div className={styles.pokemon}></div>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default index