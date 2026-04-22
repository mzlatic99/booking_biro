import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import lovskiHeroImage from "../../../assets/images/lovski/lovski1.jpg";
import styles from "../Artist.module.css";

export default function Lovski() {
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
          src={lovskiHeroImage}
          alt="profile"
          className={styles.artistHeroImage}
        />
        <h1>LOVSKI</h1>
      </div>
      <main>
        <span className={styles.description}>
          Lovski, alias Igor Sekulović, is redefining the Balkan musical
          landscape. A master guitarist and erstwhile "Projekt Rakjia" band
          member, he forges an uncanny blend of traditional folk melodies with
          dance, electronic and rock energy.
        </span>
        <p>
          His debut solo album, Diskoteka Yugoslavia—produced in collaboration
          with Napoli's producer Raffaele "Whodamanny" Arcella—ventures through
          Italo-disco pulses, reggae grooves and psychedelic swirls, all
          anchored by the call-and-response warmth of Balkan traditional
          instruments. Each track feels like a borderless road trip: hypnotic
          rhythm sections give way to soaring guitar solos that nod to ancestral
          folk tunes, while propulsive synth arpeggios push listeners into
          tomorrow’s club.
        </p>
        <iframe
          src="https://www.youtube.com/embed/dVxGR8zKDd4?si=QCkasryrKLU3OJn-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p>
          Lovski’s signature lies in his seamless genre alchemy. He honors
          regional roots without succumbing to nostalgia, instead reframing folk
          elements as raw material for global dancefloors. As a performer, his
          live shows pulse with communal ecstasy— drawing dancing crowds around
          campfires of light, smoke and bass.
        </p>

        <p>
          In a scene ripe for innovation, Lovski stands out as both torchbearer
          and trailblazer—proof that the Balkans still have surprises to offer,
          and that the old and new can coexist in brilliant harmony.
        </p>

        <div className={styles.links}>
          <a href="https://www.youtube.com/channel/UCnyrcghuCCxUMuMnJTiHIlQ">
            Youtube
          </a>
          <a href="https://open.spotify.com/artist/63U6dCPAjZ04nAaJSKLGmG">
            Spotify
          </a>
          <a href="https://www.instagram.com/lovski_music/">Instagram</a>
          <a href="https://idemorecords.bandcamp.com/">Bandcamp</a>
        </div>
        <span className={styles.backButton}>
          <Link to={`${process.env.PUBLIC_URL}/artists`}>BACK</Link>
        </span>
      </main>
    </div>
  );
}
