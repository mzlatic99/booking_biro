import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import seineHeroImage from "../../../assets/images/seine/seine1.jpg";
import styles from "../Artist.module.css";

export default function Seine() {
  useEffect(() => {
    // Disable zooming
    const preventZoom = (event) => {
      if (event.ctrlKey || event.touches?.length > 1) {
        event.preventDefault();
      }
    };

    const preventGesture = (event) => event.preventDefault();

    document.addEventListener("wheel", preventZoom, { passive: false });
    document.addEventListener("gesturestart", preventGesture, {
      passive: false,
    });
    document.addEventListener("gesturechange", preventGesture, {
      passive: false,
    });
    document.addEventListener("gestureend", preventGesture, { passive: false });
    document.addEventListener("touchmove", preventZoom, { passive: false });

    return () => {
      document.removeEventListener("wheel", preventZoom);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
      document.removeEventListener("touchmove", preventZoom);
    };
  }, []);

  return (
    <div className={styles.artistBody}>
      <div className={styles.artistHero}>
        <img
          src={seineHeroImage}
          alt="profile"
          className={styles.artistHeroImage}
        />
        <h1>SEINE</h1>
      </div>
      <main>
        <span className={styles.description}>
          SEINE is a singer-songwriter project by Ivan Ščapec founded in 2008,
          which has grown into one of the most interesting regional bands of
          this generation. Starting out as a guitar indie-punk band, in 2017
          they have released their acclaimed debut album "Sno Sna" for Moonlee
          Records (SI) and VOX project (FR). During this period, the band begun
          their long term collaboration with the Pančevo director Marina Uzelac,
          whose stop-motion video for the single "Šilo" won numerous awards.
          Regional, as well as European promotion of the record followed,
          including a couple of longer European tours spanning over the whole of
          Western and Middle Europe.
        </span>
        <p>
          A year and a half after the debut album which dealt with dreams, the
          group released their sophomore album called "22". This one was too an
          album with a conceptual streak, but this time the central motif
          revolved around money. Produced by the band's drummer Dimitrij
          Petrović, guitars are joined by electronics, while the subject shifts
          from the intimate into the political. Despite its anxiousness and
          opaqueness, the album is well received, while Marina Uzelac once again
          excels with her stop-motion masterpiece "Nebo."
        </p>
        <p>
          Just at the time when they announced a new European tour and received
          a nomination for the "IMPALA" award for the best independent European
          album, the band had to cancel all of the dates due to the pandemic.
          They spent the two locked-down years in the studio, recording their
          third album "Naizust", while performing sporadically. Soon, the band
          is joined by Vatroslav Živković on the bass guitar and electronics
          (litl itali, Nemeček), as the third member of the collective. In
          spring of 2022, SEINE release their first single "Riječ", produced by
          the Belgrade "Fikus Film", starring Belgrade bands Koi-Koi, Turisti
          and Jarboli.
        </p>
        <iframe
          src="https://www.youtube.com/embed/-2j_6BBr7bc?si=usGw-HmFbo8n8xzL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>
          Their third album "Naizust" once again represents a big shift from the
          sound they established up to that point, where guitars are almost
          completely substituted by synths, and drums by beats. The anxiety and
          the scream of the sophomore album give way to whisper, warm melodies
          and trip-hop grooves, while once again there is a central motif of the
          record – language and words. In 2025 SEINE have begun announcing their
          fourth album called “Vreva”, releasing several singles for the
          Croatian label MENART, thus ending their long relationship with the
          Slovenian label Moonlee Records. Their newest album is being mixed by
          the renowned Serbian producer Milan Bjelica, known for his
          collaborations with bands such as Repetitor, Buč Kesidi, Ivica etc.,
          and is scheduled for April 2026.
        </p>

        <div className={styles.links}>
          <a href="https://open.spotify.com/artist/2bPv4G7eJwJwfLyxBBCJJs?si=CsAyMBKFSlGJvjj3J3nZUw">
            Spotify
          </a>
          <a href="https://www.instagram.com/seine_sno/">Instagram</a>
          <a href="https://seine.bandcamp.com/track/plagijat">Bandcamp</a>
          <a href="https://www.facebook.com/Seine23">Facebook</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
