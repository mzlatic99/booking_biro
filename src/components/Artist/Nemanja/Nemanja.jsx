import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import nemanjaHeroImage from '../../../assets/images/nemanja/nemanja1_16x9.jpg';
import styles from '../Artist.module.css';

export default function Nemanja() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
          src={nemanjaHeroImage}
          alt='profile'
          className={styles.artistHeroImage}
        />
        <h1>NEMANJA</h1>
      </div>
      <main>
        <span className={styles.description}>
          nemanja is a global psych band bringing together members from Pula and
          Zagreb, inspired by 70's Afro-Colombian, Turkish, Thai, and world
          music, spearheaded by Luka Šipetić with albums Tarot Funk, Cosmic
          Disco, and Voodoo Beat. The live band members are Ana Kovačić (sax,
          synth), Laura Matijašević (bass), Đuro Dobranić (drums), Laura
          Tandarić (percussion, vocals), and Luka Šipetić (guitar, vocals).
        </span>
        <p>
          The band is currently promoting their third album, Voodoo Beat, which
          presents a danceable and exciting musical melting pot of hot
          Afro-Colombian rhythms, Caribbean dub sounds, and tropical exotica,
          inspired by the ancient myth of Orpheus and Eurydice. It also draws
          inspiration from films like Orpheus (Jean Cocteau, 1950) and Black
          Orpheus (Marcel Camus, 1959). In addition to its intriguing musical
          influences, the albums stand out for their narrative concept that
          spans all three records, referencing tarot, Buddhism, and ancient
          myths, forming what they call the "Esoteric Trilogy." Tarot Funk
          portrays the last moments before nemanja's death through tarot cards
          and sounds inspired by 70s Anatolian rock; Cosmic Disco follows
          nemanja's journey through the bardo, the underworld, guided by the
          Tibetan Book of the Dead, with influences from African and Asian disco
          of the 70s and 80s; and Voodoo Beat concludes the "Esoteric Trilogy,"
          where nemanja attempts to return from the land of the dead with the
          help of voodoo powers of love and an Afro-Colombian sound.
        </p>
        <iframe
          src='https://www.youtube.com/embed/zmRe9fo8Sw4?si=0SOkecREhW2q9E_d'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen></iframe>
        <p>
          The band has been performing actively since June 2019, and despite the
          pandemic, they have played throughout the region, including at the
          prestigious ESNS festival in the Netherlands and showcase festivals in
          the region such as MENT and SHIP, as well as festivals like INmusic
          and Arsenal. Renowned music publications and critics from across the
          region have consistently placed Tarot Funk, Cosmic Disco, and Voodoo
          Beat at the top of the best albums lists in the region for 2019, 2020,
          and 2023. These albums have frequently appeared on year-end lists from
          music portals in Serbia, Bosnia and Herzegovina, Slovenia, Germany,
          France, and the United Kingdom.
        </p>

        <div className={styles.links}>
          <a href='https://www.youtube.com/@nemanjaband'>Youtube</a>
          <a href='https://open.spotify.com/artist/4kLvPkhSzcYKQYsb1StfeB'>
            Spotify
          </a>
          <a href='https://nemanja.bandcamp.com/'>Bandcamp</a>
          <a href='https://www.instagram.com/nemanjabend/'>Instagram</a>
          <a href='https://www.facebook.com/nemanja.hr/?locale=hr_HR'>
            Facebook
          </a>
        </div>
        <span className={styles.backButton}>
          <Link
            to={{
              pathname: `${process.env.PUBLIC_URL}/`,
            }}
            state={{ fromArtistsPage: true }}>
            BACK
          </Link>
        </span>
      </main>
    </div>
  );
}
