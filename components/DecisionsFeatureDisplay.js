import React from 'react'
import styles from '/styles/decisionsFeatureDisplay.module.scss';



// api call to get info about the accounts connected to it 
// each card needs to have 
// name of account, institution, date-added, subtype, 

const DecisionsFeatureDisplay = ({index, image, detail}) => {

  return (
    <div className={styles.card}>
         <img src={image} />
         <p>{detail}</p>
    </div>
  )
}

export default DecisionsFeatureDisplay