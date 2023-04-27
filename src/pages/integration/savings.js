import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { usePlaidLink } from 'react-plaid-link';
import Button from 'react-bootstrap/Button';
import IntegrationAccountTab from '../../../components/IntegrationAccountTab';
import styles from '/styles/integration/int-savings.module.scss';
import supabase from '/supabase/supabase-config';
import handleDataIntegration from '../../../utils/handle-data-integration';
import Router, { useRouter } from 'next/router'
import Link from 'next/link'


const integration = () => {

    const [linkToken, setLinkToken] = useState(null); 
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [subtype, setSubtype] = useState('');
    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(true)
    const [bank, setBank] = useState('')
    const [next, setNext] = useState(true)
    const router = useRouter();

    const generateToken = async () => {
        // responses fetches data from our api into plaid 
        // returns a promise
        const response = await axios.post('http://localhost:8000/create_link_token'); 
        
        // if the promise is completed, it gets parsed by json function 
        // and a json file is returned 
        const data = await response.data;
        // we set the setLinkToken to the linkToken part of the json:
        // {
        // "expiration": "2022-07-17T19:10:43Z",
        // "link_token": "link-development-09eeed87-9082-4dce-959a-1fe30b76a3bd",
        // "request_id": "up0twPk7tvDA8JH"
        // }
        setLinkToken(data.link_token);
    };

    useEffect(() => {
        generateToken();
    }, []);
    
    
    const { open, ready, exit, error } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
        
        // send public_token to server
        const response = fetch('http://localhost:8000/set_access_token', {
            method: 'POST', 
            headers: {
            'Content-Type':'application/json',
            },
            body: JSON.stringify({public_token})
        });    
        
        setTimeout(function(){
            handleDataIntegration(); //or elemement
         }, 3000);

         // after adding an account, calls for function to set new tab
         displayAccount()
        },
        onExit: (err, metadata) => {
        },
        onEvent: (eventName, metadata) => {
            // console.log(metadata)
            // let inst_name = Object.values(metadata)[1];
            // console.log(inst_name)
            // inst_name != null && inst_name != '' ? setBank(inst_name) : null
        },
    });

    // object.values(metadata)
 
    const displayAccount = async () => {
        // through supabase, display the data entered by the user
      
        const { data, error } = await supabase
        .from('profile')
        .select('savings_tokens')

        let numOfAccounts = data[0].savings_tokens !== null ? data[0].savings_tokens.length : 0;

        if (data[0] != undefined ) {
            for (let i=0; i < numOfAccounts; i++ ) {
                let fixedTokenString = data[0].savings_tokens[i].replace(/'/g, `"`)
                let parsedTokenString = JSON.parse(fixedTokenString)
                setAccounts(accounts => [...accounts, parsedTokenString])

                if (numOfAccounts >= 1) {
                    setNext(false)
                }

                let attribute = Object.values(parsedTokenString)[0]
                setName(attribute.name)
                setDate(attribute['date-added'])
                setSubtype(attribute.subtype)

                /// if subtype is not checking, show some error 
                setLoading(false)
            }
        }
    }

    // displays upon render, also updates if database updates
    useEffect(() => {
        displayAccount();
    }, []);

    
    
  return (
    <div className={styles.entirePage}>
        <div className={styles.innerPage}>
            <div className={styles.leftSide}>
        <img src="/Mukadi-logo.svg" className={styles['topbar-logo']}/>
        <h2 className={styles.title}>Securing Your Savings...</h2>

        <div className={styles.introCard}>
            <p className={styles.text}>
                Integrate your savings and checking accounts 
                to get insight into your spending and savings 
                data. As well as a picture of exactly what 
                risks your purchases have on your goals.
            </p>
        </div>

        <div style={{ width: '100%'}}>

        <div className="d-inline p-2">
            <Button 
                onClick={() => router.push('/integration/checking')}
                type="submit"
                className={styles['next-button']}          
                variant='outline-primary'
                style={{width: '40%'}}
                >Checking
            </Button>
        </div>

        <div className="d-inline p-2">
            <Button 
                onClick={() => router.push('/integration/income')}
                disabled={next}
                type="submit"
                className={styles['next-button']}          
                variant='outline-success'
                style={{width: '50%'}}
                >Next
            </Button>
        </div>
        
        </div>

        <p className={styles.text} style={{fontWeight: 600}}>Don't have a savings?</p>

        <Button 
            onClick={() => router.push('/integration/income')}
            type="submit"
            className={styles['skip-button']}          
            variant='warning'
            >Skip
        </Button>

        </div>

        <div className={styles.rightSide}>
           <h2>Your Savings Accounts</h2>
           <hr className={styles.border} />
           <div className={styles.accountsFrame}>
                {
                    loading ? 
                    <p>Adding your account....</p> : 
                    accounts.map((item, i) => (  <IntegrationAccountTab
                        key={i}
                        name={name}
                        dateAdded={date}
                        subtype={subtype}
                        institution={bank}
                    >
                    </IntegrationAccountTab>
                ))
                }
            </div>
           <hr className={styles.border} />

           <div className={styles.options}>
            <button 
                    onClick={() => open()}
                    disabled={!ready}
                    type="submit"
                    className={styles['plaid-button']}
                    >
                        <a>
                            <i className='bx bxs-plus-circle'></i>
                        </a>
                </button>
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

  export default integration;
  