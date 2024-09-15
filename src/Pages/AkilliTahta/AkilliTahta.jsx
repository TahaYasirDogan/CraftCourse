import React from 'react'
import './AkilliTahta.css';

export default function AkilliTahta() {
    const oyunlar = [
        { id: 1, title: 'Oyun 1', description: 'Bu bir oyun açıklamasıdır.' },
        { id: 2, title: 'Oyun 2', description: 'Bu başka bir oyun açıklamasıdır.' },
        { id: 3, title: 'Oyun 3', description: 'Bu oyun için farklı bir açıklama.' },
        { id: 4, title: 'Oyun 4', description: 'Bu oyun için farklı bir açıklama.' },
        { id: 5, title: 'Oyun 5', description: 'Bu oyun için farklı bir açıklama.' },
        { id: 6, title: 'Oyun 6', description: 'Bu oyun için farklı bir açıklama.' },
      ];
    
      return (
        <div className="akilli-tahta-oyunlari">
          {oyunlar.map((oyun) => (
            <div key={oyun.id} className="oyun-kutusu">
              <h3>{oyun.title}</h3>
              <p>{oyun.description}</p>
            </div>
          ))}
        </div>
      );
    };
    
