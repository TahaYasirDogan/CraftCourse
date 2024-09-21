import React from 'react'
import './Kurs.css';

export default function Kurs() {
    const oyunlar = [
        { id: 1, title: 'Kurs 1', description: 'Bu bir Kurs açıklamasıdır.' },
        { id: 2, title: 'Kurs 2', description: 'Bu başka bir Kurs açıklamasıdır.' },
        { id: 3, title: 'Kurs 3', description: 'Bu Kurs için farklı bir açıklama.' },
        { id: 4, title: 'Kurs 4', description: 'Bu Kurs için farklı bir açıklama.' },
        { id: 5, title: 'Oyun 5', description: 'Bu Kurs için farklı bir açıklama.' },
        { id: 6, title: 'Kurs 6', description: 'Bu Kurs için farklı bir açıklama.' },
        { id: 7, title: 'Kurs 7', description: 'Bu bir Kurs açıklamasıdır.' },
        { id: 8, title: 'Kurs 8', description: 'Bu başka bir Kurs açıklamasıdır.' },
        { id: 9, title: 'Kurs 9', description: 'Bu Kurs için farklı bir açıklama.' },
        { id: 10, title: 'Kurs 10', description: 'Bu Kurs için farklı bir açıklama.' },
        { id: 11, title: 'Oyun 11', description: 'Bu Kurs için farklı bir açıklama.' },
        { id: 12, title: 'Kurs 12', description: 'Bu Kurs için farklı bir açıklama.' },
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
    