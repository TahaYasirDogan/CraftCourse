import React from 'react';
import './Menu.css'; // Menu için stil dosyası
import { useNavigate } from 'react-router-dom';

export default function HamburgerMenu({ isMenuOpen, toggleMenu, onLoginClick, darkMode, toggleDarkMode }) {
  const navigate = useNavigate();


  console.log(darkMode); 
  console.log(toggleDarkMode);


  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; 
      </button>

      
      <ul className={`ham-menu ${isMenuOpen ? 'open' : 'hidden'}`}>
        <li onClick={() => navigate('/')}>Ana Menü</li>
        <li onClick={() => navigate('akilli-tahta')}>Akıllı Tahta Oyunları</li>
        <li onClick={() => navigate('kurslar')}>Kurslar</li>
        <li onClick={() => navigate('kurs-yap')}>Kurs Yap</li>
        <li onClick={() => navigate('sinif')}>Sinif</li>
        <li className='nav-Kaydol' onClick={onLoginClick}>Giriş Yap</li>
        <li className='nav-Kaydol' onClick={onLoginClick}>Kaydol</li>

        {/* Dark mode butonu */}
        <li>
          <label className="ui-switcha">
            <input 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
}