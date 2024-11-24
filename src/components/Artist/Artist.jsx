import { Link, useParams } from 'react-router-dom';
import test1 from '../../assets/images/test1.png';
import styles from './Artist.module.css';

export default function Artist() {
  const { artistId } = useParams();
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <img
          src={test1}
          alt='profile'
        />
        <h1>ARTIST {artistId}</h1>
      </div>
      <main>
        <span className={styles.description}>
          ARTIST 2 is an eclectic indie band known for blending dreamy
          soundscapes with energetic, guitar-driven melodies. Their quirky yet
          cool style fuses art-pop and post-punk influences, with hypnotic
          rhythms and poetic lyrics that transport listeners to an ethereal,
          offbeat world.
        </span>
        <p>
          ARTIST 2 emerged from the dimly lit basements and bustling streets of
          their hometown, a city known for its vibrant indie scene and
          experimental edge. Founded by lead vocalist and guitarist Sage Harper
          and bassist Avery Kim, ARTIST 2 began as a spontaneous experiment — a
          fusion of poetry readings and impromptu jam sessions that turned into
          an unlikely cult following. As the group added drummer Rory Chavez and
          synth wizard Taylor Reed, their sound evolved into something
          unmistakably unique: a swirling mix of dreamy soundscapes, piercing
          guitar riffs, and hypnotic beats that dared listeners to let go and
          drift. The band's debut EP, Strobe City Reverie, quickly garnered
          attention for its distinct mix of art-pop atmospheres with post-punk
          intensity. Songs like "Electric Melancholy" and "Through the
          Flickering Light" showed off their knack for pairing introspective,
          often surreal lyrics with fast-paced rhythms that kept hearts
          pounding. The hypnotic sway of their sound is matched only by the raw
          honesty of their lyrics, which explore themes of solitude, nostalgia,
          and the unending search for beauty in the overlooked.
        </p>
        <video controls='true'>
          <source
            src='https://www.youtube.com/watch?v=orbkg5JH9C8'
            type=''></source>
        </video>
        <div className={styles.links}>
          <a href='#'>Youtube</a>
          <a href='#'>Spotify</a>
          <a href='#'>Deezer</a>
          <a href='#'>TikTok</a>
          <a href='#'>Instagram</a>
          <a href='#'>Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to='/artists'>BACK</Link>
        </span>
      </main>
    </div>
  );
}
