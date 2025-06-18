import React, { useState, useEffect } from 'react';
import pic1 from "../images/pic7.jpg";
import pic3 from "../images/uss.jpg";
import picko from "../images/akooo.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const startDate = new Date("2024-06-19T21:00:00"); // Adjust the date and time as needed

    const updateElapsedTime = () => {
      const now = new Date();
      const difference = now - startDate;

      if (difference >= 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setElapsedTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setElapsedTime("The starting time hasn't reached yet!");
      }
    };

    const interval = setInterval(updateElapsedTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🌻 Welcome to Our Sunflower Days</h1>
      <div style={styles.row}>
        <Link to="/memories" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={styles.content}>
            <img src={pic1} alt="Memories" className="image-fadeIn" style={styles.image} />
            <p style={styles.text}>🌻 MEMORIES</p>
          </div>
        </Link>
        <Link to="/favorites" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={styles.content}>
            <img src={pic3} alt="Favorites" className="image-fadeIn" style={styles.image} />
            <p style={styles.text}>🌻 FAVORITES</p>
          </div>
        </Link>
        <Link to="/message" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={styles.content}>
            <img src={picko} alt="Message" className="image-fadeIn" style={styles.image} />
            <p style={styles.text}>🌻 MESSAGE</p>
          </div>
        </Link>
      </div>
      <p style={styles.timer}>⏰ Time Together: {elapsedTime}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
    height: '100vh',
    background: 'linear-gradient(135deg, #fff9e5, #ffe4a1)',
    color: '#5a4e2e',
    fontFamily: "'Patrick Hand', cursive",
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '30px',
    color: '#d4a018',
    textShadow: '1px 1px #fff8dc',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  content: {
    padding: '15px',
    borderRadius: '20px',
    backgroundColor: '#fffce2',
    boxShadow: '0 6px 12px rgba(212, 160, 24, 0.2)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    maxWidth: '160px',
  },
  image: {
    width: '100%',
    borderRadius: '15px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#a67400',
    fontWeight: 'bold',
  },
  timer: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '30px',
    color: '#7a6520',
  },
};

export default Home;
