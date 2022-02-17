import React from 'react'
import styles from '../styles/apphomerisktabs.module.scss'
import HomeAppRiskProgressPie from './HomeAppRiskProgressPie'
import RiskMeter from './RiskMeter'

const AppHomeRiskTabs = () => {
  return (
    <div className={styles['risk-section']}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
            <div>
                <p className={styles['risk-title']}>Risk Status</p>
                <p className={styles['risk-status']}>Moderate</p>
                <p className={styles['risk-date']}>This Month</p>
            </div>

            <div className={styles['risk-meter']}>
                <RiskMeter />
            </div>
        
            <div>
                <p className={styles['risk-title']}>Average Risk</p>
                <p className={styles['risk-details']}>76</p>
                <p className={styles['risk-date']}>This Week</p>
            </div>


        </div>


        <div className={styles['risk-summary']}>

            <div style={{ paddingRight: '5%', textAlign: 'center'}} className={styles['low-risk']}>
                <p className={styles['risk-title']}>Low Risk</p>
                <p className={styles['risk-details']}>12</p>
            </div>

            <hr style={{width: '1px', height: '80px', background: 'black', border: 'none'}} />

            <div style={{ paddingLeft: '5%', textAlign: 'center'}} className={styles['mod-risk']}>
                <p className={styles['risk-title']}>Moderate Risk Purchases</p>
                <p className={styles['risk-details']}>17</p>
            </div>

            <hr style={{width: '1px', height: '80px', background: 'black', border: 'none'}} />

            <div style={{ paddingLeft: '5%', textAlign: 'center'}} className={styles['high-risk']}>
                <p className={styles['risk-title']}>High Risk Purchases</p>
                <p className={styles['risk-details']}>3</p>
            </div>
        </div>
    </div>
  )
}

export default AppHomeRiskTabs