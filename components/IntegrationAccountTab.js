import React from 'react'
import styles from '/styles/integration/int-acct-tab.module.scss';


// api call to get info about the accounts connected to it 
// each card needs to have 
// name of account, institution, date-added, subtype, 

const IntegrationAccountTab = ({index, name, institution, dateAdded, subtype, selected, onClick}) => {

  return (
    <div className={styles.card}
          onClick={onClick}
    >
        <p style={{ 
          fontSize: '1.2rem', 
          fontWeight: 700,
          textAlign: 'center',
        }}>{name}</p>
        <p>{institution}</p>
        <div className={styles.bottomInfo}>
          <p><em>Added: </em>{dateAdded}</p>
          <p><em>Type:</em>{subtype}</p>
        </div>
        
    </div>
  )
}

export default IntegrationAccountTab