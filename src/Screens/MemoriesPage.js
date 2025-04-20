import React from "react";
import { useNavigate } from "react-router-dom";

const MemoriesPage = () => {
  const navigate = useNavigate();

  const handleMonthClick = (month) => {
    navigate(`/month/${month}`);
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌻 Sunflower Memories</h1>
      <p style={styles.subtitle}>Choose a sunny month to explore your memories ☀️</p>
      <div style={styles.grid}>
        {months.map((month) => (
          <button
            key={month}
            style={styles.button}
            onClick={() => handleMonthClick(month)}
          >
            🌻 Month {month}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    background: "linear-gradient(135deg, #fff9e5, #ffe4a1)",
    minHeight: "100vh",
    fontFamily: "'Patrick Hand', cursive",
    color: "#5a4e2e",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
    color: "#d4a018",
    textShadow: "1px 1px #fff",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    color: "#7a6520",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "600px",
  },
  button: {
    padding: "15px 10px",
    fontSize: "1rem",
    borderRadius: "20px",
    border: "2px dashed #d4a018",
    backgroundColor: "#fffce2",
    color: "#a67400",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(212, 160, 24, 0.3)",
    transition: "transform 0.2s ease, background-color 0.3s",
  },
};

export default MemoriesPage;
