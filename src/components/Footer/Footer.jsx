import React from 'react';
import './Footer.css'; // CSS dosyasını bileşene bağlayın

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>İletişim Bilgileri</p>
          <p>Email: info@craftcourse.com</p>
          <p>Telefon: +90 123 456 7890</p>
        </div>
        <div className="footer-right">
          <p>Sosyal Medya: Facebook | Twitter | Instagram</p>
          <p>© 2024 CraftCourse. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;