import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import AkilliTahta from './Pages/AkilliTahta/AkilliTahta.jsx';
import Home from './Pages/Home/Home.jsx';
import KursYap from './Pages/KursYap/KursYap.jsx';
import Sinif from './Pages/Sinif/Sinif.jsx';
import Kurs from './Pages/Kurslar/Kurs.jsx';

function App() {
  let heroData = [
    { text1: "Kendi Kursunu", text2: "Olustur" },
    { text1: "Akilli Tahta", text2: "Oyunlari" },
    { text1: "Ogretmen", text2: "Araclari" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Menü açıldığında true, kapandığında false yapacak
    console.log("Menü durumu:", !isMenuOpen); // Konsolda kontrol et
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1264) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark-mode": "light-mode"}>
        <Navbar onLoginClick={handleLoginClick} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {showLogin && <LoginSignup onClose={closeLogin} />}
        <Routes>
          <Route path="/" element={<Home />} />                
          <Route path="/akilli-tahta" element={<AkilliTahta />} />
          <Route path='/kurs-yap' element={<KursYap />} /> 
          <Route path='/sinif' element={<Sinif />} />
          <Route path="/search" element={<div>Arama Sayfası</div>} />
          <Route path='/kurslar' element={<Kurs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;