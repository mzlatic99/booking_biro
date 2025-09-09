import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import tannutuwaHeroImage from '../../../assets/images/tannutuwa/tannutuwa1.jpg';
import styles from '../Artist.module.css';

export default function TannuTuwa() {
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
          src={tannutuwaHeroImage}
          alt='profile'
          className={styles.artistHeroImage}
        />
        <h1>TANNU TUWA</h1>
      </div>
      <main>
        <span className={styles.description}>
          The band, which delves into experimental and electronic vocal music,
          draws inspiration from the traditions and mysticism of the Tannu Tuva
          region, as well as the rich cultural heritage of the Balkans, acting
          as a bridge between ancient and modern soundscapes. This collective
          explores the liminal spaces between past and future, merging
          traditional experimental vocal techniques with modern electronic &
          acoustic instruments and experimental sounds. Their music creates a
          unique atmosphere where the organic sounds of nature, such as the wind
          from the high plains of Tuva and the melancholic motifs of Balkan
          villages, blend into complex electronic compositions.
        </span>
        <p>
          Electronics are not merely tools but extensions of vocal techniques
          that the singers and performers use to craft a hypnotic,
          transcendental experience for the audience. Their performances are
          often enhanced by improvisation, giving an impression of
          unpredictability, yet always deeply connected to emotional and
          spiritual space. The inspiration from Tuva comes from its fascinating
          sonic heritage, where sound holds symbolic significance tied to nature
          and the spiritual world. Throat singing, one of the fundamental
          elements this band employs, symbolizes a connection to the roots of
          the earth and the spirituality of ancestors. On the other hand, Balkan
          influences are evident through unusual metric patterns, emotional
          melodies, and an unfettered avant-garde spirit, drawing strength from
          the rebellious energy of the punk movement.
        </p>
        <iframe
          src='https://www.youtube.com/embed/TTiUTDAhI4k?si=hsY-SZUqzzsV_cRM'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <p>
          With their sound, the band revives the cultural, avant-garde punk
          spirit, breaking down the boundaries between musical genres and
          aesthetic norms. Eschewing classical song structures, they often
          create soundscapes that invite contemplation, questioning reality, and
          emotional journeys. Their concerts are performances in their own
          right—multimedia events that include visual arts, performance
          elements, and audience interaction, offering a new experience every
          time. At its core, this band bridges the old and the new, using modern
          technology to explore ancient themes and mythologies. Their
          avant-garde approach allows them to freely experiment with different
          styles and forms, while their punk ideology drives them to
          continuously challenge conventions, making them one of the most
          intriguing voices on the contemporary music scene.
        </p>

        <div className={styles.links}>
          <a href='https://www.youtube.com/channel/UCIrljeZAHQdm3XAysS5sO9w'>
            Youtube
          </a>
          <a href='https://open.spotify.com/artist/3FJiRhoKfBbyxNJPXg3IGE?si=effaqmYvQ-SuCFuZvLGckg'>
            Spotify
          </a>
          <a href='https://www.instagram.com/tuwatannu/'>Instagram</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
