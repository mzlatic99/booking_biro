import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import psecaplazaHeroImage from '../../../assets/images/psecaplaza/psecaplaza1.jpeg';
import styles from '../Artist.module.css';

export default function PsecaPlaza() {
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
          src={psecaplazaHeroImage}
          alt='profile'
        />
        <h1>PSEĆA PLAŽA</h1>
      </div>
      <main>
        <span className={styles.description}>
          Pseća plaža is an audio-visual band from Zagreb, founded in the spring
          of 2016 with the goal of creating captivating psychedelic melodies
          infused with tropical rhythms, nostalgic sixties undertones, and
          dreamy lyrics. Since its inception, the band has undergone various
          phases and lineup changes, each bringing new dimensions to their sound
          and creative direction.
        </span>
        <p>
          The current lineup consists of Erol Beširević, Matea Bobanović, Filip
          Mlinarić, and Borjan Cvrtila, with contributions from cherished guest
          collaborators who enhance the band&#39;s dynamic energy. Over the
          years, Pseća plaža has released a range of works that showcase their
          evolution and versatility. Their debut album, Honolulu (2017), was
          released under the name &quot;dog’s beach&quot; and marked the
          beginning of their exploration into the intersection of vintage
          psychedelia and tropical influences. This was followed by their
          sophomore album, Povratak u lagunu br.07 (2019), which continued to
          develop their signature blend of vibrant, experimental soundscapes.
        </p>
        <p>
          In 2020, the band released the EP Nijanse, a project that reflected a
          more introspective and nuanced approach to their music. Alongside
          these major releases, Pseća plaža has also produced several singles,
          collaborating with acclaimed acts such as Nemanja and Porto Morto,
          further cementing their place within the regional music scene. These
          partnerships highlight the band’s commitment to creative synergy and
          their ability to adapt their style to complement diverse musical
          contexts.
        </p>
        <p>
          After a prolonged hiatus, Pseća plaža is making a much-anticipated
          return to the scene with a fresh artistic vision and renewed energy.
          Their upcoming album, Teško je imati glavu promises to deliver a bold
          new chapter in their musical journey, combining their signature
          psychedelic elements with fresh ideas and sounds.
        </p>
        <p>
          After a prolonged hiatus, Pseća plaža is making a much-anticipated
          return to the scene with a fresh artistic vision and renewed energy.
          Their upcoming album, Teško je imati glavu promises to deliver a bold
          new chapter in their musical journey, combining their signature
          psychedelic elements with fresh ideas and sounds.
        </p>
        <iframe
          src='https://www.youtube.com/embed/60_06fs-sXo?si=JVWD-3SyVYq-fFO1'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <div className={styles.links}>
          <a href='https://www.youtube.com/channel/UCRLRvxomv7cNoqi_Px_EArQ'>
            Youtube
          </a>
          <a href='https://open.spotify.com/artist/2TQiIkMgMLAO0PbSHqvDFS?si=jx9hTNr7SteO1_kKcFJB0A'>
            Spotify
          </a>
          <a href='https://psecaplaza.bandcamp.com/track/nemanja-pse-a-pla-a-udne-stvari '>
            Bandcamp
          </a>
          <a href='https://www.instagram.com/pseca_plaza/?hl=en'>Instagram</a>
          <a href='https://www.facebook.com/PsecaPlaza'>Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to='/artists'>BACK</Link>
        </span>
      </main>
    </div>
  );
}
