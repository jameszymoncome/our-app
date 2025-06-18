import React from 'react';
import { useParams } from 'react-router-dom';

const descriptions = {
  1: "The day you said yes — the happiest day of my life. ",
  2: "Our First Photobooth.",
  3: "My favorite surprise for you.",
  4: "The sleep I've always wanted.",
  5: "The best Christmas Party of my life. ",
  6: "The first time I felt the essence of Valentine's Day. ",
  7: "The day I realized that I can't really afford to lose you. ",
  8: "The most perfect Photobooth date.",
};

const FavoritesDetails = () => {
  const { id } = useParams();
  const imageSrc = `/images/favorites/fav${id}.jpg`;
  const description = descriptions[id] || "This is one of our most cherished memories — a snapshot of joy, laughter, and love. 💛";

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌻 Favorite Moment #{id}</h1>
      <img
        src={imageSrc}
        alt={`Favorite ${id}`}
        style={styles.image}
        onError={(e) => (e.target.src = '/images/fallback.jpg')}
      />
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    background: 'linear-gradient(135deg, #fff9e5, #ffe4a1)',
    minHeight: '100vh',
    fontFamily: "'Patrick Hand', cursive",
    textAlign: 'center',
    color: '#5a4e2e',
  },
  title: {
    fontSize: '2.2rem',
    color: '#d4a018',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '90%',
    maxHeight: '500px',
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#7a6520',
  },
};

export default FavoritesDetails;
