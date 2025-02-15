import React, { useEffect, useState } from 'react';
import styles from './InfoPage.module.css';
import infoImage from '../../assets/images/infopage/info_fliped.jpg';
import infoImageMobile from '../../assets/images/infopage/info_mobile.jpg';

export default function InfoPage() {
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

  return (
    <div
      className={styles.infoMain}
      style={{
        backgroundImage: `url(${isMobileView ? infoImageMobile : infoImage})`,
        backgroundSize: 'cover',
        backgroundColor: '#fff',
        backgroundPosition: 'center',
      }}>
      <div></div>
      <div className={styles.textContainer}>
        <div className={styles.lauraInfo}>
          <span className={styles.infoBoldText}>Laura Matijašević</span>
          <p>Booking Agent</p>
          <p>laura@44bookingbiro.com</p>
        </div>
        <div className={styles.linaInfo}>
          <span className={styles.infoBoldText}>Lina Crgol</span>
          <p>PR Agent</p>
          <p>lina@44bookingbiro.com</p>
        </div>
        <div className={styles.address}>
          <p>Zagreb, Croatia</p>
        </div>
      </div>
      <span className={styles.author}>Mirna Pavičić ©</span>
    </div>
  );
}
