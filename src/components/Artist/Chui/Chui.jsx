import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import chuiHeroImage from '../../../assets/images/chui/chui1.jpg';
import styles from '../Artist.module.css';

export default function Chui() {
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
          src={chuiHeroImage}
          alt='profile'
        />
        <h1>CHUI</h1>
      </div>
      <main>
        <span className={styles.description}>
          Chui is a critically acclaimed space jazz rock band that is bringing
          jazz to a whole new galaxy. Heavily inspired by old science-fiction
          TV, feature films and comic culture, they’ve come up with a unique
          blend of music, firmly rooted in jazz but boldly venturing in other
          genres. Canterbury prog rock, numerous electronic music styles ranging
          from techno to UK garage, Dilla’s hip hop beats, even jazzcore – all
          traceable in Chui’s songbook.
        </span>
        <p>
          Chui is the brainchild of Toni Starešinić, a keyboard and synth player
          well established on the Croatian music scene. The band was founded in
          2012.,with original members recording the first two albums.
        </p>
        <p>
          Vojkan Jocić, six times awarded “Best jazz saxophone player in
          Croatia”, joined the band in 2014. and in 2016. drummer Ivan Levačić (
          ABOP, ELEVEN) and bass player Konrad Lovrenčić (Elemental) completed
          the present lineup. They released their first self-titled album in
          2012. on Dancing Bear Records and “The Second Arrival” followed next
          year to widespread critical acclaim. Their third album “Third Sun from
          the Stone” was released in 2015. and voted the best Croatian album of
          the year by music critics. In 2017. Chui released a big band album
          “Chui ovu glazbu” performed alongside Croatian Radio-Television Jazz
          Orchestra and awarded with “Best jazz album”and “Best jazz
          performance” by Porin (Croatian equivalent of Grammy). In 2019. the
          band released their fifth studio album “Iz kapetanovog dnevnika”
          (“From the captain’s log”) and in just a few weeks, it became their
          most highly rated release thus far. In 2022. Chui released epic album
          "Zagreb Berlin" which repeated their succes being awarded for the
          album of the year by music critics and "Best instrumental" album and
          "Best instrumental performance" by Porin award.
        </p>
        <p>
          Chui performed at Eurosonic Noorderslag (Netherlands), Dimensions
          Festival (Croatia), INmusic Festival (Croatia), Kaunas Biennial
          (Lithuania), MENT Festival (Slovenia), BUSH (Hungary) and numerous
          other jazz and alter- native festivals at the side of Kamasi Washing-
          ton, Medeski Scofield Martin &amp; Wood, etc.
        </p>
        <p>
          Chui also composed music for Walther Ruttmanns 1927. Movie "Berlin:
          Die Sinfonie der Großstadt" and performed the score in theaters and
          film festivals.
        </p>

        <iframe
          src='https://www.youtube.com/embed/rfabahR3zKY?si=UC4jq-m_Sq2Ad0cX'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <div className={styles.links}>
          <a href='https://www.youtube.com/channel/UCx6jMjC7FO8DgMAdDSzLEQQ'>
            Youtube
          </a>
          <a href='https://open.spotify.com/artist/6r4grwIpbO1DBsLh44nNHj?si=6LrphDE9QU2Wltaf7_SsRw '>
            Spotify
          </a>
          <a href='https://chuitheband.bandcamp.com/'>Bandcamp</a>
          <a href='https://www.instagram.com/chuitheband/'>Instagram</a>
          <a href='https://www.facebook.com/chuiovuglazbu'>Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to='/artists'>BACK</Link>
        </span>
      </main>
    </div>
  );
}
