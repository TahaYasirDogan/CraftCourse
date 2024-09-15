import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchOverlay.css'; // CSS dosyasında tam ekran stil ayarlarını yapacağız

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
    onClose(); // Arama yapıldıktan sonra arama sekmesini kapat
  };

  return (
    <div className="search-overlay">
      <button className="close-button" onClick={onClose}>✕</button>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Ne öğrenmek istiyorsunuz?"
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
      </form>
      {/* Buraya arama önerileri veya popüler arama öğelerini ekleyebilirsiniz */}
    </div>
  );
}