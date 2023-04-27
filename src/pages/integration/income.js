import React, {useState} from 'react'
import styles from '/styles/integration/int-income.module.scss'
import CurrencyInput from 'react-currency-input-field';
import { Form, Button } from 'react-bootstrap';
import DatePicker from "react-widgets/DatePicker";
import { useRouter } from 'next/router'
import axios from 'axios';
import supabase from '../../../supabase/supabase-config';


const income = () => {
    
    const [schedule, setSchedule] = useState('')
    const [payday, setPayday] = useState(new Date())
    const [dollarValue, setDollarValue] = useState(0.00)
    const [centValue, setCentValue] = useState(0.00)
    const router = useRouter();
    let result = 0;

    function onChangeValue(event) {
        setPaySchedule(event.target.value)
    }

    function handleDollarChange(e) {
        let result = e.target.value.replace(/\D/g, '')
        setDollarValue(result)
    }

    function handleCentChange(e) {
        let result = e.target.value.replace(/\D/g, '')
        setCentValue(result)
    }

    function displayTotalIncome() {
        let cents = (centValue / 100)
        result = Number(dollarValue) + Number(cents);

        let dollarFormatUS = Intl.NumberFormat('en-US', {
            style: "currency", 
            currency: "USD"
        })
        
        let currentAmount = dollarFormatUS.format(result)
        return currentAmount
    }

    // onclick fucntion that saves all data
    const getScheduleValue = (event) => {
        setSchedule(event.currentTarget.value)
    }

    const storeIncomeData = async () => {


        const manualSaveResponse = axios.post('/api/integration/manual-save-income', {}, {
            params: { 
                payment_date: payday,
                pay_schedule: schedule,
                amount: result,
            }
        })

        console.log('hello')

        if (manualSaveResponse.status = 200) {
            router.push('/app')
        } 
    }


    
    return (
        <div className={styles.entirePage}>
            <div className={styles.pageWrapper}>
            <section className={styles.header}>
            <img src="/Mukadi-logo.svg" className={styles['topbar-logo']}/>
            <h2 className={styles.title}>By the way, how much are you making?</h2>
            </section>

            <section className={styles.incomeSplit}>
                <div className={styles.incomeEntry}>
                    

                    <div className={styles.entryContent}>

                    <p className={styles.totalAmount}>
                        {displayTotalIncome ? displayTotalIncome() : '.00'}
                    </p>

                    <Form className={styles.incomeDisplay}>
                        <div className={styles.income}>
                            <Form.Group className={styles.dollar} controlId="exampleForm.ControlInput1">
                                <Form.Label>Dollars(Number Only)</Form.Label>
                                <Form.Control 
                                    type="tel" 
                                    placeholder="$1,234" 
                                    maxLength={6}
                                    onChange={handleDollarChange}
                                />
                            </Form.Group>
                            <Form.Group className={styles.cents} controlId="exampleForm.ControlInput1">
                                <Form.Label>Cents(Number Only)</Form.Label>
                                <span class="input-group-addon">$</span>
                                <Form.Control 
                                    type="tel" 
                                    placeholder="99" 
                                    maxLength={2}
                                    onChange={handleCentChange}
                                />
                            </Form.Group>
                        </div>
                    </Form>

                
                        <Form className={styles.payday}>
                            <Form.Label>When was pay day?</Form.Label>
                            <DatePicker 
                                defaultValue={new Date()}
                                value={payday}
                                onChange={payday => setPayday(payday) }
                                includeTime={false}
                                valueFormat={{ month: "numeric", day: "numeric", year: "numeric" }}
                                max={new Date()}
                                />
                        </Form>
                 
                    
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
                

                        <p className={styles.entryText}>
                        We know not everyone likes to have things automated, and be 
                        more hands-on with thier finances. If you'd like, you can enter
                        your latest income statement up here.
                    </p>




                        
                    </div>
                </div>

                <hr width="1" size="500" style={{ margin: '0 5rem'}}/>

                <div className={styles.incomeAuto}>

                    <p className={styles.autoText}>
                        Let's determine how much you make using our automated 
                        system. It'll automatically pick up your last payday deposit,
                        keeping your information up to date.
                    </p>

                    <Button 
                    variant="outline-warning"
                    className={styles.automateButton}
                    onClick={() => router.push('/integration/automate')}>
                    Auto-detect my income instead
                </Button>

                </div>

                
            </section>

            <div className={styles.navButtons}>
                <Button 
                    variant="outline-primary"
                    onClick={() => router.push('/integration/checking')}>
                    Checking
                </Button>

                <Button 
                variant="outline-success"
                onClick={() => router.push('/integration/savings')}>
                    Savings
                </Button>

                <Button 
                variant="primary"
                onClick={() => storeIncomeData()}
                disabled={!(result && payday && schedule)}>
                    Your Dashboard
                </Button>
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

export default income