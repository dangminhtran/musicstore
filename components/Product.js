import styles from '../styles/Product.module.css';


function Product() {
     
      return (
          <div className={styles.list}>

            <div className={styles.phantom}>
                <img src="phantom1.png" alt='Phantom1'/>
                <div className={styles.groupdescription}>
                    <p className={styles.text} alt='productname'>PHANTOM I White</p>
                    <h3 className={styles.title} alt='Title'>A class of its own.</h3>
                    <button className={styles.discoverbtn}>DISCOVER</button> 
                </div> 
            </div>  

            <div className={styles.phantom}>
                <img src="phantom2.png" alt='Phantom2'/>
                <div className={styles.groupdescription}>
                    <p className={styles.text} alt='productname'>PHANTOM II Gold</p>
                    <h3 className={styles.title} alt='Title'>Pure sound.</h3>
                    <button className={styles.discoverbtn}>DISCOVER</button>  
                </div>
            </div>  

            <div className={styles.phantom}>
                <img src="phantom3.png" alt='Phantom3'/>
                <div className={styles.groupdescription}>
                    <p className={styles.text} alt='productname'>PHANTOM II Black</p>
                    <h3 className={styles.title} alt='Title'>Deeply nomadic.</h3>
                    <button className={styles.discoverbtn}>DISCOVER</button> 
                </div>
            </div>  

            <div className={styles.phantom}>
                <img src="phantom4.png" alt='Phantom4'/>
                <div className={styles.groupdescription}>
                    <p className={styles.text} alt='productname'>PHANTOM II White</p>
                    <h3 className={styles.title} alt='Title'>Intensively immersive.</h3>
                    <button className={styles.discoverbtn}>DISCOVER</button>  
                </div>   
            </div>   


          </div>
          
      );
  
  }
  
  export default Product;