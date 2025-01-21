import React, { useEffect } from 'react';
import styles from './LoadingPage.module.css';
import loadingVideo from '../../assets/videos/Loading-4K.mp4';

export default function LoadingPage({ onLoadingComplete }) {
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
    const handleVideoEnd = () => {
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    };
    const videoElement = document.getElementById('loadingVideo');
    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [onLoadingComplete]);

  return (
    <div className={styles.loadingContainer}>
      <video
        id='loadingVideo'
        className={styles.loadingVideo}
        src={loadingVideo}
        autoPlay
        muted
        playsInline></video>
    </div>
  );
}
