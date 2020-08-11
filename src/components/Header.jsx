import React from 'react';
import '../assets/styles/Header.css'
import logo from '../assets/imagenes/logo-Colombia-video-BW2.png'
import user from '../assets/imagenes/user-icon.png'

const Header = () =>(  
    <header className="header">
    <img className="header__img" src={logo} alt="Colombia Video"/>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={user} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header;