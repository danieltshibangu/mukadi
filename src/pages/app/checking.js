import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/app-design/checking.module.css'
 

// previous data 
function checking() {
  return (
    <div>
        <Sidebar />

        <header className='header'>
        <div className='header-left'>
          <div className='main-text'>Your Checking Accounts</div>
            <div className='sub-text'>Try to keep a minimum balance.</div>
          </div>

        <div className='header-right'>
          <div className='profile'></div>
          <div className='updates'>
            <img src="/updates.png" />
          </div>
          <div className='settings'>
            <img src="/settings.png" />
          </div>
        </div>
      </header>


      <section>
          
      </section>
    </div>
  )
}

export default checking
