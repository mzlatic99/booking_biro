import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import funkshuiHeroImage from '../../../assets/images/funkshui/funkshui1.jpg';
import styles from '../Artist.module.css';

export default function Funkshui() {
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
          src={funkshuiHeroImage}
          alt='profile'
          className={styles.artistHeroImage}
        />
        <h1>FUNK SHUI</h1>
      </div>
      <main>
        <span className={styles.description}>
          FUNK SHUI is an eclectic collective based in North Macedonia, driven
          by an insatiable curiosity to explore new avenues of musical
          expression. Since their debut album “Aether” in 2012, followed by
          “R.E.M.” in 2015 and the EP “Impuls” in 2018, FUNK SHUI has been
          steadily evolving, refining their vision and sound. The band’s output
          defies easy categorization, but is best understood as an immersive
          experience that encompasses a range of emotions, styles, and
          influences.
        </span>
        <p>
          With each release, FUNK SHUI has pushed the boundaries of the modern
          music scene, blazing a unique trail in redefining what it means to be
          a truly talented and expressive band in the region. Their exceptional
          work has not gone unnoticed, and the band has been invited to perform
          at some of the most prestigious music festivals across Europe,
          including Eurosonic ESNS, Mondo.NYC, MENT Ljubljana, Athens Music
          Week, PIN Music conference, and Liverpool Sound City. FUNK SHUI’s
          achievements are numerous, but perhaps none are as noteworthy as the
          success of their single “METEORI,” which was voted “Single of the Year
          2020” by the regional audience of the music portal “Balkanrock.” The
          band’s recent releases, “VETER”, “NE VREME” and “MAGLA” accompanied by
          mind-blowing videos, are just a glimpse from their new album “Nikogash
          Pak” released on 31 March 2023. FUNK SHUI is a HEMI Music Awards 2021
          and 2023 nominee and INES Talents for 2021 and 2022, cementing their
          status as one of the most exciting emerging acts in Europe.
        </p>
        <iframe
          src='https://www.youtube.com/embed/8-meOyaylyQ?si=AHpVuiW3QDTvcsKj'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <p>
          As FUNK SHUI looks ahead to 2024, the band is focused on touring and
          delivering unforgettable live performances. They have already toured
          extensively throughout the UK, Poland, Austria, Germany, the
          Netherlands, and did a couple of tours in the Balkans. They just
          released their third long awaited album “Nikogash Pak”, containing all
          the well known previous singles: “Meteori”, “Veter”, “Ne Vreme”,
          “Krik” etc… The fervor surrounding the highly-anticipated unveiling of
          their third album culminated in two successive sell-out performances
          in Skopje, a testament to the band’s growing prominence and cultural
          resonance. With their unwavering commitment to musical excellence and
          innovation, FUNK SHUI is a band to watch in the coming years.
        </p>

        <div className={styles.links}>
          <a href='https://www.youtube.com/channel/UC6TQjWbVsf4p90YxJBP6zhA'>
            Youtube
          </a>
          <a href='https://open.spotify.com/artist/728GwHEF4RySqLnbRgxzww?si=JyxPCbySQBSwNGhOzlPxCw'>
            Spotify
          </a>
          <a href='https://funkshuimk.bandcamp.com/album/-'>Bandcamp</a>
          <a href='https://www.instagram.com/funkshui_'>Instagram</a>
          <a href='https://www.facebook.com/shuithefunk'>Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
