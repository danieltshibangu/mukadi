// // www.mukadi.com/app
// import React, {Fragment, useEffect, useState} from 'react'
// import Example from '/charts/1024/example/Example'
// import data from '/charts/1024/example/data'
// import bardata from '/charts/1024/alert-bar/data'
// import styles from '../styles/overview-sidebar.module.scss'
// import AlertBar from '../charts/1024/alert-bar/AlertBar';



// function OverviewSidebar() {
//   return (
//     <section className={styles.root}>
//       <div className={styles.rootWrapper}>
//         <h1 className={styles.title}>Overview</h1>

//         <section className={styles.alerts}>
//           <div className={styles.alertsWrapper}>
//             <h2>Alerts</h2>
//             <article>
//               <div>
//                 <div className={styles.colorCode1}></div>
//                 <p>Overspending</p>
//               </div>

//               <div>
//                 <div className={styles.colorCode2}></div>
//                 <p>Overdrawn</p>
//               </div>
//             </article>

//             <article>
//               <div>
//                 <div className={styles.colorCode3}></div>
//                 <p>Pending Status</p>
//               </div>
//             </article>

//             <div className={styles.bar}>
//               <AlertBar data={bardata} />
//             </div>
//           </div>
//         </section>

//         {/* <hr width='80%' style={{opacity: 0.1, margin: '30px auto'}} /> */}

        

//         <section className={styles.checkingTotalsChart}>
//           <div className={styles.checkingsChart}>
//             <h2>Checking Changes</h2>
//             <p className={styles.accountsLink}>Between 2 accounts</p>
//             <div className={styles.chart}>
//               <Example data={data}/> 
//             </div>
//           </div>
//         </section>

//         <section className={styles.checkingsTotal}>
//           <div className={styles.checkingTotalsWrapper}>
//           <h2 className={styles.subTitle}>Your Total Checkings</h2>
//             <p className={styles.checkingsAmount}>
//                 $3,125.16
//                 <span>USD</span>
//             </p>

//             <div className={styles.extraInfo}>
//                 <div className={styles.infoItem}>
//                     <div className={styles.category}>
//                         <div className={styles.colorBlock1}></div>
//                         <p className={styles.subtitle}>Last Deposit</p>
//                     </div>
                    
//                     <p className={styles.infoData}>+$35.12</p>
//                 </div>



//                 <div className={styles.infoItem}>
//                     <div className={styles.category}>
//                         <div className={styles.colorBlock2}></div>
//                         <p className={styles.subtitle}>Average Interest</p>
//                     </div>

//                     <p className={styles.infoData}>3.4%</p>
//                 </div>
//             </div>
//           </div>
//         </section>

        
//         <hr width='80%' style={{opacity: 0.1, margin: '30px auto'}} />

        

//         <section className={styles.savingsTotalChart}>
//           <div className={styles.savingsChart}>
//             <h2>Savings Changes</h2>
//             <p className={styles.accountsLink}>Between 4 accounts</p>
//             <div className={styles.chart}>
//               <Example data={data}/> 
//             </div>
//           </div>
//         </section>

//         <section className={styles.savingsTotal}>
//           <div className={styles.savingsTotalWrapper}>
//             <h2 className={styles.subTitle}>Your Total Savings</h2>
//               <p className={styles.savingsAmount}>
//                   $20,436.25
//                   <span>USD</span>
//               </p>

//               <div className={styles.extraInfo}>
//                 <div className={styles.infoItem}>
//                     <div className={styles.category}>
//                         <div className={styles.colorBlock1}></div>
//                         <p className={styles.subtitle}>Last Deposit</p>
//                     </div>
                    
//                     <p className={styles.infoData}>+$35.12</p>
//                 </div>



//                 <div className={styles.infoItem}>
//                     <div className={styles.category}>
//                         <div className={styles.colorBlock2}></div>
//                         <p className={styles.subtitle}>Average Interest</p>
//                     </div>

//                     <p className={styles.infoData}>3.4%</p>
//                 </div>
//             </div>
//           </div>
//         </section>


        
//       </div>
//     </section>
//   );
// }

// export default OverviewSidebar;
