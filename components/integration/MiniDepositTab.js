import React from 'react'
import styles from '/styles/integration/mini-deposit-tab.module.scss';


// api call to get info about the accounts connected to it 
// each card needs to have 
// name of account, institution, date-added, subtype, 

const MiniDepositTab = ({name, amount, onClick}) => {

  return (
    <div className={styles.card}
          onClick={onClick}>
        
        <i class='bx bxs-right-arrow'
        style={{ color: '#7FD1AE'}}></i>
        
        <div className={styles.content}>
            <p className={styles.employer} style={{ 
            fontSize: '1rem', 
            fontWeight: 400,
            }}>{name}</p>

            <p className={styles.separateLine}></p>
            
            <div className={styles.bottomInfo}>
                <p>{amount}</p>
            </div>
        </div>
    </div>
  )
}

export default MiniDepositTab