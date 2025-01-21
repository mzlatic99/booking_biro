import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
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
      // Cleanup
      document.body.style.overflow = 'auto';
      document.removeEventListener('wheel', preventZoom);
      document.removeEventListener('gesturestart', preventGesture);
      document.removeEventListener('gesturechange', preventGesture);
      document.removeEventListener('gestureend', preventGesture);
      document.removeEventListener('touchmove', preventZoom);
    };
  }, []);

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Something went wrong!</h1>
      <p className={styles.errorMessage}>
        The page you are looking for does not exist.
      </p>
      <Link
        to={`${process.env.PUBLIC_URL}/`}
        className={styles.errorButton}>
        Go Back to Home
      </Link>
    </div>
  );
}
