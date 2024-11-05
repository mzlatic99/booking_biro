import styles from "./HomePage.module.css";
import logo from '../../assets/images/logo-large.png';

export default function HomePage() {
  return (
    <div className={styles.main}>
      <img className={styles.logo} src={logo} alt="Logo" style={{textAlign: "center"}}></img>
      <p>Booking top-tier bands and artists for events, 
      festivals, and private performances. 
      With a deep network of emerging talent and 
      established acts across various genres, we connect 
      clients with the perfect musical match for any occasion.
      </p>
    </div>
  )
}