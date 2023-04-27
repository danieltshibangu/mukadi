import React, {useState, useEffect} from 'react'
import Container from './expected-comp/Container'
import styles from '/styles/components-test/overview-style/subcomp-style/expected-monthly.module.scss'




const ExpectedMonthly = () => {
  return (
    <div className={styles.futureTable}>
  
      <Container
        icon={<i className='bx bx-calendar-check bx-border-circle'></i>}
        amount={1324.98}
        description="Expected to make this month"
      />

      <Container
        icon={<i className='bx bx-calculator bx-border-circle' ></i>}
        amount={1324.98}
        description="Might have to spend for the month"
      />
    
      <Container
        icon={<i className='bx bx-receipt bx-border-circle' ></i>}
        amount={24.17}
        description="Your most recent purchase"
      />
    
    <Container
        icon={<i className='bx bx-bowl-rice bx-border-circle' ></i>}
        amount={600.12}
        description="Money leftover this month"
      />
    </div>
  )
}

export default ExpectedMonthly