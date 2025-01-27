import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import { ReactComponent as SvgLogo } from '../../assets/logo/logo-large.svg';
import heroLarge1 from '../../assets/images/homepage/Home1.jpg';
import heroLarge2 from '../../assets/images/homepage/Home2.jpg';
import heroLarge3 from '../../assets/images/homepage/Home3.jpg';
import heroSmall1 from '../../assets/images/homepage/HomeMobile1.jpg';
import heroSmall2 from '../../assets/images/homepage/HomeMobile2.jpg';
import heroSmall3 from '../../assets/images/homepage/HomeMobile3.jpg';

export default function HomePage() {
  const heroLargeImages = [heroLarge1, heroLarge2, heroLarge3];
  const heroSmallImages = [heroSmall1, heroSmall2, heroSmall3];
  const authors = ['Mirna Pavičić', 'Marina Uzelac', 'Marina Uzelac'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(
    window.matchMedia('(max-width: 600px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    const handleMediaChange = (e) => {
      setIsMobileView(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    // Disable scrolling and zooming
    document.body.style.overflow = 'hidden';

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
      document.body.style.overflow = 'auto';
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('gesturestart', preventGesture);
      document.removeEventListener('gesturechange', preventGesture);
      document.removeEventListener('gestureend', preventGesture);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroLargeImages.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroLargeImages.length]);

  const images = isMobileView ? heroSmallImages : heroLargeImages;

  return (
    <div className={styles.homeMain}>
      <SvgLogo className={styles.logo} />
      <p>
        Booking top-tier bands and artists for events, festivals, and
        performances. With a deep network of emerging talent and established
        acts across various genres, we connect clients with the perfect musical
        match for any occasion.
      </p>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.backgroundImage} ${
            index === currentImageIndex
              ? styles.active
              : index ===
                (currentImageIndex - 1 + images.length) % images.length
              ? styles.previous
              : ''
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}>
          <span className={styles.author}>{authors[index]} ©</span>
        </div>
      ))}
    </div>
  );
}
