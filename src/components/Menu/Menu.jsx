import React from 'react';
import './Menu.css'; // Menü için stil dosyası
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css'

export default function Menu({ isMenuOpen, onLoginClick, darkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  return (
    <div>
    <ul className={`ham-menu ${isMenuOpen ? 'open' : 'hidden'}`}>
      <li onClick={() => navigate('/')}>Ana Menü</li>
      <li onClick={() => navigate('akilli-tahta')}>Akıllı Tahta Oyunları</li>
      <li>Kurslar</li>
      <li>Kurs Yap</li>
      <li className='nav-Kaydol' onClick={onLoginClick}>Giriş Yap</li>
      <li className='nav-Kaydol' onClick={onLoginClick}>Kaydol</li>
      <li><label className="ui-switcha">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label></li>
    </ul>
    
  </div>
  );
}