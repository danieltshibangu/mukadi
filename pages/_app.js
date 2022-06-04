import '../styles/globals.css'
import {Fragment, useState} from 'react';
import Head from 'next/head'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
    return (
        <div style={{ minHeight: '100vh', minWidth: '100vh' }}>
            <Component {...pageProps} />
            <Head>
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
                <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"></link>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <script src="/sidebarFunction.js" type="text/javascript" defer></script>
            </Head>

            {/* <footer>
                <div class='footer-wrapper'>
                    <div>
                        <p class='footer-title'>Your Budgeting Needs, Fulfilled</p>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Nulla facilisi eget turpis in dui semper non.</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p class='footer-title'>Manage</p>
                        <ul>
                            <li>
                                <Link href=''><a>Dashboard</a></Link>
                            </li>
                            <li>
                                <Link href=''><a>Budgeting</a></Link>
                            </li>
                            <li>
                                <Link href=''><a>Subscriptions</a></Link>
                            </li>
                            <li>
                                <Link href=''><a>Checking & Savings</a></Link>
                            </li>
                            
                        </ul>
                    </div>

                    <div>
                        <p class='footer-title'>Legal</p>
                        <ul>
                            <li>
                                <Link href=''><a>Privacy Policy</a></Link>
                            </li>
                            <li>
                                <Link href=''><a>Terms & Conditions</a></Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p class='footer-title'>Social</p>
                        <ul>
                            <li>
                                <Link href='https://www.instagram.com/mukadi_us/'><a target="_blank">Instagram</a></Link>
                            </li>
                        </ul>
                    </div>

                    <img class='logo-footer' src='/mukadi-footer.svg' />
                </div>
            </footer> */}
      </div>
    )
}

export default MyApp
