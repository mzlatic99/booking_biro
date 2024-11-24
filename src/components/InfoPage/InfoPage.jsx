import styles from './InfoPage.module.css';
import test from '../../assets/images/test1.png';

export default function InfoPage() {
  return (
    <div className={styles.infoMain}>
      <div className={styles.firstSection}>
        <h1>LAURA MATIJAŠEVIĆ</h1>
        <h2>Job title</h2>
        <div className={styles.firstContentGroup}>
          <img
            src={test}
            alt='Profile'
            className={styles.profile}
          />
          <p>
            ARTIST 2 emerged from the dimly lit basements and bustling streets
            of their hometown, a city known for its vibrant indie scene and
            experimental edge. Founded by lead vocalist and guitarist Sage
            Harper and bassist Avery Kim, ARTIST 2 began as a spontaneous
            experiment — a fusion of poetry readings and impromptu jam sessions
            that turned into an unlikely cult following. As the group added
            drummer Rory Chavez and synth wizard Taylor Reed, their sound
            evolved into something unmistakably unique: a swirling mix of dreamy
            soundscapes, piercing guitar riffs, and hypnotic beats that dared
            listeners to let go and drift. The band's debut EP, Strobe City
            Reverie, quickly garnered attention for its distinct mix of art-pop
            atmospheres with post-punk intensity. Songs like "Electric
            Melancholy" and "Through the Flickering Light" showed off their
            knack for pairing introspective, often surreal lyrics with
            fast-paced rhythms that kept hearts pounding. The hypnotic sway of
            their sound is matched only by the raw honesty of their lyrics,
            which explore themes of solitude, nostalgia, and the unending search
            for beauty in the overlooked.
          </p>
        </div>
      </div>
      <div className={styles.secondSection}>
        <h1>LAURA MATIJAŠEVIĆ</h1>
        <h2>Job title</h2>
        <div className={styles.secondContentGroup}>
          <img
            src={test}
            alt='Profile'
            className={styles.profile}
          />
          <p>
            ARTIST 2 emerged from the dimly lit basements and bustling streets
            of their hometown, a city known for its vibrant indie scene and
            experimental edge. Founded by lead vocalist and guitarist Sage
            Harper and bassist Avery Kim, ARTIST 2 began as a spontaneous
            experiment — a fusion of poetry readings and impromptu jam sessions
            that turned into an unlikely cult following. As the group added
            drummer Rory Chavez and synth wizard Taylor Reed, their sound
            evolved into something unmistakably unique: a swirling mix of dreamy
            soundscapes, piercing guitar riffs, and hypnotic beats that dared
            listeners to let go and drift. The band's debut EP, Strobe City
            Reverie, quickly garnered attention for its distinct mix of art-pop
            atmospheres with post-punk intensity. Songs like "Electric
            Melancholy" and "Through the Flickering Light" showed off their
            knack for pairing introspective, often surreal lyrics with
            fast-paced rhythms that kept hearts pounding. The hypnotic sway of
            their sound is matched only by the raw honesty of their lyrics,
            which explore themes of solitude, nostalgia, and the unending search
            for beauty in the overlooked.
          </p>
        </div>
      </div>
    </div>
  );
}
