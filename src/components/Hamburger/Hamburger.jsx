import React from 'react';
import './Hamburger.css'; // Hamburger için özel stiller

export default function Hamburger({ toggleMenu, darkMode, toggleDarkMode }) {
  return (
    <button className="hamburger" onClick={toggleMenu} checked={darkMode} onChange={toggleDarkMode}>
      &#9776; {} 
    </button>
  );
}