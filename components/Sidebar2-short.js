import React, {useState, useEffect} from 'react';
import styles from '/styles/sidebar-short.module.scss'
import Link from 'next/link'

function ShortSidebar() {

    const [ showChecking, setShowChecking] = useState(false);
    const [ showSavings, setShowSavings] = useState(false);
    const [ showBudgets, setShowBudgets] = useState(false);
    const [shown1, setShown1] = useState(false);
    const [shown2, setShown2] = useState(false);
    const [style, setStyle] = useState({display: 'none'});
    

    


  return (
    <nav className={styles.sidebar}>
        <div className={styles.wrapper}>
            <article className={styles['logo-details']}>
                <img src='/mukadi-logo-sidebar-white.svg' />
            </article>

            <article className={styles.linkList}>
                <div className={styles.item1}
                    onMouseEnter={e => {
                        setShown1(true);
                    }}
                    onMouseLeave={e => {
                        setShown1(false)
                    }}
                >
                    <i className='bx bx-category-alt'></i>
                </div>

                <div className={styles.tab} style={
                     shown1 ? {display: 'block'} : style}>Dashboard</div>



                <div className={styles.item2}
                    onMouseEnter={e => {
                        setShown2(true);
                    }}
                    onMouseLeave={e => {
                        setShown2(false)
                    }}
                >
                    <i className='bx bx-cog' ></i>
                </div>

                <div className={styles.tab2} style={
                     shown2 ? {display: 'block'} : style}>Settings</div>
               
            </article>

            <article className={styles.logout}>
                <i className='bx bx-log-out'></i>
            </article>

            
        </div>

    </nav>
    
    );
}

export default ShortSidebar;
