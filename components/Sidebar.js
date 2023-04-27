import React, {useState, useEffect} from 'react';
import styles from '../styles/sidebar.module.scss'
import Link from 'next/link'

function Sidebar() {

    const [ showChecking, setShowChecking] = useState(false);
    const [ showSavings, setShowSavings] = useState(false);
    const [ showBudgets, setShowBudgets] = useState(false);



  return (
    <nav>
        <div className={styles.sidebar}>
            <div className={styles['logo-details']}>
                <img src='/Mukadi-logo.svg' />
                <img src='/MUKADI.svg' style={{ height: '1.1rem', marginLeft: '-1.4rem'}} />
            </div>

            <ul className={styles['nav-links']}>
                <li>
                    <Link href="">
                        <a>
                            <i class='bx bxs-dashboard'></i>
                            <span className={styles['link-name']}>Dashboard</span>
                        </a>
                    </Link>
                    <ul className={`${styles['sub-menu']} ${styles.blank}`}>
                        <li><Link href=""><a className={styles['link-name']}>Dashboard</a></Link></li>
                    </ul>
                </li>
                <li>
                    <div className={styles['icon-link']}>
                        <Link href=""><a>
                                <i class='bx bx-wallet-alt' ></i>
                                <span className={styles['link-name']}>Checking</span>
                        </a></Link>
                        <i class='bx bx-chevron-down' 
                            style={ showChecking ? { transform: 'rotate(-180deg)'} : {} } 
                            onClick={() => setShowChecking(!showChecking)}></i>
                    </div>
                    {/* creating options for chevron menu */}
                    <ul className={styles['sub-menu']} style={ showChecking ? { display: 'block'} : {} }>
                        <li><Link href="#"><a>Transactions</a></Link></li>
                        <li><Link href="#"><a>Deposits & Withdrawals</a></Link></li>
                        <li><Link href="#"><a>Cards</a></Link></li>
                    </ul>
                </li>

                <li>
                    <div className={styles['icon-link']}>
                        <Link href="#"><a>
                                <i class='bx bx-leaf' ></i>
                                <span className={styles['link-name']}>Savings</span>
                        </a></Link>
                        <i class='bx bx-chevron-down' 
                            style={ showSavings ? { transform: 'rotate(-180deg)'} : {} } 
                            onClick={() => setShowSavings(!showSavings)}></i>
                    </div>
                    <ul className={styles['sub-menu']} style={ showSavings ? { display: 'block'} : {} }>
                        <li><Link href="#"><a>Deposits & Withdrawals</a></Link></li>
                        <li><Link href="#"><a>Savings Calculator</a></Link></li>
                        <li><Link href="#"><a>Emergency Fund</a></Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="#"><a>
                            <i class='bx bx-git-compare'></i>
                            <span className={styles['link-name']}>Risk</span>
                    </a></Link>
                    <ul className={`${styles['sub-menu']} ${styles.blank}`}>
                        <li><Link href=""><a className={styles['link-name']}>Risk</a></Link></li>
                    </ul>
                </li>

                <li>
                    <div className={styles['icon-link']}>
                        <Link href="#"><a>
                                <i class='bx bxs-cart-add'></i>
                                <span className={styles['link-name']}>Budgets</span>
                        </a></Link>
                        <i class='bx bx-chevron-down' 
                            style={ showBudgets ? { transform: 'rotate(-180deg)'} : {} } 
                            onClick={() => setShowBudgets(!showBudgets)}></i>
                    </div>
                    <ul className={styles['sub-menu']} style={ showBudgets ? { display: 'block'} : {} }>
                        <li><Link href="#"><a>Created</a></Link></li>
                        <li><Link href="#"><a>Top Priority</a></Link></li>
                    </ul>
                </li>
                <li>
                    <div className={styles.feedback}>
                        <hr style={{ height: '1px', width: '15vw', margin: '1.2rem 0rem', opacity: 0.1}} />
                        
                    </div>
                </li>
            </ul>
        </div>

    </nav>
    
    );
}

export default Sidebar;
