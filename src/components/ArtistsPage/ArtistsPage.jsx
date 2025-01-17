import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArtistsPage.module.css';
import nemanjaImage from '../../assets/images/nemanja/nemanja1.JPG';
import dunjalukImage from '../../assets/images/dunjaluk/dunjaluk1.jpg';
import dunjalukMobileImage from '../../assets/images/dunjaluk/dunjaluk2.jpg';
import nemecekImage from '../../assets/images/nemecek/nemecek1.jpg';

export default function ArtistsPage() {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState({
    id: 'nemanja',
    image: nemanjaImage,
  });

  const [isMobileView, setIsMobileView] = useState(
    window.matchMedia('(max-width: 900px)').matches
  );
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false);

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
      id: 'artist4',
      name: 'ARTIST 4',
      image: 4,
    },
    {
      id: 'artist5',
      name: 'ARTIST 5',
      image: 5,
    },
    {
      id: 'artist6',
      name: 'ARTIST 6',
      image: 6,
    },
    {
      id: 'artist7',
      name: 'ARTIST7',
      image: 7,
    },
  ];

  const handleArtistClick = (artist) => {
    if (selectedArtist.id === artist.id) {
      navigate(`/artists/${artist.id}`);
    } else {
      setSelectedArtist(artist);
      setBackgroundImageLoaded(false); // Reset loading state for new image
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
        height: '100vh',
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
              }>
              {'>'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
