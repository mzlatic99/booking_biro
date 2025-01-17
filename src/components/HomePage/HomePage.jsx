import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import { ReactComponent as SvgLogo } from '../../assets/logo/logo-large.svg';
import heroLarge1 from '../../assets/images/homepage/MarinaPavicic-Home1.webp';
import heroLarge2 from '../../assets/images/homepage/MarinaUzelac-Home2.webp';
import heroLarge3 from '../../assets/images/homepage/MarinaUzelac-Home3.webp';

export default function HomePage() {
  const images = [heroLarge1, heroLarge2, heroLarge3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
          <span className={styles.author}>Marina Uzelac ©</span>
        </div>
      ))}
    </div>
  );
}
