// www.mukadi.com/app
import { Layout } from "../../components/Layout";
import styles from '/styles/apphome.module.scss'
import { useState, Fragment } from 'react'
import TotalAmountBlock from "../../components/TotalAmountBlock";
import CardDataBlock from "../../components/CardDataBlock";
import { CenterCard } from "../../components/CenterCard";
import MoneySpentGraph from "../../components/AppHomeBudgetBreakdown";
import { HomePageCardList } from "../../components/HomePageCardList";
import BudgetDashboard from "../../components/app-homepage-budget-design/BudgetDashboard";
import Sidebar from "../../components/Sidebar";
import ExtraSidebar from "../../components/ExtraSidebar";
import AppHomeBudgetBreakdown from "../../components/AppHomeBudgetBreakdown";
import AppHomeRiskTabs from "../../components/AppHomeRiskTabs";
//more emphasis on creating a single page of an application


function AppHome( {headerGreeting, userFirstName, userDetails}) {

    // fine but remember for sec. don't write values directly into app
    const [amountData, setAmountData] = useState([
        {
          id: 1,
          title: 'Total Earnings', 
          amount: '$24,376.44', 
          rate: '13.3%'
        },
        {
          id: 2,
          title: 'Total Savings', 
          amount: '$46,812.09', 
          rate: '+2.15%' 
        }, 
        {
          id: 3,
          title: 'Total Expenses', 
          amount: '$24,376.44', 
          rate: '13.3%'
        },
        {
          id: 4,
          title: 'Total Earnings', 
          amount: '$24,376.44', 
          rate: '13.3%'
        },
    ]);

    const [ creditScore, setCreditScore ] = useState(706);

    return (
        <div className={styles['home-content']}>
            <Layout />
                <header className={styles['header']}>
                        <div className={styles['header-left']}>
                            <div className={styles['main-text']}> Good Evening, Dan</div>
                            <div className={styles['sub-text']}>Remember to save rent for this month.</div>
                        </div>

                    <div className={styles['header-right']}>
                        <div className={styles.profile}></div>
                        <div className={styles.updates}>
                            <img src="updates.png" />
                        </div>
                        <div className={styles.settings}>
                            <img src="settings.png" />
                        </div>
                    </div>
                </header>


                <section className={`${styles['grid-item-3']} ${styles['section-2']}`}>
                    <TotalAmountBlock amountData={amountData}/>
                    <CenterCard creditScore={creditScore} />
                </section>
                
                <section className={styles['section-3']}>
                <BudgetDashboard />
                <AppHomeBudgetBreakdown />
                </section>

                <section className={`${styles['grid-item-6']} ${styles['section-3']}`}>
                    <HomePageCardList  />
                    <CardDataBlock />
                    <AppHomeRiskTabs />
                </section>

                <section className={styles['grid-item-7']}>
                    <Sidebar />
                </section>

                <section className={styles['grid-item-8']}>
                    <ExtraSidebar />
                </section>
        </div>
    )
}

export default AppHome;