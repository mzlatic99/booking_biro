import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArtistsPage.module.css';
import nemanjaImage from '../../assets/images/nemanja/nemanja_bw1.jpg';
import nemanjaMobileImage from '../../assets/images/nemanja/nemanja_mobile_bw1.jpg';
import dunjalukImage from '../../assets/images/dunjaluk/dunjaluk_bw1.jpg';
import dunjalukMobileImage from '../../assets/images/dunjaluk/dunjaluk_mobile_bw1.jpg';
import nemecekImage from '../../assets/images/nemecek/nemecek_bw1.jpg';
import nemecekMobileImage from '../../assets/images/nemecek/nemecek_mobile_bw1.jpg';
import chuiImage from '../../assets/images/chui/chui_bw1.jpg';
import chuiMobileImage from '../../assets/images/chui/chui_mobile_bw1.jpg';
import psecaplazaImage from '../../assets/images/psecaplaza/psecaplaza_bw1.jpg';
import psecaplazaMobileImage from '../../assets/images/psecaplaza/psecaplaza_mobile_bw1.jpg';
import funkshuiImage from '../../assets/images/funkshui/funkshui_bw1.png';
import funkshuiMobileImage from '../../assets/images/funkshui/funkshui_mobile_bw1.png';
import aracatacaImage from '../../assets/images/aracataca/aracataca_bw1.png';
import aracatacaMobileImage from '../../assets/images/aracataca/aracataca_mobile_bw1.png';

export default function ArtistsPage() {
  const navigate = useNavigate();

  const [isMobileView, setIsMobileView] = useState(
    window.matchMedia('(max-width: 600px)').matches
  );

  const artists = useMemo(
    () => [
      {
        id: 'nemanja',
        name: 'NEMANJA',
        image: { large: nemanjaImage, mobile: nemanjaMobileImage },
      },
      {
        id: 'dunjaluk',
        name: 'DUNJALUK',
        image: { large: dunjalukImage, mobile: dunjalukMobileImage },
      },
      {
        id: 'nemecek',
        name: 'NEMEČEK',
        image: { large: nemecekImage, mobile: nemecekMobileImage },
      },
      {
        id: 'chui',
        name: 'CHUI',
        image: { large: chuiImage, mobile: chuiMobileImage },
      },
      {
        id: 'psecaplaza',
        name: 'PSEĆA PLAŽA',
        image: { large: psecaplazaImage, mobile: psecaplazaMobileImage },
      },
      {
        id: 'funkshui',
        name: 'FUNK SHUI',
        image: { large: funkshuiImage, mobile: funkshuiMobileImage },
      },
      {
        id: 'aracataca',
        name: 'ARACATACA',
        image: { large: aracatacaImage, mobile: aracatacaMobileImage },
      },
    ],
    []
  );

  const [selectedArtist, setSelectedArtist] = useState(artists[0]);
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    const handleMediaChange = (e) => setIsMobileView(e.matches);

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (selectedArtist) {
      const img = new Image();
      img.src = isMobileView
        ? selectedArtist.image.mobile
        : selectedArtist.image.large;
      img.onload = () => setBackgroundImageLoaded(true);
    }
  }, [selectedArtist, isMobileView]);

  useEffect(() => {
    const disableScrollAndZoom = () => {
      document.body.style.overflow = 'hidden';

      const preventZoom = (event) => {
        if (event.ctrlKey || event.touches?.length > 1) event.preventDefault();
      };
      const preventGesture = (event) => event.preventDefault();

      document.addEventListener('wheel', preventZoom, { passive: false });
      document.addEventListener('gesturestart', preventGesture, {
        passive: false,
      });
      document.addEventListener('gesturechange', preventGesture, {
        passive: false,
      });
      document.addEventListener('gestureend', preventGesture, {
        passive: false,
      });
      document.addEventListener('touchmove', preventZoom, { passive: false });

      return () => {
        document.body.style.overflow = 'auto';
        document.removeEventListener('wheel', preventZoom);
        document.removeEventListener('gesturestart', preventGesture);
        document.removeEventListener('gesturechange', preventGesture);
        document.removeEventListener('gestureend', preventGesture);
        document.removeEventListener('touchmove', preventZoom);
      };
    };

    const cleanup = disableScrollAndZoom();
    return cleanup;
  }, []);

  const handleArtistClick = (artist) => {
    if (selectedArtist?.id === artist.id) {
      navigate(`/artists/${artist.id}`);
    } else {
      setSelectedArtist(artist);
      setBackgroundImageLoaded(false);
    }
  };

  const handleButtonClick = (artist) => navigate(`/artists/${artist.id}`);

  const getBackgroundImage = () => {
    if (!selectedArtist) return 'placeholder-image.jpg';
    return isMobileView
      ? selectedArtist.image.mobile
      : selectedArtist.image.large;
  };

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url(${
          backgroundImageLoaded ? getBackgroundImage() : 'placeholder-image.jpg'
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100dvh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
      }}>
      <ul className={styles.list}>
        {artists.map((artist) => (
          <li
            key={artist.id}
            onClick={(e) => {
              e.stopPropagation();
              handleArtistClick(artist);
            }}
            className={
              selectedArtist?.id === artist.id
                ? styles.isActive
                : styles.notActive
            }>
            {artist.name}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick(artist);
              }}
              className={
                selectedArtist?.id === artist.id
                  ? styles.artistNavButtonActive
                  : styles.artistNavButtonNotActive
              }></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
