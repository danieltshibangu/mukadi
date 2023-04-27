import React, {useState, useEffect, UseRef} from 'react'
import Example from '../charts/TotalsComparison'
import styles from '/styles/components-test/overview-style/subcomp-style/account-totals.module.scss'
import Link from 'next/link'
import Child from '/components-main/Child'
import axios from 'axios'
import { useAuth } from '../../../context/user'


const AccountTotals = () => {

  const { user } = useAuth();
console.log({user})

  // get back the total amount using each check token 
  const getTotalCheckingAmount = () => {
    const [total, setTotal] = useState();
    useEffect(() => {
      const getData = async () => {
        const checkingTotal = await axios.get('/api/calculate-checking-total')
        setTotal(checkingTotal.data.total)
      }

      getData();
    }, []);
    
    return total && <Child data={total} />
    }

    // get back the total amount using each check token 
  const getNumOfCheckingAccounts = () => {
    const [count, setCount] = useState();
    useEffect(() => {
      const getData = async () => {
        const checkingTotal = await axios.get('/api/calculate-checking-total')
        setCount(checkingTotal.data.count)
      }

      getData();
    }, []);
    
    return count && <>{count}</>
    }


    // get back the total amount using each check token 
  const getTotalSavingsAmount = () => {
    const [total, setTotal] = useState();
    useEffect(() => {
      const getData = async () => {
        const savingsTotal = await axios.get('/api/calculate-savings-total')
        setTotal(savingsTotal.data.total)
      }

      getData();
    }, []);
    
    return total && <Child data={total} />
    }

    // get back the total amount using each check token 
  const getNumOfSavingsAccounts = () => {
    const [count, setCount] = useState();
    useEffect(() => {
      const getData = async () => {
        const savingsCount = await axios.get('/api/calculate-savings-total')
        setCount(savingsCount.data.count)
      }

      getData();
    }, []);
    
    return count && <>{count}</>
    }

  const lossSign = {
    'color': '#ff0a0a',
    'opacity': 0.5,
    'font-size': '1.3rem',
  }

  const gainSign = {
    'color': '#6ED47C',
    'font-size': '1.3rem'
  }


  return (
    <div className={styles.totals}>
        <div className={styles['total-earnings']}>
                  <div className={styles['earnings-content']}>
                    <div className={styles.backColor}>
                      <i className='bx bx-wallet-alt' ></i>
                    </div>

                    <div className={styles.rate}
                      // style={ 
                      //     fetchCheckingRateChange() > 0 ?
                      //     { 'backgroundColor': 'rgb(110, 212, 124, 0.3)'} :
                      //     {'backgroundColor': 'rgb(255, 10, 10, 0.3)'}
                      //   }
                      >
                      {/* { 
                        fetchCheckingRateChange() > 0 ? 
                        <i className='bx bx-up-arrow-alt' style={gainSign}></i> : 
                        <i className='bx bx-down-arrow-alt' style={lossSign}></i>
                      } */}
                      <p>
                        {/* <span style={
                            fetchCheckingRateChange() > 0 ?
                            {'color': '#6ED47C', 'font-weight': '600', 'opacity': 0.5} : 
                            {'color': '#ff0a0a', 'font-weight': '600', 'opacity': 0.5} 
                            
                          }
                        >
                          {fetchCheckingRateChange()}%
                        </span> */}
                      </p>
                    </div>

                    <div className={styles['account-info']}>
                    <h5>Total Checking</h5>
                      <p>
                        { getTotalCheckingAmount ? getTotalCheckingAmount() : '$0.00'}
                      </p>
                      <p className={styles.accountOrigin}>Among <Link href="">
                        <a>
                          {getNumOfCheckingAccounts ? getNumOfCheckingAccounts() : '?'} 
                          {getNumOfCheckingAccounts > 1 ? ' accounts' : ' account'}
                        </a></Link></p>
                    </div>
                  </div>




                  {/* --------------now for all the savings-------------------------------  */}
                  <div className={styles['savings-content']}>
                  <div className={styles.rate}
                      // style={ 
                      //     fetchSavingsRateChange() > 0 ?
                      //     { 'backgroundColor': 'rgb(110, 212, 124, 0.3)'} :
                      //     {'backgroundColor': 'rgb(255, 10, 10, 0.3)'}
                      //   }
                      >
                      {/* { 
                        fetchSavingsRateChange() > 0 ? 
                        <i className='bx bx-up-arrow-alt' style={gainSign}></i> : 
                        <i className='bx bx-down-arrow-alt' style={lossSign}></i>
                      } */}
                      <p>
                        {/* <span style={
                            fetchSavingsRateChange() > 0 ?
                            {'color': '#7FD1AE', 'font-weight': '600'} : 
                            {'color': '#ff0a0a', 'font-weight': '600', 'opacity': 0.5} 
                            
                          }
                        >
                          {fetchSavingsRateChange()}%
                        </span> */}
                      </p>
                    </div>

                    <div className={styles.backColor}>
                      <i className='bx bx-save'></i>
                    </div>

                    <div className={styles['account-info']}>
                      <h5>Total Savings</h5>
                        <p>
                          {getTotalSavingsAmount ? getTotalSavingsAmount() : '$0.00'}
                        </p>
                        <p className={styles.accountOrigin}>Among <Link href="">
                          <a>
                            {getNumOfSavingsAccounts ? getNumOfSavingsAccounts() : '?'} 
                            {getNumOfSavingsAccounts > 1 ? ' accounts' : ' account'}
                          </a></Link></p>
                    </div>
                  </div>
                  
                </div>

                <div className={styles.comparisonChart}>
                  <Example/>
                </div>
                
    </div>
  )
}

export default AccountTotals