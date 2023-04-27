import axios from 'axios';
import React, {Fragment, useState, useEffect} from 'react'
import MoneyDisplay from '../../../components-main/MoneyDisplay';
import styles from '/styles/components-test/overview-style/subcomp-style/monthly-comparison.module.scss'
import Child from '/components-main/Child' 
import { convertUSDFormat } from '../../../utils/dollar-format';
import dayjs from 'dayjs';

let today = dayjs();
const transaction_opt = 'YYYY-MM-DD'

let first_of_month = today.date(1).format(transaction_opt).toString()

let first_of_last_month = today.month(today.get('month') - 1).date(1).format(transaction_opt).toString()
let last_of_month = today.date(0).format(transaction_opt).toString()
let curr_day = today.format(transaction_opt).toString()

const getTotalMonthlyExpensesTillToday = () => {
    const [total, setTotal] = useState();
    useEffect(() => {
      const getData = async () => {
        const expensesTotal = await axios.post('/api/get-monthly-spendings', {}, {
            params: {
                starting_date: first_of_month, 
                ending_date: curr_day
            }
        })
        setTotal(convertUSDFormat(expensesTotal.data))
      }

      getData();
    }, []);
    
    return <Child>{total}</Child> && total
}

const getTotalMonthlyExpensesLastMonth = () => {
    const [total, setTotal] = useState();
    useEffect(() => {
      const getData = async () => {
        const expensesTotal = await axios.post('/api/get-monthly-spendings', {}, {
            params: {
                starting_date: first_of_last_month, 
                ending_date: last_of_month
            }
        })
        setTotal(convertUSDFormat(expensesTotal.data))
      }

      getData();
    }, []);
    
    return <Child>{total}</Child> && total
}

const getTotalMonthlySavingsTillToday = () => {
    const [total, setTotal] = useState();
    useEffect(() => {
      const getData = async () => {
        const expensesTotal = await axios.get('/api/get-monthly-savings')
        setTotal(convertUSDFormat(expensesTotal.data))
      }

      getData();
    }, []);
    
    return <Child>{total}</Child> && total
}


  
   

const MonthlyComparison = () => {
  const [data, setData] = useState();

    useEffect(() => {
        axios.get('/api/get-recent-savings').then(res => setData(res.data))
    }, [])


  return (


    <div className={styles.container}>

        <div className={styles.comparison}>
            <div>
                <p className={styles.amount}>{getTotalMonthlyExpensesTillToday()}</p>
                <p className={styles.description}>Spent this month</p>
                
            </div>

            <hr width="1" size="100" />

            <div>
                <p className={styles.amount}>{getTotalMonthlyExpensesLastMonth()}</p>
                <p className={styles.description}>Spent last month</p>
            </div>
        </div>

      <p className={styles.summary}>{}% below last month's spending cap.</p>
            
        <div className={styles['savings-goals']}>
            
            <div className={styles['top-amount']}>
                <p className={styles.title}>Saved so far this {new Date().toLocaleString( 'en-US',  {month: 'short'})}</p>
                <p className={styles.amount}>{getTotalMonthlySavingsTillToday()}</p>
            </div>
        </div>

        <div className={styles['recent-deposits']}>

          
                <div className={styles.item}>
                    <div className={styles.detail}>
                        <p className={styles['amount']}>
                         {
                           data ? 
                           convertUSDFormat(data.first.amount) :
                           'Loading...'
                         } 
                        </p>

                        <p className={styles.date}>{data ? data.first.date : 'Loading'}</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <hr width="1" size="50" />
                    <div className={styles.detail}>
                        <p className={styles['amount']}>{data ? convertUSDFormat(data.second.amount) : 'Loading...'}</p>
                        <p className={styles.date}>{data ? data.second.date : 'Loading'}</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <hr width="1" size="50" />
                    <div className={styles.detail}>
                        <p className={styles['amount']}>{data ? convertUSDFormat(data.third.amount) : 'Loading...'}</p>
                        <p className={styles.date}>{data ? data.third.date : 'Loading'}</p>
                    </div>
                </div>
    
            </div>
       

        


    </div>
  )
}

export default MonthlyComparison