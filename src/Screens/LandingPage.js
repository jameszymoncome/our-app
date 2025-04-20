import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pic1 from "../images/photo1.jpg";


const LandingPage = () => {
  const [elapsedTime, setElapsedTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const startDate = new Date("2024-06-19T21:00:00");

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

  const go_home = () => {
    navigate('/home');
  }

  return (
    <div style={styles.container}>
      <div style={styles.content} onClick={go_home}>
        <img src={pic1} alt="Event" style={styles.image} />
        <p style={styles.text}>🌻 Since June 19, 2024</p>
        <p style={styles.timer}>{elapsedTime}</p>
        <p style={styles.hint}>Tap to continue into our sunflower garden 🌼</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #fff9e5, #ffe4a1)', // soft yellow theme
    color: '#5a4e2e',
    fontFamily: "'Patrick Hand', cursive",
  },
  content: {
    textAlign: 'center',
    padding: '30px',
    borderRadius: '25px',
    backgroundColor: '#fffce2',
    boxShadow: '0 12px 25px rgba(212, 160, 24, 0.4)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '320px',
    height: '320px',
    objectFit: 'cover',
    borderRadius: '20px',
    marginBottom: '20px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
  },
  text: {
    fontSize: '20px',
    color: '#a67400',
    marginBottom: '10px',
  },
  timer: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#d4a018',
    marginBottom: '10px',
  },
  hint: {
    fontSize: '16px',
    color: '#7a6520',
    marginTop: '10px',
    fontStyle: 'italic',
  },
};

export default LandingPage;
