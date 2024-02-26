import React from 'react'
import styles from "./hero.module.css"
// import image1 from "../../asset/Field 2.jpg"

const Hero = () => {
  return (
    <div className={styles.hero}>
     {/* <img className={styles.image1} src={image1} alt="Field" /> */}
    <h1 className={styles.rub}> MarabFoods</h1>

    <p className={styles.font}>Cultivating the Future of Food</p>

    <p className={styles.down}>Our top priority is implementing best practices.</p>

   <em className={styles.font}>Nourishing communities, one seed at a time.</em>

<button className={styles.Learn} type="button">Learn more</button>

    </div>
  )
}

export default Hero