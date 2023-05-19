import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Portfolio, AboutMe } from '../../container';
import { Ellipses } from '../index';
import './Information.scss';

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  const refSlider = useRef(null);

  const addAnim = () => {
    const slider = refSlider.current;
    const totalScrollX = slider.scrollWidth - window.innerWidth;

    gsap.to(slider, {
      x: -totalScrollX,
      ease: 'none',
      scrollTrigger: {
        trigger: slider,
        pin: true,
        scrub: true,
        markers: true,
        start: 'top top',
        end: () => `+=${totalScrollX}`,
      },
    });
  };

  useEffect(() => {
    // addAnim();
  }, []);

  return (
    <div className='wrapper'>
      <div ref={refSlider} id='information__container' className='information__container'>
        <Ellipses isRed={true} height={'250px'} width={'400px'} top={'300px'} left={'200px'}/>
        <Ellipses isRed={false} height={'250px'} width={'400px'} top={'200px'} left={'350px'}/>
        <div className="information__filter" />

        <Portfolio />
        <AboutMe />
      </div>
    </div>
  );
};

export default Information;