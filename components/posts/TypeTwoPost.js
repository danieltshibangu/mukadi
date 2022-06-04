import React from 'react'
import styles from '/styles/post-design/type-two.module.scss'

const TypeTwoPost = () => {
  return (
    <div>
         <div className={styles.post}>
            <div className={styles.smallImage} style={{ backgroundImage: 'url(/shopping.jpg)'}}></div>
            <div className={styles.postInfo}>
              <i class='bx bx-bookmarks'></i>
              <p className={styles.postTitle}>Save Money With These 10 Shopping Tips</p>
              <div>
                <div className={styles.profile}></div>
                <span>
                  <p className={styles.date}>Jul 13, 2019</p>
                </span>
              </div>
            </div>
          </div>
    </div>
  )
}

export default TypeTwoPost