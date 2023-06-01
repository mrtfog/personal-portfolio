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
        start: 'top top',
        end: () => `+=${totalScrollX}`,
      },
    });
  };

  useEffect(() => {
    // addAnim();
  }, []);

  return (
    <>
      <div className='wrapper'>
        <div ref={refSlider} id='information__container' className='information__container'>
          <div className="information__filter" />

          <Portfolio />
          <Ellipses isRed={true} height={'250px'} width={'400px'} top={'20%'} left={'5%'}/>
          <Ellipses isRed={false} height={'250px'} width={'400px'} top={'80%'} left={'37%'}/>
          <AboutMe />
          <Ellipses isRed={true} height={'250px'} width={'400px'} top={'20%'} left={'55%'}/>
          <Ellipses isRed={false} height={'250px'} width={'400px'} top={'15%'} left={'60%'}/>

          <Ellipses isRed={false} height={'250px'} width={'400px'} top={'40%'} left={'90%'}/>
          <Ellipses isRed={true} height={'250px'} width={'400px'} top={'50%'} left={'85%'}/>
        </div>
      </div>
    </>
  );
};

export default Information;
