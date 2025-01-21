import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import nemanjaHeroImage from '../../../assets/images/nemecek/nemecek1.jpg';
import styles from '../Artist.module.css';

export default function Nemanja() {
  const location = useLocation();

  useEffect(() => {
    console.log('Route changed to:', location.pathname);
  }, [location]);

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
    <div className={styles.body}>
      <div className={styles.hero}>
        <img
          src={nemanjaHeroImage}
          alt='profile'
        />
        <h1>NEMEČEK</h1>
      </div>
      <main>
        <span className={styles.description}>
          Nemeček is a Croatian ethno noise-rock band that crafts an intense,
          otherworldly soundscape by merging traditional folk elements with
          experimental rock. The band combines the ancient sounds of the
          tambura, a traditional Croatian instrument, with the heavy pulse of
          krautrock, experimental rock, and noise rock.
        </span>
        <p>
          Imagine a road trip through the eternal, fog-covered flatlands of
          Pannonia, where the past lingers in the mist and headlights carve
          through the dark. It’s nostalgic but never sentimental; heavy yet
          never overwhelming. Even in the thickest fog, there is always an
          incandescent flicker of hope. Their music offers an immersive and
          cinematic experience where Croatia&#39;s folklore collides with
          post-apocalyptic energy.
        </p>
        <p>
          Over the last two years, Nemeček has played extensively across
          Croatia, Serbia, and Slovenia, captivating audiences at various
          festivals and venues. Their recent tours across the Czech Republic,
          Slovakia, and Hungary have further cemented their reputation as one of
          Croatia’s most boundary-pushing musical acts.
        </p>
        <p>
          In 2024, Nemeček became the first Croatian band to win the prestigious
          “Milan Mladenović” award for the best song in the region with
          ‘Mirila,’ a standout track from their latest album Prokletije II.
        </p>
        <p>
          Now poised for a broader European presence, Nemeček is ideal for
          festivals and venues seeking to deliver audiences a transformative
          musical journey. This is not merely folk or rock in any familiar sense
          - it’s an alchemical fusion where history meets raw, contemporary
          power. As they lead you through their sonic odyssey, Nemeček’s sound
          will leave you immersed in the tension of ancient echoes and modern
          edges - a visceral experience that transcends borders and eras alike.
        </p>
        <iframe
          src='https://www.youtube.com/embed/S7AnhX-86bY?si=9X4wjvKFPF9-KC2p'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <div className={styles.links}>
          <a href='https://www.youtube.com/@nemecek9297'>Youtube</a>
          <a href='https://open.spotify.com/artist/60DIILnL7DiczpvCsug7kK'>
            Spotify
          </a>
          <a href='https://nemecek44.bandcamp.com/'>Bandcamp</a>
          <a href='https://www.instagram.com/nemecek_band/?hl=en'>Instagram</a>
          <a href='https://www.facebook.com/Nemecek4/?locale=hr_HR'>Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
