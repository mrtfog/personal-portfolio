import React, { useState } from 'react';

import { PersonalLogo, Spain, UnitedKingdom } from '../../constants/icons';
import './Navbar.scss';

const Navbar = () => {

  const [language, setLanguage] = useState('spanish');
  const [isCrossed, setIsCrossed] = useState(false);

  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };

  return (
    <nav className='nav'>
        <a href='#home'>
          <img src={ PersonalLogo } alt="" className='nav_logo'/>
        </a>

        <div className="nav__menu">
          <div className="menu-icon">
            <input className="menu-icon__cheeckbox" type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
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