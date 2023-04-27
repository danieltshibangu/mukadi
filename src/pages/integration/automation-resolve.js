import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import MiniDepositTab from '../../../components/integration/MiniDepositTab'
import supabase from '../../../supabase/supabase-config'
import { convertUSDFormat } from '../../../utils/dollar-format'
import styles from '/styles/integration/auto-resolve.module.scss'
import { useRouter } from 'next/router'



const resolve = () => {
    // need an API function to get info from supabase and render it onto the page 
    const [employer, setEmployer] = useState('')
    const [incomeAmount, setIncomeAmount] = useState(0)
    const [incomeMonth, setIncomeMonth] = useState('')
    const [incomeDay, setIncomeDay] = useState(0)
    const [transactions, setTransactions] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedAccount, setSelectedAccount] = useState([])
    const user = supabase.auth.user()
    const router = useRouter();

    // api function that gets income info from mukadi 
    const getIncomeDataSupabase = async () => {
        const incomeData = await axios.get('/api/integration/get-income-data')

        // equate all given info into states
        const data = incomeData.data


        setEmployer(data.deposits[1].name)
        setIncomeAmount(convertUSDFormat(data.deposits[1].amount))
        setIncomeMonth(data.paydayDate[0])
        setIncomeDay(data.paydayDate[1])

        let depositData = Object.values(data.deposits)

        // loop through every transaction in list 
        for (let i=0; i < depositData.length; i++) {
            let incomeTransaction = {
                name: depositData[i].name, 
                amount: convertUSDFormat(depositData[i].amount)
            }
            setTransactions(transactions => [...transactions, incomeTransaction])
        }

        
        setLoading(false)
    }

    const currentAccountClick = (event) => {
        setEmployer(event.name)
        setIncomeAmount(event.amount)
        setSelectedAccount(selectedAccount => [event])

        const saveIncomeToSupabase = async () => {
            const {data, error} = await supabase
                .from('profile')
                .update({
                    auto_amount: [{name: employer, amount: incomeAmount}]
                })
                .match({ id: user.id})

                if (error) console.log(error)

        }

        saveIncomeToSupabase();
    }

    // execute function after page renders 
    useEffect(() => {
        getIncomeDataSupabase();
    }, [])


  return (
    <div className={styles.entirePage}>
        <div className={styles.innerPage}>
            <div className={styles.leftSide}>
        <img src="/Mukadi-logo.svg" className={styles['topbar-logo']}/>
        <h2 className={styles.title}>Automating<br/> Your Income...</h2>

        <div className={styles.introCard}>
            <p className={styles.text}>
                Integrate your savings and checking accounts 
                to get insight into your spending and savings 
                data. As well as a picture of exactly what 
                risks your purchases have on your goals.
            </p>

            <div style={{ width: '100%'}}>

        
        </div>

        <div className={styles.links}>
        <div>
            <Button 
                type="submit"
                className={styles['next-button']}          
                variant='outline-primary'
                style={{width: '100%'}}
                >Checking
            </Button>
        </div>

        <div>
            <Button 
                disabled={true}
                type="submit"
                className={styles['next-button']}          
                variant='outline-success'
                style={{width: '100%'}}
                >Savings 
            </Button>
        </div>

        <div>
            <Button 
                disabled={true}
                type="submit"
                className={styles['next-button']}          
                variant='outline-warning'
                style={{width: '100%'}}
                >Meant to pick manual entry!
            </Button>
        </div>

        </div>
        
        
        </div>
        </div>

        <div className={styles.rightSide}>
        <div className={styles.wrapper}>
            

            <div className={styles.results}>
                <p className={styles.incomeMonth}>{incomeMonth}</p>
                <div className={styles.wrapper}>
                    <div className={styles.header}>
                        <div className={styles.date}>
                            <p>{incomeDay}</p>
                        </div>
                        <div className={styles.paycheck}>
                            <p className={styles.employer}>{employer}</p>
                            <p className={styles.amount}>{incomeAmount}</p>
                        </div>
                    </div>

                    <div className={styles.selections}>
                        <p className={styles.text}>Is this your paycheck?</p>  
                        <p className={styles.text}>If not, choose other deposits we found on Feb. 16th below.</p>
                    </div>

                    <div className={styles.depositSelection}>
                    {
                        loading ? 
                        <p>Loading transactions....</p> : 
                        transactions.map((item, i) => (  <MiniDepositTab
                            key={i}
                            name={employer}
                            amount={incomeAmount}
                            onClick={() => {
                                currentAccountClick(item)
                            }}
                        >
                        </MiniDepositTab>
                        ))
                    }
                    </div>

                    <div className={styles.footer}>
                        <p>Looks good?</p>
                    <Button 
                    variant="outline-primary"
                    onClick={() => router.push('/app')}>
                    Go to the Dashboard
                </Button>
                    </div>
                    
                </div>
            </div>
            </div>

        </div>
        </div>
    </div>
  )
}

//cant access unless user is auth
export const getServerSideProps = async ({req}) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
  
    // but if we don't have a client then...
    if (!user) {
      return {
        redirect: {
          permanent: false, 
          destination: '/login', 
        }, 
        props: {},
        };
      }
  
      // if we have a user, let's return empty props 
      return {
        props: {},
      }
    };


  
        
     


export default resolve