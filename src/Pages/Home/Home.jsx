// Home.jsx
import React from 'react';
import SimpleSlider from './Slider';
import AkilliTahtaOyunlari from './AkilliTahtaOyunlari';

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <AkilliTahtaOyunlari />
      {/* Anasayfaya özgü diğer içerikler */}
    </div>
  );
};

export default Home;