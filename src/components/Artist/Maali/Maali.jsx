import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import maaliHeroImage from '../../../assets/images/maali/maali1.jpg';
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
          src={maaliHeroImage}
          alt='profile'
          className={styles.artistHeroImage}
        />
        <h1>MAALI</h1>
      </div>
      <main>
        <span className={styles.description}>
          Maali is a Croatian singer-songwriter who is quickly being recognized
          as one of the most compelling new voices on the domestic music scene.
          A versatile musician – trumpet player, guitarist, and vocalist – Maali
          has honed his craft as a member of bands such as Demetronomes, and the
          Mimika Orchestra, as well as through numerous collaborations with
          artists across genres.
        </span>
        <p>
          His debut studio album, "Maali", is a personal collection of original
          songs that reflect on experiences, emotions, and stories gathered over
          the past decade. Each song initially took shape as an acoustic version
          before evolving through the recording process and collaboration with
          top-tier musicians into richly layered arrangements that sound
          organic, authentic, and modern.
        </p>
        <iframe
          src='https://www.youtube.com/embed/zzoJI70KMrY?si=LItljNSspt7j9zwy'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <p>
          Maali’s musical expression blends elements of American folk,
          indie-pop, and alternative folk, balancing the intimacy of acoustic
          guitar and vocals with detailed instrumental textures. Unconcerned
          with strict genre boundaries, the songs on "Maali" vary in theme—from
          introspective reflections to playful storytelling—mirroring the
          diverse musical influences and personal moments behind their creation.
        </p>

        <div className={styles.links}>
          <a href='https://www.youtube.com/channel/UCtUAn1hCgvFugZ07fBOw73A'>
            Youtube
          </a>
          <a href='https://open.spotify.com/artist/27vWSZEAJqDISAZbChEeUQ?si=Hl17pfKYTrqXBu9Tdur0PQ'>
            Spotify
          </a>
          <a href='https://intekmusic.bandcamp.com/album/maali?search_item_id%3D2826764910%26search_item_type%3Da%26search_match_part%3D%253F%26search_page_id%3D4637971763%26search_page_no%3D0%26search_rank%3D2='>
            Bandcamp
          </a>
          <a href='https://www.instagram.com/maali.music/'>Instagram</a>
          <a href='https://www.facebook.com/maali.music'>Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
