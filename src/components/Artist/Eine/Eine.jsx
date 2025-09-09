import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import eineHeroImage from '../../../assets/images/eine/eine1.jpg';
import styles from '../Artist.module.css';

export default function Maali() {
  useEffect(() => {
    // Disable zooming
    const preventZoom = (event) => {
      if (event.ctrlKey || event.touches?.length > 1) {
        event.preventDefault();
      }
    };

    const preventGesture = (event) => event.preventDefault();

    document.addEventListener('wheel', preventZoom, { passive: false });
    document.addEventListener('gesturestart', preventGesture, {
      passive: false,
    });
    document.addEventListener('gesturechange', preventGesture, {
      passive: false,
    });
    document.addEventListener('gestureend', preventGesture, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });

    return () => {
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('gesturestart', preventGesture);
      document.removeEventListener('gesturechange', preventGesture);
      document.removeEventListener('gestureend', preventGesture);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  return (
    <div className={styles.artistBody}>
      <div className={styles.artistHero}>
        <img
          src={eineHeroImage}
          alt='profile'
          className={styles.artistHeroImage}
        />
        <h1>EINE</h1>
      </div>
      <main>
        <span className={styles.description}>
          eine is an analog-experimental project by Ivan Ščapec, a well-known
          face of the Balkan alternative scene. After 15 years of songwriting
          and touring with his band SEINE, as well as his older noise-punk
          project Vlasta Popić, eine represents a deconstruction of his body
          work through analog synths and sequencers.
        </span>
        <p>
          Songs performed on the guitar have metamorphosed into black-and-white
          keys, growling fat basses, trip-hop grooves and analog vapour,
          superposed by Ščapec’s distinctive androgynous vocals.
        </p>
        <iframe
          src='https://www.youtube.com/embed/Cm7230t-N4Y?si=YWjNMeeKFq_rSRVZ'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <p>
          At the start of 2025, eine released a live EP called “Blanket Fort
          Session”, where he presented his new direction for the first time. He
          promoted the release in numerous Balkan clubs as well as several
          distinguished festivals in Slovenia, such as festival Niansa and Trnje
          festival. For the end of 2025 as well as 2026, more live sessions and
          tours are in the works.
        </p>
        <p>experimental / analog / indie / trip-hop</p>

        <div className={styles.links}>
          <a href='https://www.youtube.com/@AgencijaKonkurencija'>Youtube</a>
          <a href='https://open.spotify.com/artist/2bPv4G7eJwJwfLyxBBCJJs?si=elaodEqURjusyImHzGyY6A'>
            Spotify
          </a>
          <a href='https://seine.bandcamp.com/album/blanket-fort-session'>
            Bandcamp
          </a>
          <a href='https://www.instagram.com/seine_sno/'>Instagram</a>
          <a href='https://www.facebook.com/SeineVz/'>Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
