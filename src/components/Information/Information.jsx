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
    const handleLoad = () => {
      addAnim();
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div className='wrapper'>
        <div ref={refSlider} id='information__container' className='information__container'>
          <div className="information__filter" />

          <Portfolio />
          <Ellipses isRed={true} height={'220px'} width={'350px'} top={'40%'} left={'10%'}/>
          <Ellipses isRed={false} height={'250px'} width={'400px'} top={'89%'} left={'43%'}/>
          <AboutMe />
          <Ellipses isRed={true} height={'250px'} width={'400px'} top={'30%'} left={'60%'}/>
          <Ellipses isRed={false} height={'250px'} width={'400px'} top={'35%'} left={'65%'}/>

          <Ellipses isRed={false} height={'200px'} width={'400px'} top={'45%'} left={'95%'}/>
          <Ellipses isRed={true} height={'200px'} width={'400px'} top={'55%'} left={'90%'}/>
        </div>
      </div>
    </>
  );
};

export default Information;
