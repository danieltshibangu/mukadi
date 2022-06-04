import React from 'react'
import styles from '/styles/blog2.module.scss'
import HeaderNav from '/components/HeaderNav'
import Footer from '../../components/Footer'

const blogPage2 = () => {
  return (
    <div className={styles.blog}>
      <header>
        <HeaderNav />
      </header>

        <section className={styles.split}>
          <div className={styles.content}>
            
            <div className={styles.introText}>
              <div className={styles.tags}>
                <div>Growth</div>
                <div>Credit</div>
              </div>
              <div className={styles.time}>
                <div className={styles.date}>Feb 22, 2021</div>
                <div>7 min read</div>
              </div>
              <h1 className={styles.title}>The Seven Greatest Risks of Overusing Your Credit Card</h1>
              <div className={styles.author}>
                <div className={styles.profile}></div>
                <div>By Daniel Tshibangu</div>
              </div>

              
              <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum metus nec arcu placerat laoreet. Phasellus porttitor velit sit amet leo tincidunt imperdiet. Nam maximus egestas tincidunt. Sed porttitor porta est, sit amet pulvinar turpis sollicitudin non. Nam sed mi.</p>
            </div>
            <div className={styles.longImage} style={{ backgroundImage: 'url(/risks-card.jpg)'}}></div>
          </div>
        </section>

        <section className={styles.blogText}>
          <p>Where all the text Goes</p>
        </section>

        <section>
          <Footer />
        </section>
    </div>
  )
}

export default blogPage2