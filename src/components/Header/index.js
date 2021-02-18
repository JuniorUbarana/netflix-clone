import React from 'react';
import Logo from '../../assets/lalaflix1.png';
//import UserImg from '../../assets/hBEe3tdn_400x400.png';


import './style.css';

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="https://github.com/JuniorUbarana/netflix-clone">
          <img src={Logo} alt="Logo"/>
        </a>
      </div>
      <div className="header--user">
        <a href="https://github.com/JuniorUbarana">
          <img src="https://avatars.githubusercontent.com/u/32462908?s=60&v=4" alt="Foto"/>
        </a>
      </div>
    </header>
  )
}