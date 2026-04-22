import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import dzipsiiHeroImage from "../../../assets/images/dzipsii/dzipsii1.jpg";
import styles from "../Artist.module.css";

export default function Dzipsii() {
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
          src={dzipsiiHeroImage}
          alt="profile"
          className={`${styles.artistHeroImage} ${styles.dzipsiiHeroImage}`}
        />
        <h1>DZIPSII</h1>
      </div>
      <main>
        <span className={styles.description}>
          Two years after “Zapisi Iz Podzemlja”, DZIPSII returns with JOVAN — a
          bold, emotionally charged project that reframes his artistic identity
          by going back to its origin. Rather than moving forward, JOVAN dives
          inward. It revisits a time before the artist persona, before the
          spotlight — when everything began with instinct, sensation, and raw
          perception. Drawing from early memories of television, movement,
          internet culture, and the formative sounds of hip hop, R&B, and pop,
          the project captures the essence of becoming — before it was fully
          understood, but deeply felt.
        </span>
        <p>
          Created in close collaboration with producer Rap Gorilla, who also
          serves as the project’s composer and arranger, JOVAN expands DZIPSII’s
          sonic and visual language into a fully realized audio-visual universe.
          Together, they shape a refined urban pop body of work that merges
          vulnerability with precision, and emotion with movement.The campaign
          rollout introduced the project through three distinct singles.
          “Proklet” set the tone with a dark, introspective atmosphere, offering
          the first glimpse into JOVAN’s inner world. “Skloni Se” followed,
          strengthening the project’s aesthetic identity and pulling audiences
          deeper into its narrative. The final single, “Impuls”, delivers a
          high-energy, dance-pop moment — signaling a shift toward physicality
          and positioning JOVAN as a project that thrives equally on the
          dancefloor and in emotional resonance.
        </p>
        <iframe
          src="https://www.youtube.com/embed/4QSq598cWQY?si=h1-wSAbSFWx18Nua"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>
          Sonically and visually, JOVAN marks a clear evolution. Where DZIPSII’s
          debut leaned into a more laid-back sensibility, this project is
          direct, rhythmic, and unapologetically dynamic. Lyrically, the project
          is written by DZIPSII and Rap Gorilla, whose production defines its
          precise and contemporary sound. The visual identity is captured by
          photographer Marko Vulević, with styling by Maya Haze, completing the
          project’s distinct aesthetic direction. JOVAN is released under Red
          Pill.JOVAN is not just a return to the beginning — it’s a statement of
          arrival.
        </p>

        <div className={styles.links}>
          <a href="https://www.youtube.com/@redpillprod">Youtube</a>
          <a href="https://open.spotify.com/artist/1FS75D5x9BkljncP9NcewH?si=tkFNIeJ-SB66ZzZD7vx-9Q">
            Spotify
          </a>
          <a href="https://www.instagram.com/dzipsii/">Instagram</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
