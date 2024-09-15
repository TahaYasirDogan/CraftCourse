import React from 'react';
import './Hamburger.css'; // Hamburger için özel stiller

export default function Hamburger({ toggleMenu }) {
  return (
    <button className="hamburger" onClick={toggleMenu}>
      &#9776; {} 
    </button>
  );
}