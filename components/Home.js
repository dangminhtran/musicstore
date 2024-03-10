import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import Product from './Product'

    

const userIcon = <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}}/>
const mapIcon = <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}}/>
const basketIcon = <FontAwesomeIcon icon={faBasketShopping} style={{color: "#ffffff",}}/>



function Home() {

  const productsList = []
for (let i = 0; i < Product.length; i++) {
  productsList.push(<Product/>);
 }


  return (
    <div>
      <div className={styles.background}>
        <header className={styles.banner}> 

          <div className={styles.burgermenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.logo}>MUSIC STORE</div>
          <div className={styles.icons}>
            <div>{userIcon}</div>
            <div>{mapIcon}</div>
            <div>{basketIcon}</div>
          </div>
        </header>

        <div className={styles.endpage}>
          <div className={styles.text}>
            <p className={styles.model}>PHANTOM</p> 
            <h1 className={styles.title}>IMPLOSIVE SOUND</h1>
          </div>

          <div className={styles.buttons}>
            <button className={styles.discoverbtn}>DISCOVER</button>
            <button className={styles.buybtn}>BUY</button>
          </div>
        </div>
      </div>

      <div className={styles.secondpage}>

        <div className={styles.text2}>
          <p className={styles.launch}>LATEST LAUNCH</p> 
          <h1 className={styles.barname}>DIONE SOUNDBAR</h1>
        </div>

        <div className={styles.discovermore}>
          <img className={styles.picturebar} src="soundbar.png" alt="picturebar" />
          <button className={styles.buybtn}>DISCOVER</button>
        </div>

        <div className={styles.listproducts}>
          <div><Product/></div>
        </div>

        <footer className={styles.footer}> 

          <div className={styles.footertext}>ABOUT</div>
          <div className={styles.footertext}>CONTACT</div>
          <div className={styles.footertext}>SUPPORT</div>
          <div className={styles.footertext}>STORE</div>
          
        </footer>

      </div>



    </div>
  );
}

export default Home;




  
