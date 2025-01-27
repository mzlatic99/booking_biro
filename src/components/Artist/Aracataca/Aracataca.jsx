import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aracatacaHeroImage from '../../../assets/images/aracataca/aracataca1.jpg';
import styles from '../Artist.module.css';

export default function Aracataca() {
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
          src={aracatacaHeroImage}
          alt='profile'
          className={styles.artistHeroImage}
        />
        <h1>ARACATACA</h1>
      </div>
      <main>
        <span className={styles.description}>
          Aracataca is an indie rock band from Šibenik, Croatia, founded in
          December 2022. Since their formation, the band has gained recognition
          on the local music scene as an energetic and entertaining group,
          proudly contributing their unique and heartfelt sound to the indie
          rock landscape.
        </span>
        <p>
          In 2024, Aracataca released their debut album, "Na sve strane." The
          album quickly grew on listeners, becoming even more impactful after
          the second and third listen, offering a richer experience compared to
          their earlier single, “Gdje je,” which was released earlier that same
          year. With its powerful instrumental opening and the swift entrance of
          Tara’s distinctively piercing yet soft vocals, “Gdje je” establishes
          itself as a compact rock song that immediately draws the listener in.
          Unlike their evolving sonic palette and genre influences, Aracataca
          demonstrates a well-defined thought process in their lyrics, creating
          a distinctive style that shines through their debut album—a remarkable
          achievement for a young band. Frontwoman Tara Šolić, the primary
          lyricist, shared her perspective on their songwriting approach:
          "Nothing will truly change until our own attitude toward the problem
          changes. I hope I’ve successfully conveyed that in the lyrics, but I
          believe the beauty of music lies in letting the listener decide for
          themselves what our songs mean to them."With two earlier singles,
          "Gdje je" and "Nezrele igre," laying the foundation for their sound,
          "Na sve strane" represents a bold step forward for the band. Drawing
          inspiration from genres as diverse as bossa nova and post-punk,
          Aracataca channels these influences into a sound that is distinctly
          their own.
        </p>
        <iframe
          src='https://www.youtube.com/embed/npImPxkGXYg?si=LKqSR4_gbPmQCwvS'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <p>
          The band’s lineup consists of Tara Šolić (vocals/guitar), Lorenzo Ušić
          (guitar), Ivan Stošić (bass guitar), and Filip Laća (drums). Together,
          they craft music that resonates with audiences, offering authenticity
          and connection while paving the way for a bright future on the
          indie music scene.
        </p>

        <div className={styles.links}>
          <a href='https://www.youtube.com/@aracatacaband'>Youtube</a>
          <a href='https://open.spotify.com/artist/3J35ktMLHRJzm5B6oX7oWZ?si=T-ElAzMPTtuTgNTI-VjtSg'>
            Spotify
          </a>
          <a href='https://www.instagram.com/aracatacaband/'>Instagram</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
