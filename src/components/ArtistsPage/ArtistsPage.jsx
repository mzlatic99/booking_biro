import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArtistsPage.module.css';
import nemanjaImage from '../../assets/images/nemanja/nemanja1.JPG';
import dunjalukImage from '../../assets/images/dunjaluk/dunjaluk1.jpg';
import dunjalukMobileImage from '../../assets/images/dunjaluk/dunjaluk2.jpg';

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
      id: 2,
      name: 'ARTIST 3',
      image: 'url-to-artist3-image.jpg',
    },
    {
      id: 3,
      name: 'ARTIST 4',
      image: 'url-to-artist4-image.jpg',
    },
    {
      id: 4,
      name: 'ARTIST 5',
      image: 'url-to-artist5-image.jpg',
    },
    {
      id: 5,
      name: 'ARTIST 6',
      image: 'url-to-artist6-image.jpg',
    },
    {
      id: 6,
      name: 'ARTIST 7',
      image: 'url-to-artist7-image.jpg',
    },
  ];

  const handleArtistClick = (artist) => {
    if (selectedArtist.id === artist.id) {
      navigate(`/artists/${artist.id}`);
    } else {
      setSelectedArtist(artist);
    }
  };

  const handleButtonClick = (artist) => {
    navigate(`/artists/${artist.id}`);
  };

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: selectedArtist.image
          ? `url(${selectedArtist.image})`
          : `none`,
        backgroundSize: 'cover',
        backgroundColor: '#fff',
        backgroundPosition: 'center',
        backgroundBlendMode: 'luminosity',
        transition: 'background-image 0.5s ease-in-out',
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
