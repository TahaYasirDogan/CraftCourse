import React from 'react'
import coming from '../../Assets/coming-soon.png'
import './Sinif.css'

export default function Sinif() {
  return (
    <div className='yakinda'>
        <h2>Çok Yakında...</h2>
        <img className='coming-png' src={coming} alt='coming-soon' />
        <h4>Sınıflar</h4>
    </div>
  )
}
