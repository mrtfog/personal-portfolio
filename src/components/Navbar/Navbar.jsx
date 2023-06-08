import React, { useState } from 'react';

import { PersonalLogo, Spain, UnitedKingdom, ArrowDown } from '../../constants/icons';
import './Navbar.scss';

const Navbar = () => {

  const [language, setLanguage] = useState('spanish');

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
            language === 'spanish' ?(
              <div className='nav__language' onClick={() => setLanguage('english')}>
                <img src={Spain} alt="Spanish" />
                <ArrowDown />
              </div>
            )
            :(
              <div className='nav__language' onClick={() => setLanguage('spanish')}>
                <img src={UnitedKingdom} alt="English" />
                <ArrowDown />
              </div>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar