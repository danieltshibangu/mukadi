import React, {useState, useEffect, Fragment} from 'react'
import styles from '/styles/integration/automate.module.scss'
import { Form, Button, ListGroupItem } from 'react-bootstrap';
import Calendar from "react-widgets/Calendar";
import { useRouter } from 'next/router'
import supabase from '../../../supabase/supabase-config';
import AccountTabShort from '../../../components/accountTabShort';
import axios from 'axios';



const automate = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [subtype, setSubtype] = useState('');
    const [accounts, setAccounts] = useState([])
    const [savingsAccounts, setSavingsAccounts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState(true)
    const router = useRouter();
    const [selectedAccount, setSelectedAccount] = useState([])
    const [selected, setSelected] = useState(true)
    const [code, setCode] = useState('');

    const [targetCode, setTargetCode] = useState('')
    const [payday, setPayday] = useState(new Date())
    const [schedule, setSchedule] = useState('')
    const [type, setType] = useState('')
    const [index, setIndex] = useState('')

    const displaySavingsAccounts = async () => {
        // through supabase, display the data entered by the user
      
        const { data, error } = await supabase
        .from('profile')
        .select('savings_tokens')

        let numOfAccounts = data[0].savings_tokens !== null ? data[0].savings_tokens.length : 0;

        if (data[0] != undefined ) {
            for (let i=0; i < numOfAccounts; i++ ) {
                let fixedTokenString = data[0].savings_tokens[i].replace(/'/g, `"`)
                let parsedTokenString = JSON.parse(fixedTokenString)
                setSavingsAccounts(savingsAccounts => [...savingsAccounts, parsedTokenString])

                if (numOfAccounts >= 1) {
                    setNext(false)
                }

                let attribute = Object.values(parsedTokenString)[0]
                setName(attribute.name)
                setDate(attribute['date-added'])
                setSubtype(attribute.subtype)
                setCode(attribute.code)

                /// if subtype is not checking, show some error 
                setLoading(false)
            }
        }
    }

    const displayCheckingAccounts = async () => {
        // through supabase, display the data entered by the user
      
        const { data, error } = await supabase
        .from('profile')
        .select('checking_tokens')

        let numOfAccounts = data[0].checking_tokens !== null ? data[0].checking_tokens.length : 0;

        if (data[0] != undefined ) {
            for (let i=0; i < numOfAccounts; i++ ) {
                let fixedTokenString = data[0].checking_tokens[i].replace(/'/g, `"`)
                let parsedTokenString = JSON.parse(fixedTokenString)
                setAccounts(accounts => [...accounts, parsedTokenString])

                if (numOfAccounts >= 1) {
                    setNext(false)
                }

                let attribute = Object.values(parsedTokenString)[0]
                console.log(attribute.name)
                setName(attribute.name)
                console.log(name)
                setDate(attribute['date-added'])
                setSubtype(attribute.subtype)
                setCode(attribute.code)

                /// if subtype is not checking, show some error 
                setLoading(false)
            }
        }
    }

    // displays upon render, also updates if database updates
    useEffect(() => {
        displayCheckingAccounts();
    }, []);

    useEffect(() => {
        displaySavingsAccounts();
    }, []);


     const currentAccountClick = (event) => {
        const selectedItemCode = Object.values(event)[0].code;
        const selectedItemType = Object.values(event)[0].subtype;
        const selectedItemID = Object.values(event)[0].id;

        setType(selectedItemType)
        setTargetCode(selectedItemCode)
        setIndex(selectedItemID)
        setSelectedAccount(selectedAccount => [event])

        setSelected(false)
    }

    const getScheduleValue = (event) => {
        setSchedule(event.currentTarget.value)
    }

    const storeIncomeData = async () => {
        axios.post('/api/integration/auto-save-income', {}, {
            params: { 
                payment_date: payday,
                pay_schedule: schedule,
                subtype: type,
                id: index,
            }
        })
    }

  return (
    <div className={styles.entirePage}>
        <div className={styles.wrapper}>
            <section className={styles.header}>
                <img src="/Mukadi-logo.svg" className={styles['topbar-logo']}/>
                <h2 className={styles.title}>By the way, how much are you making?</h2>
            </section>

            <section className={styles.automateSection}>

            <div className={styles.payday}>

                <div className={styles.payWrapper}>

                <Form className={styles.schedule}>
                    <Form.Label className={styles.question}>What's your schedule like?</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="Weekly"
                                value="Weekly"
                                name="group1"
                                type={type}
                                id={`inline-${type}-1`}
                                onChange={getScheduleValue}
                            />
                            <Form.Check
                                inline
                                value="Bi-weekly"
                                label="Bi-weekly"
                                name="group1"
                                type={type}
                                id={`inline-${type}-2`}
                                onChange={getScheduleValue}
                            />
                            <Form.Check
                                inline
                                name="group1"
                                value="Monthly"
                                label="Monthly"
                                type={type}
                                id={`inline-${type}-3`}
                                onChange={getScheduleValue}
                            />
                            <Form.Check
                                inline
                                name="group1"
                                value="Semi-monthly"
                                label="Semi-monthly"
                                type={type}
                                id={`inline-${type}-4`}
                                onChange={getScheduleValue}
                            />
                            </div>
                        ))}
                    </Form>
                <Form>

                    <Form.Label className={styles.question}>When was pay day?</Form.Label>
                    <Calendar 
                        defaultValue={new Date()}
                        value={payday}
                        onChange={payday => setPayday(payday) }
                        includeTime={false}
                        valueFormat={{ month: "numeric", day: "numeric", year: "numeric" }}
                        max={new Date()}
                    />
                </Form>

                </div>

                <div className={styles.navButtons}>
                <Button 
                    variant="outline-warning"
                    onClick={() => router.push('/integration/checking')}>
                    Meant to pick manual entry!
                </Button>

                <Button 
                variant="outline-success"
                onClick={() => router.push('/integration/savings')}>
                    Back to Savings
                </Button>
            </div>
                
            </div>

            

            <div className={styles.accountSection}>

                <div className={styles.allAccounts}>
                    <p>Between all the accounts given,<br/> which account recieves direct deposit?</p>


                    <div className={styles.bothAccounts}>
                        <div className={styles.checking}>
                            <hr />
                            <div className={styles.frame}>
                                {
                                    loading ? 
                                    <p>Loading your account....</p> : 
                                        accounts.map((item, i) => (  <AccountTabShort
                                            key={i}
                                            name={Object.values(item)[0].name}
                                            dateAdded={Object.values(item)[0]['date-added']}
                                            subtype={Object.values(item)[0].subtype}
                                            code={Object.values(item)[0].code}
                                            onClick={() => {
                                                currentAccountClick(item)
                                            }}
                                            >
                                            </AccountTabShort>   
                                        ))  
                                }
                                {
                                    loading ? 
                                    <p>Loading your account....</p> : 
                                        savingsAccounts.map((item, i) => (  <AccountTabShort
                                            key={i}
                                            name={Object.values(item)[0].name}
                                            dateAdded={Object.values(item)[0]['date-added']}
                                            subtype={Object.values(item)[0].subtype}
                                            code={Object.values(item)[0].code}
                                            onClick={() => {
                                                currentAccountClick(item)
                                            }}
                                            >
                                            </AccountTabShort>   
                                        ))
                                }
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>

                <div className={styles.selectedAccount}>
                    <p>You selected:</p>
                    <hr></hr>
                    <div className={styles.frame}>
                        {   
                            selected ?  
                            <p>Nothing selected yet...</p> :       
                            selectedAccount.map((item, i) => (  <AccountTabShort
                                key={i}
                                name={Object.values(item)[0].name}
                                dateAdded={Object.values(item)[0]['date-added']}
                                subtype={Object.values(item)[0].subtype}
                                code={Object.values(item)[0].code}
                            >
                            </AccountTabShort>
                            )) 
                        }
                    </div>


                    <div className={styles.dashboardBtn}>
                    <Button 
                        variant="primary"
                        onClick={() => storeIncomeData()}
                        disabled={!(schedule && payday && !selected)}>
                            Automate Your Income
                    </Button>
                    </div>
                </div>
            </div>
            
            </section>
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

export default automate