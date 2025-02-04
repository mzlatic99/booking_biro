import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './HomePage.module.css';
import { ReactComponent as SvgLogo } from '../../assets/logo/logo-large.svg';
import heroLarge1 from '../../assets/images/homepage/Home1.jpg';
import heroLarge2 from '../../assets/images/homepage/Home2.jpg';
import heroLarge3 from '../../assets/images/homepage/Home3.jpg';
import heroSmall1 from '../../assets/images/homepage/HomeMobile1.jpg';
import heroSmall2 from '../../assets/images/homepage/HomeMobile2.jpg';
import heroSmall3 from '../../assets/images/homepage/HomeMobile3.jpg';
import ArtistsPage from '../ArtistsPage/ArtistsPage';
import InfoPage from './../InfoPage/InfoPage';
import FormPage from './../FormPage/FormPage';
import Navbar from '../Navbar/Navbar';

export default function HomePage() {
  const heroLargeImages = [heroLarge1, heroLarge2, heroLarge3];
  const heroSmallImages = [heroSmall1, heroSmall2, heroSmall3];
  const authors = ['Mirna Pavičić', 'Marina Uzelac', 'Marina Uzelac'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(
    window.matchMedia('(max-width: 600px)').matches
  );
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroLargeImages.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [heroLargeImages.length]);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return;
      setIsScrolling(true);

      const sections = document.querySelectorAll('.snapSection');
      if (event.deltaY > 0 && sectionIndex < sections.length - 1) {
        setSectionIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && sectionIndex > 0) {
        setSectionIndex((prev) => prev - 1);
      }

      setTimeout(() => setIsScrolling(false), 400);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [sectionIndex, isScrolling]);

  useEffect(() => {
    const sections = document.querySelectorAll('.snapSection');
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [sectionIndex]);

  const images = isMobileView ? heroSmallImages : heroLargeImages;
  const location = useLocation();

  useEffect(() => {
    if (location.state?.fromArtistsPage) {
      setSectionIndex(1);
    }
  }, [location]);

  return (
    <div className={styles.homeMain}>
      <Navbar />
      <div
        id='home'
        className={`${styles.homeHero} snapSection`}>
        <SvgLogo className={styles.logo} />
        <p>
          Booking top-tier bands and artists for events, festivals, and
          performances. With a deep network of emerging talent and established
          acts across various genres, we connect clients with the perfect
          musical match for any occasion.
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
      <div
        id='artists'
        className='snapSection'>
        <ArtistsPage />
      </div>
      <div
        id='info'
        className='snapSection'>
        <InfoPage />
      </div>
      <div
        id='form'
        className='snapSection'>
        <FormPage />
      </div>
    </div>
  );
}
