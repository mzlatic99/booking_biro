import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArtistsPage.module.css';
import nemanjaImage from '../../assets/images/nemanja/nemanja1.jpg';
import dunjalukImage from '../../assets/images/dunjaluk/dunjaluk1.jpg';
import dunjalukMobileImage from '../../assets/images/dunjaluk/dunjaluk2.jpg';
import nemecekImage from '../../assets/images/nemecek/nemecek1.jpg';
import chuiImage from '../../assets/images/chui/chui1.jpg';
import psecaplazaImage from '../../assets/images/psecaplaza/psecaplaza1.jpeg';
import funkshuiImage from '../../assets/images/funkshui/funkshui1.jpeg';
import funkshuiMobileImage from '../../assets/images/funkshui/funkshui_mobile1.jpeg';
import aracatacaImage from '../../assets/images/aracataca/aracataca1.jpg';
import aracatacaMobileImage from '../../assets/images/aracataca/aracataca_mobile1.jpg';

export default function ArtistsPage() {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState({
    id: 'nemanja',
    image: nemanjaImage,
  });

  const [isMobileView, setIsMobileView] = useState(
    window.matchMedia('(max-width: 900px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const handleMediaChange = (e) => {
      setIsMobileView(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);

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

  useEffect(() => {
    const img = new Image();
    img.src = selectedArtist.image;
    img.onload = () => setBackgroundImageLoaded(true);
  }, [selectedArtist.image]);

  const artists = [
    {
      id: 'nemanja',
      name: 'NEMANJA',
      image: nemanjaImage,
    },
    {
      id: 'dunjaluk',
      name: 'DUNJALUK',
      image: isMobileView ? dunjalukMobileImage : dunjalukImage,
    },
    {
      id: 'nemecek',
      name: 'NEMEČEK',
      image: nemecekImage,
    },
    {
      id: 'chui',
      name: 'CHUI',
      image: chuiImage,
    },
    {
      id: 'psecaplaza',
      name: 'PSEĆA PLAŽA',
      image: psecaplazaImage,
    },
    {
      id: 'funkshui',
      name: 'FUNK SHUI',
      image: isMobileView ? funkshuiMobileImage : funkshuiImage,
    },
    {
      id: 'aracataca',
      name: 'ARACATACA',
      image: isMobileView ? aracatacaMobileImage : aracatacaImage,
    },
  ];

  const handleArtistClick = (artist) => {
    if (selectedArtist.id === artist.id) {
      navigate(`/artists/${artist.id}`);
    } else {
      setSelectedArtist(artist);
      setBackgroundImageLoaded(false);
    }
  };

  const handleButtonClick = (artist) => {
    navigate(`/artists/${artist.id}`);
  };

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: backgroundImageLoaded
          ? `url(${selectedArtist.image})`
          : `url('placeholder-image.jpg')`,
        backgroundSize: 'cover',
        backgroundColor: '#fff',
        backgroundPosition: 'center',
        backgroundBlendMode: 'luminosity',
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
              artist.image === selectedArtist.image
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
                artist.image === selectedArtist.image
                  ? styles.artistNavButtonActive
                  : styles.artistNavButtonNotActive
              }></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
