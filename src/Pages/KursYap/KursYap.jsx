import React from 'react'
import coming from '../../Assets/coming-soon.png'
import './KursYap.css'

export default function KursYap() {
  return (
    <div className='yakinda'>
        <h2>Çok Yakında...</h2>
        <img className='coming-png' src={coming} alt='coming-soon' />
        <h4>Kurs Yapma Atölyesi</h4>
    </div>
  )
}
