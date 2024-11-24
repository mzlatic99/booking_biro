import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArtistsPage.module.css';
import test1 from '../../assets/images/test1.png';

export default function ArtistsPage() {
  const navigate = useNavigate();
  const [selectedArtist, setSelectedArtist] = useState({
    id: 0,
    image: test1,
  });

  const [lastClickedArtist, setLastClickedArtist] = useState(null);

  const artists = [
    {
      id: 0,
      name: 'ARTIST 1',
      image: test1,
    },
    {
      id: 1,
      name: 'ARTIST 2',
      image: 'url-to-artist2-image.jpg',
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
    if (lastClickedArtist?.id === artist.id) {
      navigate(`/artists/${artist.id}`);
    } else {
      setSelectedArtist(artist);
      setLastClickedArtist(artist);
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
        backgroundPosition: 'center',
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
                e.stopPropagation(); // Prevent artist click
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
