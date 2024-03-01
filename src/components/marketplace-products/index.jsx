import styles from "./marketplace.module.css"
import seed1 from "../../assets/SEEDS-CAULIFLOWER-MAYA-F1.-300x300.jpg"
import seed2 from "../../assets/SEEDS-CUCUMBER-POINSETT.jpg"
import seed3 from "../../assets/SEEDS-HOT-PEPPER-BIG-SUN-300x300.jpg"
import seed4 from "../../assets/SEEDS-OKRA-INDIANA1-300x300.jpg"
import fert1 from "../../assets/FOLIAR-FERT-KELIK-POTASSIUM--300x300.jpg"
import fert2 from "../../assets/FOLIAR-FERT-MULTI-K-300x300.jpg"
import fert3 from "../../assets/FOLIAR-FERT-POLY-FEED-300x300.jpg"
import fert4 from "../../assets/FOLIAR-FERTILIZER-FLORONE-300x300.jpg"
import prot1 from "../../assets/PROTECTIVE-CLOTHING-GOGGLES-300x300.jpg"
import prot2 from "../../assets/PROTECTIVE-CLOTHING-RAINCOAT-1-300x300.jpg"
import prot3 from "../../assets/PROTECTIVE-CLOTHING-RESPIRATOR-300x300.jpg"
import prot4 from "../../assets/PROTECTIVE-CLOTHING-WELLIGNTON-BOOTS-300x300.jpg"
import carrot from '../../assets/carrot.jpeg'
import pineapple from "../../assets/pineapple.jpeg"
import tomatoes from '../../assets/tomatoes.jpeg'
import banana from "../../assets/banana.jpeg"




const MarketPlace = () => {
  return (
    <div className={styles.parentcontainer}>
      <p>SEEDS</p>

      <div className={styles.card}>
        <div className={styles.imagecontainer}>
          <div className={styles.imagecontainer}>
            <img className={styles.images} src={seed1} alt='image1' />
          </div>
          <div className={styles.description}>
            <h2 className={styles.product}>CAULIFOWER SEEDS</h2>
            <h4 className={styles.prices}>GHS 10</h4>
            <button className={styles.action}>SHOP</button>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.imagecontainer}>
          <div className={styles.imagecontainer}>
            <img className={styles.images} src={seed2} alt='image2' />
          </div>
          <div className={styles.description}>
            <h2 className={styles.product}>CUCUMBER SEEDS</h2>
            <h4 className={styles.prices}>GHS 10</h4>
            <button className={styles.action}>SHOP</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <div className={styles.imagecontainer}>
              <img className={styles.images} src={seed3} alt='image3' />
            </div>
            <div className={styles.description}>
              <h2 className={styles.product}>PEPPER SEEDS</h2>
              <h4 className={styles.prices}>GHS 10</h4>
              <button className={styles.action}>SHOP</button>
            </div>
          </div>



          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={seed4} alt='image4' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>OKRA SEEDS</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <p>FERTILIZERS</p>



          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={fert1} alt='fert1' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>KELIK</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={fert2} alt='MULTI-K' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>MULTI-K</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={fert3} alt='poly' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>POLY</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={fert4} alt='floron' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>FLORON</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <p>PROTECTIVE CLOTHING</p>



          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={prot1} alt='goggle' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>GOGGLE</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={prot2} alt='overal' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>OVERAL</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={prot3} alt='nosemask' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>NOSE MASK</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.imagecontainer}>
              <div className={styles.imagecontainer}>
                <img className={styles.images} src={prot4} alt='boots' />
              </div>
              <div className={styles.description}>
                <h2 className={styles.product}>BOOTS</h2>
                <h4 className={styles.prices}>GHS 10</h4>
                <button className={styles.action}>SHOP</button>
              </div>
            </div>
          </div>

          <p>FOOD STUFFS</p>

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
        </div>

</div>


        )
}

        export default MarketPlace;