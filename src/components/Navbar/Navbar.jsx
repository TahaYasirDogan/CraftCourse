import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import searchIcon from '../../Assets/search.png';
import Hamburger from '../Hamburger/Hamburger';
import Menu from '../Menu/Menu';
import SearchOverlay from '../SearchOverlay/SearchOverlay.jsx'; // Yeni arama sekmesi componenti
import { Link } from 'react-router-dom';

export default function Navbar({ onLoginClick, toggleMenu, isMenuOpen }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false); // Arama sekmesini göstermek için state
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearchOverlay(true); // Arama sekmesini aç
  };

  const closeSearchOverlay = () => {
    setShowSearchOverlay(false); // Arama sekmesini kapat
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isShrunk ? 'shrink' : ''}`}>
      <Hamburger toggleMenu={toggleMenu} />
      <div onClick={() => navigate('/')} className='nav-logo-container'>
        <img className='logo-craft' src={logo} alt='Logo' />
        <div className="nav-logo">raftCourse</div>
      </div>
      <form onSubmit={handleSearchClick} className="nav-search">
        <input
          type="text"
          placeholder="Ara..."
          className="search-input"
        />
        <button type="submit" className="search-button">Ara</button> 
        </form>

      {/* Arama sekmesi componenti */}
      {showSearchOverlay && <SearchOverlay onClose={closeSearchOverlay} />}

      <button className="search-icon" onClick={handleSearchClick}>
        <img src={searchIcon} alt="Search" className="search-icon-image" />
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => navigate('akilli-tahta')}>Akıllı Tahta Oyunları</li>
        <li>Kurslar</li>
        <li>Kurs Yap</li>
        <li>Sınıf</li>
        <li className='nav-oturum' onClick={onLoginClick}>Giriş yap</li>
        <li className='nav-contact' onClick={onLoginClick}>Kaydol</li>
      </ul>
      <Menu onLoginClick={onLoginClick} isMenuOpen={isMenuOpen}/>
    </div>
  );
}