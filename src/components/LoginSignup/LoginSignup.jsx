import React, { useState } from "react";
import './LoginSignup.css';

import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

const LoginSignup = ({ onClose }) => { // onClose prop eklendi
  const [action, setAction] = useState("Giris Yap");

  return (
    <div className='login-signup-overlay'> {/* Overlay div eklendi */}
      <div className='container'>
        <button className="close-button" onClick={onClose}>X</button> {/* Kapama butonu */}
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Giris Yap" ? <div></div> : (
            <div className="input">
              <img src={user_icon} alt=""/>
              <input type="text" placeholder="Isim" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt=""/>
            <input type="email" placeholder="ornek@mail.com"/>
          </div>
          <div className="input">
            <img src={password_icon} alt=""/>
            <input type="password" placeholder="Sifre"/>
          </div>
        </div>
        {action === "Giris Yap" ? (
          <div className="forgot-password"><span>Sifremi unuttum</span></div>
        ) : (
          <div></div>
        )}
        <div className="submit-container">
          <div className={action === "Kayit Ol" ? "submit" : "submit gray"} onClick={() => { setAction("Kayit Ol") }}>Kayit Ol</div>
          <div className={action === "Giris Yap" ? "submit" : "submit gray"} onClick={() => { setAction("Giris Yap") }}>Giris Yap</div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;