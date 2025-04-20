import React, { useState, useEffect } from 'react';
import pic1 from "../images/photo2.jpg";
import pic2 from "../images/photo3.jpg";
import pic3 from "../images/photo4.jpg";
import "./Home.css";
import music from "../music/10cm  Spring Snow (봄눈) [Lovely Runner OST Part 8] [RomEng Lyric].mp3"

const Home = () => {
  const [elapsedTime, setElapsedTime] = useState("");

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

  return (
    <div style={styles.container}>
      <audio autoPlay loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div style={styles.row}>
        <div style={styles.content}>
          <img src={pic1} alt="Event Picture" className="image-fadeIn" />
          <p style={styles.text}>MEMORIES</p>
        </div>
        <div style={styles.content}>
          <img src={pic2} alt="Event Picture" className="image-zoomIn" />
          <p style={styles.text}>STRUGGLES</p>
        </div>
        <div style={styles.content}>
          <img src={pic3} alt="Event Picture" className="image-slideIn" />
          <p style={styles.text}>HISTORY</p>
        </div>
        <div style={styles.content}>
          <img src={pic1} alt="Event Picture" className="image-fadeIn" />
          <p style={styles.text}>FAVORITES</p>
        </div>
      </div>
      <p style={styles.timer}>Time Together: {elapsedTime}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #74ebd5, #ACB6E5)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  content: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  timer: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
  },
};

export default Home;
