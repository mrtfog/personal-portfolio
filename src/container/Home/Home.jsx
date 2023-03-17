import React, { useState, useEffect } from 'react';
import './Home.scss';

import { Argentina } from '../../constants/icons';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';


const Home = () => {
  const [hour, setHour] = useState('')

  useEffect(() => {
    
    function mostrarHora() {
      const hora = new Date().toLocaleTimeString('es-AR');
      setHour(hora)
    }
    mostrarHora()
    setInterval(mostrarHora, 60000);
    
  }, [])

  console.log(hour)
  
  
  return (
    <div className='home__container'>
      <div className='home__content' >
        <div className='home__title'>
          <h1>MARTÍN FOGLIACCO</h1>
          <div className="home__list">
            <div><div>Full Stack Developer</div></div>
            <div><div>UX / UI Designer</div></div>
            <div><div>Informatic Technician</div></div>
          </div>
        </div>
        <div className="home__information">
          <div className='home__keepScrolling'>
            <UseAnimations animation={arrowDown} size={60} strokeColor='#f5f5f5' />
            <h4>Keep <br/> Scrolling </h4>
          </div>

          <div className="home__timezone">

            <div>
              <h4>My Timezone</h4>
              <span>{hour.slice(0, 5)}</span>
            </div>

            <img src={Argentina} alt="" />
          </div>

        </div>
      </div>

      <div className="home__filter" />

      <div className='home__gradient'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Home