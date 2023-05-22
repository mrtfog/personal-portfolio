import React, { useState } from 'react';

import { PersonalLogo, Spain, UnitedKingdom } from '../../constants/icons';
import { ScrollLink } from '../index';
import './Navbar.scss';

const Navbar = () => {

  const [language, setLanguage] = useState('spanish');
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };

  return (
    <nav className='nav'>
        <ScrollLink to="#">
          <img src={ PersonalLogo } alt="" className='nav_logo'/>
        </ScrollLink>

        <div className="nav__menu">
          <div className={`menu-icon ${isCrossed ? 'menu-icon--crossed' : ''}`} onClick={handleClick}>
            <div className="menu-icon__bar"></div>
            <div className="menu-icon__bar"></div>
          </div>
        </div>

        <div className='nav__utilities'>
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