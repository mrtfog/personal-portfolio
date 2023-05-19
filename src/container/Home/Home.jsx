import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';

import { Argentina, Laptop } from '../../constants/icons';
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [hour, setHour] = useState('')

  useEffect(() => {
    
    function showHour() {
      const hour = new Date().toLocaleTimeString('es-AR');
      setHour(hour)
    }
    showHour()
    setInterval(showHour, 60000);
    
  }, []);

  const laptopAnimation = () => {
    gsap.to('.home__imgContainer', {
      scale: 0.5,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.home__container',
        scrub: 1,
        start: 'top top',
        end: 'bottom',
        pin: true,
      },
    });
  };

  useEffect(() => {
    laptopAnimation();
  }, []);

  
  return (
    <div className='home__container'>
      <div className='home__content' >
        <div className='home__title'>
          <h1>MARTÍN FOGLIACCO</h1>
          <div className="home__list">
            <div><div>Full Stack Developer</div></div>
            <div><div>UX / UI Designer</div></div>
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

      <div className="home__imgContainer">
        <img src={Laptop} alt="" className='home__screenSection' />
      </div>
    </div>
  )
}

export default Home