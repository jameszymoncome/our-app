import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MonthPage = () => {
  const { monthId } = useParams();
  const [erroredImages, setErroredImages] = useState([]);

  const images = Array.from({ length: 10 }, (_, i) => `/images/month${monthId}/pic${i + 1}.jpg`);
  const fallbackImage = "/images/fallback.jpg";

  const handleImageError = (index) => {
    setErroredImages((prev) => [...prev, index]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌻 Memories from Month {monthId} of Love</h1>
      <div style={styles.gallery}>
        {images.map((src, index) => (
          <img
            key={index}
            src={erroredImages.includes(index) ? fallbackImage : src}
            alt={`Memory ${index + 1}`}
            style={{ ...styles.image, animationDelay: `${index * 0.1}s` }}
            onError={() => handleImageError(index)}
            className="fade-in"
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    background: "linear-gradient(135deg, #fff9e5, #ffe4a1)",
    minHeight: "100vh",
    fontFamily: "'Patrick Hand', cursive",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#d4a018",
    marginBottom: "30px",
    textShadow: "1px 1px #fff",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // exactly 5 columns
    gap: "15px",
    justifyItems: "center", // centers images inside their grid cells
    padding: "5px",
  },
  image: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    animation: "fadeIn 0.6s ease forwards",
    opacity: 0,
  },
};

export default MonthPage;
