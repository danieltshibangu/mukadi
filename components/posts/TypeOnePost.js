import React from 'react'
import styles from '/styles/post-design/type-one.module.scss'

const TypeOnePost = () => {
  return (
    <div>
        <div className={styles.post}>
            <div className={styles.smallImage} style={{ backgroundImage: 'url(/shopping.jpg)'}}>
              <div className={styles.overlay}></div>
              <p className={styles.postTitle}>Save Money With These 10 Shopping Tips</p>
            </div>
            <div className={styles.postInfo}>
              
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <div className={styles.profile}></div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default TypeOnePost