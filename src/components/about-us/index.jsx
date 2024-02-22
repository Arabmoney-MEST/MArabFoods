import React from 'react'

import styles from './aboutus.module.css'
const AboutUs = () => {
  return (
    <div>
      <div className={styles.aboutus}>
      <p>what we do</p>
      <h2>MArabfood</h2>
      <p>
        MarabFoods is more than just an agro-business; we're passionate stewards of the land, dedicated to bringing high-quality, sustainable agricultural products to your table. From farm to fork, we prioritize ethical practices, environmental responsibility, and community well-being.
        <ul className={styles.list}>
          <li>Empower farmers: We collaborate with local growers, ensuring fair prices and sustainable practices.
          </li>
          <li>Nurture the earth: We prioritize responsible land management and eco-friendly techniques.</li>
           <li>Cultivate healthy lives: We provide access to nutritious, fresh produce for all.</li>
         </ul>
       </p>

    </div>
    </div>
  )
}

export default AboutUs