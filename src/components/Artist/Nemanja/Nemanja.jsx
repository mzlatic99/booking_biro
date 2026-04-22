import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import nemanjaHeroImage from "../../../assets/images/nemanja/nemanja1_16x9.png";
import styles from "../Artist.module.css";

export default function Nemanja() {
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
          src={nemanjaHeroImage}
          alt="profile"
          className={`${styles.artistHeroImage} ${styles.nemanjaHeroImage}`}
        />
        <h1>NEMANJA</h1>
      </div>
      <main>
        <span className={styles.description}>
          nemanja is an Adriatic psych-groove band formed by musicians from Pula
          and Zagreb, Croatia. Rooted in global groove traditions, the project
          merges psychedelic funk, tropical rhythms, cosmic disco and
          dancefloor-driven textures into a distinctive Mediterranean sound
          shaped by bandleader Luka Šipetić.
        </span>
        <p>
          Over the course of three acclaimed albums — Tarot Funk (2019), Cosmic
          Disco (2020) and Voodoo Beat (2023) — nemanja developed a singular
          musical universe that established the band as one of the most
          distinctive groove-oriented acts to emerge from the Balkans in recent
          years. Together, the records form the “Esoteric Trilogy”: a conceptual
          arc drawing from tarot, Buddhism, ancient mythologies and ritual
          storytelling, filtered through 70s Anatolian rock, Afro-Asian disco,
          Caribbean dub, tropical psychedelia and cinematic world-building.
          Since launching in 2019, nemanja has built a strong live reputation
          across the region, performing extensively throughout the Balkans and
          appearing at key international and showcase events including Eurosonic
          Noorderslag (ESNS), MENT Ljubljana and SHIP Festival. Despite emerging
          during the pandemic era, the band maintained steady momentum and
          became a recurring presence on year-end best-of lists and critics’
          polls across Croatia, Serbia, Bosnia and Herzegovina, Slovenia, and
          beyond.
        </p>
        <iframe
          src="https://www.youtube.com/embed/hlG3-dt0nNo?si=sLYPm0TZly5GrG3d"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>
          In April 2026, nemanja opens a new chapter with the double single Asja
          / Kada te nima tu, the first glimpse of a forthcoming album due in
          late 2026. The new material marks a clear shift in sonic direction:
          from the esoteric, tropical psych of the trilogy toward a more
          song-driven, Mediterranean dance sensibility that folds Balearic pop,
          Adriatic soft rock, Anatolian pulse, samba-inflected groove and
          leftfield funk into the band’s evolving language. It is both a
          continuation and a reinvention — a more intimate, melodic and
          expansive phase aimed equally at the stage, the dancefloor and
          international audiences.
        </p>

        <p>
          The live lineup features Luka Šipetić (guitar, vocals), Laura
          Matijašević (bass), Laura Tandarić (percussion, vocals), Elizabeta
          Marijanović (synths, backing vocals), and Đuro Dobranić (drums).
        </p>

        <div className={styles.links}>
          <a href="https://www.youtube.com/@nemanjaband">Youtube</a>
          <a href="https://open.spotify.com/artist/4kLvPkhSzcYKQYsb1StfeB">
            Spotify
          </a>
          <a href="https://nemanja.bandcamp.com/">Bandcamp</a>
          <a href="https://www.instagram.com/nemanjabend/">Instagram</a>
          <a href="https://www.facebook.com/nemanja.hr/?locale=hr_HR">
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
