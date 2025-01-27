import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import dunjalukHeroImage from '../../../assets/images/dunjaluk/dunjaluk1.jpg';
import styles from '../Artist.module.css';

export default function Dunjaluk() {
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
          src={dunjalukHeroImage}
          alt='profile'
          className={styles.artistHeroImage}
        />
        <h1>DUNJALUK</h1>
      </div>
      <main>
        <span className={styles.description}>
          Dunjaluk is a band from Zagreb, Croatia, formed in late 2019, and
          consisting of singer Dunja Bahtijarević and electric guitarist Luka
          Čapeta. Dunjaluk focuses on reinterpreting songs from the Bosnian
          tradition of sevdah. Dunjaluk looks for the universal in tradition,
          for that which still resonates today, and translates it into modern
          musical expression. The sound of Dunjaluk is an abstraction of sounds
          arising from the language of sevdah, steeped into diverse modern
          musical influences, from noise and punk, to jazz and classical
          techniques.
        </span>
        <p>
          The origin of sevdalinkas lies in the encounter of two sensibilities:
          the Ottoman and the South Slavic. Sevdalinkas tell stories about love
          and yearning, about home and being away, about the individual’s
          relation to community and societal restrictions. Dunjaluk is
          captivated by the lyrics and the melodies of these songs, a richness
          that invites the band’s response. Sevdalinkas have been transformed
          many times over centuries, and Dunjaluk strives to make the most of
          that space open to change.
        </p>
        <p>
          Dunja Bahtijarević is a singer from Croatia, where she moved as a
          refugee from Bosnia. After getting her degrees in comparative
          literature, art history, and English, she decided to focus on music.
          She has led choirs and given workshops. Apart from Dunjaluk, she sings
          in Chant Electronique, Mimika Orchestra, and Kazan. She’s particularly
          interested in traditional songs and all the different musical contexts
          that can provide them with a new life. She’s constantly looking for
          her roots, linking past to present to future. She finds herself doing
          the same in the music that she makes. Luka Čapeta is a musician from
          Zagreb, Croatia. Since he started playing guitar as his main
          instrument, Luka has been exploring various aspects of making music,
          ranging from composition, production, performance to education. Since
          his studies at the Vienna Music Institute, he has produced and
          composed music for contemporary dance, theatre and film, and played in
          many different bands and projects from Zagreb and the surrounding
          region. Rooted in electronic, ambient, jazz, and classical music, Luka
          is constantly evolving his vocabulary by experimenting with
          traditional and world music, noise, avantgarde aesthetics, creating a
          unique approach to performance and sound.
        </p>
        <iframe
          src='https://www.youtube.com/embed/Cy7xSDh4vs0?si=LKQYwXdAM2l8z6X2'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <p>
          In November 2022, Dunjaluk released their first album. In 2022, they
          have been selected for the MOST Music Programme, whose mission is to
          boost the music market of the Balkans by connecting and supporting
          people in the world music market.
        </p>

        <div className={styles.links}>
          <a href='https://www.youtube.com/@dunjaluk9545'>Youtube</a>
          <a href='https://open.spotify.com/artist/7kRy3KxXOOYRi7QFQeHc9c?si=hyzHHr-dRXmkVzoEDd6vJA'>
            Spotify
          </a>
          <a href='https://dunjaluk.bandcamp.com/album/dunjaluk'>Bandcamp</a>
          <a href='https://www.instagram.com/dunjaluk.music/'>Instagram</a>
          <a href='https://www.facebook.com/profile.php?id=100082724683310'>
            Facebook
          </a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
