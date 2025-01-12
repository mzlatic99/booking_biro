import React, { useEffect } from 'react';
import styles from './LoadingPage.module.css';
import loadingVideo from '../../assets/videos/Loading-4K.mp4';

export default function LoadingPage({ onLoadingComplete }) {
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
