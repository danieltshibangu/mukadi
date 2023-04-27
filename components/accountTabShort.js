import React from 'react'
import styles from '/styles/integration/int-tab-short.module.scss';


// api call to get info about the accounts connected to it 
// each card needs to have 
// name of account, institution, date-added, subtype, 

const AccountTabShort = ({index, name, institution, dateAdded, subtype, selected, onClick, code}) => {

  return (
    <div className={styles.card}
          onClick={onClick}
    >
        
        <i class='bx bxs-right-arrow'
        style={ subtype === 'checking' ? { color: '#0d6efd'} :  { color: '#7FD1AE'}}></i>
        
        <span>
        <p style={{ 
          fontSize: '1rem', 
          fontWeight: 400,
        }}>{name}</p>
        
        <p>{institution}</p>
        <div className={styles.bottomInfo}>
          <p><em>Added: </em>{dateAdded}</p>
          <p><em>Type:</em>{subtype}</p>
          <p><em>id:</em>{code}</p>
        </div>
        </span>
    </div>
  )
}

export default AccountTabShort