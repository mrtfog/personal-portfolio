import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { PersonalLogo, Spain, UnitedKingdom, ArrowDown } from '../../constants/icons';
import './Navbar.scss';

const Navbar = () => {

  const [language, setLanguage] = useState('spanish');
  const [checked, setChecked] = useState(false);

  const handleMenu = ( event ) => {
    setChecked(event.target.checked);
  }

  return (
    <nav className='nav'>
        <a href='#home'>
          <img src={ PersonalLogo } alt="" className='nav_logo'/>
        </a>

        <div className="nav__menu">
          <div className="menu-icon">
            <input className="menu-icon__cheeckbox" type="checkbox" onChange={(e) => handleMenu(e)} />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>

          <nav className={`nav__list ${ checked ? 'visible' : 'invisible' }`}>
            <ul>
              <li> <Link activeClass="active" to='Home' spy={true} smooth={true} offset={0} duration={500}><span>Home</span></Link> </li>
              <li> <Link activeClass="active" to='Portfolio' spy={true} smooth={true} offset={0} duration={500}><span>Portfolio</span></Link> </li>
              <li> <Link activeClass="active" to='AboutMe' spy={true} smooth={true} offset={0} duration={500}><span>About Me</span></Link> </li>
              <li> <Link activeClass="active" to='ContactMe' spy={true} smooth={true} offset={0} duration={500}><span>Contact Me</span></Link> </li>
            </ul>
          </nav>
        </div>

        <div className='nav__utilities'>
          {
            language === 'spanish' ?(
              <div className='nav__language' onClick={() => setLanguage('english')}>
                <img src={Spain} alt="Spanish" />
                <ArrowDown />
              </div>
            ) :(
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