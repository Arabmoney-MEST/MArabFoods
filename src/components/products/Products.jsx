import styles from './products.module.css'
import carrot from '../../assets/carrot.jpeg'
import pineapple from "../../assets/pineapple.jpeg"
import  tomatoes from '../../assets/tomatoes.jpeg'
import banana from "../../assets/banana.jpeg"

const Products = () => {
  return (

    <div className={styles.parentcontainer}>
      <div className={styles.card}>
      <div className={styles.imagecontainer}>   
        <div className={styles.imagecontainer}>
           <img className={styles.images} src={carrot} alt='carrot' /> 
        </div>
        <div className={styles.description}>
      <h2 className={styles.product}>carrot</h2>
      <h4 className={styles.prices}>GHS 10</h4>
      <button className={styles.action}>SHOP</button>
    </div>
    </div>
    
    </div>


<div className={styles.productcontainer}>
  <div className={styles.card}>
  <div className={styles.imagecontainer}>
      <img className={styles.images} src={pineapple} alt='pineapple' />  
  </div>
  <div className={styles.description}>
<h2 className={styles.product}>pineapple</h2>
<h4 className={styles.prices}>GHS 10</h4>
<button className={styles.action}>SHOP</button>
</div>
</div>
</div>



      <div className={styles.productcontainer}>
        <div className={styles.card}>
        <div className={styles.imagecontainer}>
            <img className={styles.images} src={tomatoes} alt='tomatoes' />  
        </div>
        <div className={styles.description}>
      <h2 className={styles.product}>tomatoes</h2>
      <h4 className={styles.prices}>GHS 20</h4>
      <button className={styles.action}>SHOP</button>
      </div>
      </div>
        
    </div>

    <div className={styles.productcontainer}>
        <div className={styles.card}>
        <div className={styles.imagecontainer}>
            <img className={styles.images} src={banana} alt='banana' />  
        </div>
        <div className={styles.description}>
      <h2 className={styles.product}>banana</h2>
      <h4 className={styles.prices}>GHS 20</h4>
      <button className={styles.action}>SHOP</button>
      </div>
      </div>
      </div>
    
</div>
    
  )
}

export default Products