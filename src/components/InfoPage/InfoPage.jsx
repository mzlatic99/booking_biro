import styles from './InfoPage.module.css';
import infoImage from '../../assets/images/infopage/MarinaPavicic-Info.jpg';

export default function InfoPage() {
  return (
    <div
      className={styles.infoMain}
      style={{
        backgroundImage: `url(${infoImage})`,
        backgroundSize: 'cover',
        backgroundColor: '#fff',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
      }}>
      <div className={styles.textContainer}>
        <div className={styles.lauraInfo}>
          <span className={styles.infoBoldText}>Laura Matijašević</span>
          <p>Booking Agent</p>
          <p>laura@44bookingbiro.com</p>
        </div>
        <div className={styles.linaInfo}>
          <span className={styles.infoBoldText}>Lina Crgol</span>
          <p>PR Agent</p>
          <p>lina@44bookingbiro.com</p>
        </div>
        <div className={styles.address}>
          <p>Veprinačka 5, Zagreb Croatia</p>
        </div>
      </div>
      <span className={styles.author}>Marina Uzelac ©</span>
    </div>
  );
}
