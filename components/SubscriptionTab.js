import React,  {useState} from 'react'
import { Button } from 'react-bootstrap';
import SubscriptionPieChart from "../charts/SubscriptionPieChart";
import styles from '../styles/app-design/subscriptions.module.css'
import Link from 'next/link'
import SubscriptionInfo from './SubscriptionInfo';



export const SubscriptionTab = ({sub, onSelect}) => {

  return (
    <div className={styles['sub-format']} 
        onClick={() => onSelect(sub.id)}>
        <div className={styles['sub-format-wrapper']}>
            <div className={styles['mini-wrapper']} >
                <div style={{ lineHeight: '70%'}}>
                    <p className={styles['sub-name-mini']}>{sub.title}</p>
                    <p className={styles['renew-date-mini']}>{sub.card}</p>
                </div>

                <div style={{ lineHeight: '70%'}}>
                    <p className={styles['sub-price-mini']}>-${sub.amount}</p>
                    <p className={styles['renew-date-mini']}>{sub.time}</p>
                </div>

                
            </div>
            
        </div>
        <hr style={{ width: '100%', margin: '1% 0 0% 0%', opacity: '0.1'}} />
    </div>
  )
}
