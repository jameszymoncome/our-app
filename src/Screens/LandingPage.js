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

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const go_home = () => {
    navigate('/home');
  }

  return (
    <div style={styles.container}>
      <div style={styles.content} onClick={go_home}>
        <img src={pic1} alt="Event Picture" style={styles.image}/>
        <p style={styles.text}>Since June 19, 2024</p>
        <p style={styles.timer}>{elapsedTime}</p>
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
    background: 'linear-gradient(135deg, #74ebd5, #ACB6E5)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  timer: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default LandingPage;
