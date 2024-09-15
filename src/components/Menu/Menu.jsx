import React from 'react';
import './Menu.css'; // Menü için stil dosyası
import { Link, useNavigate } from 'react-router-dom';

export default function Menu({ isMenuOpen, onLoginClick }) {
  const navigate = useNavigate();

  return (
    <ul className={`ham-menu ${isMenuOpen ? 'open' : 'hidden'}`}>
      <li onClick={() => navigate('/')}>Ana Menü</li>
      <li onClick={() => navigate('akilli-tahta')}>Akıllı Tahta Oyunları</li>
      <li>Kurslar</li>
      <li>Kurs Yap</li>
      <li className='nav-Kaydol' onClick={onLoginClick}>Giriş Yap</li>
      <li className='nav-Kaydol' onClick={onLoginClick}>Kaydol</li>
    </ul>
  );
}