import React from 'react'
import AccountTotals from './sub-components/AccountTotals'
import ExpectedMonthly from './sub-components/ExpectedMonthly'
import MonthlyComparison from './sub-components/MonthlyComparison'
import RiskOverview from './sub-components/RiskOverview'
import styles from '/styles/components-test/overview-style/overview2.module.scss'

const Overview2 = () => {
  return (
    <div className={styles.general}>
      <AccountTotals />
      <div>
        <ExpectedMonthly />
        <div style={{ 'display': 'flex'}}>
          <MonthlyComparison />
          <RiskOverview />
        </div>
        
      </div>
    </div>
  )
}

export default Overview2