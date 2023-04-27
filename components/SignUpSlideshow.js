import React, {useState} from 'react'
import styles from '/styles/signupSlideshow.module.scss'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const SignUpSlideshow = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    // to make it auto, we change the index every 2.5 seconds using setTimeout
    // since thhis is a side effect we will use useEffect
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) => 
                    prevIndex == colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    



  return (
    <div className={styles.slideshow}>
        <div className={styles.slideshowSlider}
            style={{ transform: `translate3d(0, ${-index * 90}vh, 0)` }}>
            {colors.map((backgroundColor, index) => (
                <div className={styles.slide} key={index} style={{backgroundColor}}></div>
            ))}
        </div>

        <div className={styles.slideshowDots}>
            {colors.map((_, idx) => (
                <div key={idx} 
                className={`${styles.slideshowDot} ${index == idx ? styles.active : " "}`}
                onClick={() => {
                    setIndex(idx);
                }}
                ></div>
            )) }
        </div>
    </div>
  )
}

export default SignUpSlideshow