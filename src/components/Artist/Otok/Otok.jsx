import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import otokHeroImage from "../../../assets/images/otok/otok1.jpg";
import styles from "../Artist.module.css";

export default function Otok() {
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
          src={otokHeroImage}
          alt="profile"
          className={styles.artistHeroImage}
        />
        <h1>OTOK</h1>
      </div>
      <main>
        <span className={styles.description}>
          OTOK is a post-garage trio from Zagreb consisting of Vinko Ergotić
          (vocals, guitar — Zimizelen), Marino Vinja (bass — Natali Dizdar,
          Reper iz Sobe, Živa Voda, Demetronomes), and Filip Barac (drums —
          Tidal Pull).
        </span>
        <p>
          At the end of 2025, the band emerges from the garage with their debut
          release, EP1 — a twenty-minute record that captures OTOK’s signature
          sound: dark, mystical, and immediate. Rooted in garage rock but
          infused with elements of psychedelia, goth, and post-rock, the EP is
          conceived as a complete listening experience rather than a singles-
          driven release. The tracklist includes “Eerie Voices,” “TDB,”
          “Everything Is Hope,” and “G&amp;I.”
        </p>
        <iframe
          src="https://www.youtube.com/embed/IT_BspVXY1Q?si=Oy7iF-CD2i1WIh-L"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>
          The title EP1 signals a beginning, with a follow-up EP2 already in the
          works — together forming a two-part conceptual whole. The band’s name,
          OTOK (“island”), evokes themes of isolation, escape, and constant
          searching, further explored through accompanying video miniatures
          directed by Marina Uzelac.
        </p>
        <p>
          EP1 was recorded at Rattus Rattus Studio with producer Borna Maksan,
          and its artwork was designed by Radnja Studio using photography by
          Marina Uzelac.
        </p>
        <div className={styles.links}>
          <a href="https://www.youtube.com/@OTOK-v4g">Youtube</a>
          <a href="https://open.spotify.com/artist/08rpRkuyB1exd1dEb4qTVO?si=XHki9MkTRf2YOuo7YZQ6L">
            Spotify
          </a>
          <a href="https://otok.bandcamp.com/album/ep1">Bandcamp</a>
          <a href="https://www.instagram.com/otok.wav/">Instagram</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
