import React, {Fragment} from 'react'
import styles from '/styles/components-test/overview-style/subcomp-style/container.module.scss'

const Container = (props) => {
  return (
    <div className={styles.outer}>
        <div className={styles.wrapper}>
            {props.icon}
            <p className={styles.amount}>${props.amount}</p>
            <p>{props.date}</p>
            <p className={styles.description}>{props.description}</p>
            <i className='bx bx-dots-vertical-rounded'
                style=
                    {{ 
                        'position':'absolute',
                        'top': '2rem',
                        'right': '1rem',
                        'fontSize': '1.7rem',

                    }}
                >
            </i>
        </div>

        
    </div>
  )
}

export default Container