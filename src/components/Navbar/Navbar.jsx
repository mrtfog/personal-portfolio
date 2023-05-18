import React, { useState } from 'react';
import './Navbar.scss';
import { Menu, Spain, UnitedKingdom, Sun, Moon } from '../../constants/icons';

const Navbar = () => {

  const [language, setLanguage] = useState('spanish');
  const [darkMode, setDarkMode] = useState(true);
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };

  return (
    <nav className='nav'>
        <a href="#" className='nav_logo'>
            <h4>MF</h4>
        </a>

        <div className="nav__menu">
          <div className={`menu-icon ${isCrossed ? 'menu-icon--crossed' : ''}`} onClick={handleClick}>
            <div className="menu-icon__bar"></div>
            <div className="menu-icon__bar"></div>
          </div>
        </div>

        <div className='nav__utilities'>
          {
            darkMode === true ? 
              <Sun onClick={() => setDarkMode(false)} />
            :
              <Moon onClick={() => setDarkMode(true)} />
          }
          {
            language === 'spanish' ?
            <img onClick={() => setLanguage('english')} src={Spain} alt="Spanish" />
            :
            <img onClick={() => setLanguage('spanish')} src={UnitedKingdom} alt="English" />
          }
        </div>
    </nav>
  )
}

export default Navbar