import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import { ReactComponent as SvgLogo } from '../../assets/logo/logo-large.svg';
import heroLarge1 from '../../assets/images/homepage/Home1.jpg';
import heroLarge2 from '../../assets/images/homepage/Home2.jpg';
import heroLarge3 from '../../assets/images/homepage/Home3.jpg';

export default function HomePage() {
  const images = [heroLarge1, heroLarge2, heroLarge3];
  const authors = ['Mirna Pavičić', 'Marina Uzelac', 'Marina Uzelac'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

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
      // Cleanup: Remove event listeners and reset styles
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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length, authors.length]);

  return (
    <div className={styles.homeMain}>
      <SvgLogo className={styles.logo} />
      <p>
        Booking top-tier bands and artists for events, festivals, and private
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
