import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import styles from '/styles/post-design/postcard.module.scss'

const PostCard = ({post}) => {
  return (
    <div className={styles.postcard}>
        <div className={styles.content}>
            <div className={styles.imageFit}>
                <img 
                    src={post.coverImage.url}
                    className={styles.mainImage}
                />
            </div>
            <div>
                <span>By {post.author.name}</span>
                <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span> 
            </div>

            <h4 className={styles.title}>{post.title}</h4>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <i class='bx bx-right-arrow-alt'></i>
        </div>
    </div>
  )
}

export default PostCard