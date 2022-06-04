import Link from 'next/link'
import React from 'react'
import styles from '/styles/post-design/type-three.module.scss'


const TypeThreePost = () => {
  return (
    <div>
        <div className={styles.post}>
            <div className={styles.smallImage} style={{ backgroundImage: 'url(/food.jpg)'}}></div>
            <div className={styles.postInfo}>
                <div style={{ margin: '2rem 0'}}>
                    <p className={styles.postTitle}>Save Money With These 10 Shopping Tips</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum metus nec arcu placerat laoreet.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center'}}>
                <div className={styles.profile}></div>
                <div>
                    <p className={styles.author}>Daniel Tshibangu</p>
                    <p className={styles.date}>Jul 13, 2019</p>
                </div>
                <Link href=''>
                    <a>
                        <i class='bx bxs-share' ></i>  
                    </a>
                </Link>
                
              </div>
            </div>
          </div>
    </div>
  )
}

export default TypeThreePost