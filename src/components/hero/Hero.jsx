import React from 'react'
import styles from "./hero.module.css"
// import image1 from "../../asset/Field 2.jpg"

const Hero = () => {
  return (
    <div className={styles.hero}>
     
      <h1 className={styles.headingH1}>Welcome to MarabFoods</h1>
        <p className={styles.intro}>Cultivating the future of food and 
        nourishing communities, one seed at a time.<br/><em>Your ultimate destination for high-quality, healthy food products.</em></p>
       
      <div className={styles.aboutUsButton}>
        <button className={styles.learnButton}>Learn more</button>
      </div>
      <p className={styles.top}>Our top priority is implementing best practices.</p>

    </div>
  )
}

export default Hero