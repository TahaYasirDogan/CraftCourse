import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // İsteğe bağlı stil dosyanız
import { useNavigate } from 'react-router-dom';

// Resim dosyaları
import Crafting from '../../Assets/crafting.png';
import Egitim from '../../Assets/Online-egitim.png';
import Smartboard from '../../Assets/Smartboard.png';

// Alternatif resimler
import CraftingSmall from '../../Assets/crafting-small.png';
import EgitimSmall from '../../Assets/Online-egitim-small.png';
import SmartboardSmall from '../../Assets/Smartboard-small.png';

const SimpleSlider = () => {
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Pencere boyutunu izlemek için useEffect
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Ekran boyutu 480px veya daha küçükse true
    };

    handleResize(); // Başlangıçta bir kez kontrol et
    window.addEventListener('resize', handleResize); // Pencere boyutunu dinle

    return () => {
      window.removeEventListener('resize', handleResize); // Temizleme
    };
  }, []);

  // Koşullu resim seçimi
  const images = isSmallScreen
    ? [SmartboardSmall, CraftingSmall, EgitimSmall] // Küçük ekran resimleri
    : [Smartboard, Crafting, Egitim];              // Büyük ekran resimleri

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={images[0]} alt="Slide 1" />
          <div className="slide-content">
            <h2>Kurs Yap</h2>
            <p>Yazılım bilmeden kendi kursunuzu üretin</p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Kurs Yap</a>
          </div>
        </div>
        <div>
          <img src={images[1]} alt="Slide 2" />
          <div className="slide-content2">
            <h2>Akıllı Tahta Oyunları</h2>
            <p>Her düzeyde akıllı tahta oyunu</p>
            <a onClick={() => navigate('/akilli-tahta')}>Oyunlara Git</a>
          </div>
        </div>
        <div>
          <img src={images[2]} alt="Slide 3" />
          <div className="slide-content3">
            <h2>Sınıflar</h2>
            <p>Sınıf kurun öğrencilerinizi takip edin</p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Sınıflara Git</a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;