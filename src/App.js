import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Screens/LandingPage';
import Home from './Screens/Home';
import MemoriesPage from './Screens/MemoriesPage';
import MonthPage from './Screens/MonthPage';
import music from "./music/10cm  Spring Snow (봄눈) [Lovely Runner OST Part 8] [RomEng Lyric].mp3";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const tryPlayAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => console.warn("Autoplay failed:", err.message));
      }
    };

    tryPlayAudio(); // attempt right away

    // Optional fallback: play on first user click if autoplay failed
    window.addEventListener("click", tryPlayAudio);

    return () => window.removeEventListener("click", tryPlayAudio);
  }, []);

  return (
    <>
      <audio ref={audioRef} autoPlay loop>
        <source src={music} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/month/:monthId" element={<MonthPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
