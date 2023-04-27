import React from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import styles from '/styles/components-test/overview-style/subcomp-style/risk-overview.module.scss'

const RiskOverview = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h2 className={styles.score}>Low <span>risk</span></h2>
            <p>Based on your recent financial decisions...</p>


            <div className={styles.decisions}>
                <p className={styles.title}>Your 4 Best Decisions</p>
                <Link href="" >
                    <a className={styles.subtitle}>
                        <Button variant="primary">Check them out</Button>{' '}
                    </a>
                </Link>
            </div>

            <div className={styles.items}>
                <div className={styles.item1}>
                    <p className={styles.subtitle}>Leftover Overspent</p>
                    <p className={styles.amount}>-$3.67</p> 
                </div>

                <div className={styles.item2}>
                    <p className={styles.subtitle}>Expense Changes</p>
                    <p className={styles.rate}>+0.10%</p> 
                </div>

                
            </div>
            
            
        </div>
    </div>
  )
}

export default RiskOverview