// Screens/Favorites.js
import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌻 My Favorite Moments With You</h1>
      <p style={styles.subtitle}>These are the memories we cherish the most 💛</p>
      <div style={styles.grid}>
        {/* Replace these with your real favorite images */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <Link key={num} to={`/favorites/${num}`} style={{ textDecoration: 'none' }}>
            <img
                src={`/images/fallback.jpg`}
                alt={`Favorite ${num}`}
                style={styles.image}
                onError={(e) => (e.target.src = '/images/fallback.jpg')}
            />
           </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    background: 'linear-gradient(135deg, #fff9e5, #ffe4a1)',
    minHeight: '100vh',
    fontFamily: "'Patrick Hand', cursive",
    color: '#5a4e2e',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#d4a018',
    textShadow: '1px 1px #fff',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#7a6520',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
};

export default Favorites;
