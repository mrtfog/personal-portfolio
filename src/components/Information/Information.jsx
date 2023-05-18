import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Portfolio, AboutMe } from '../../container';
import './Information.scss';

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  const refSlider = useRef(null);
  const tl = gsap.timeline();
  const p = 'wrapper'

  const addAnim = () => {
    const slider = refSlider.current;
    const totalScroll = slider.scrollWidth - slider.offsetWidth;

    tl.add(gsap.to(slider, {
      x: () => -totalScroll,
      ease: "none",
      scrollTrigger: {
        id: p,
        trigger: slider,
        pin: true,
        scrub: 1,
        markers: true,
        start: "top top",
        end: () => "+=" * totalScroll
      }
    }))

  };

  const removeAnim = () => {
    tl.kill(true);
  }

  useEffect(() => {
    addAnim();
    return removeAnim;
  }, []);

  return (
    <div className='wrapper'>
      <div ref={refSlider} id="information__container" className='information__container scrollx'>
        <div id="component">
          <Portfolio />
        </div>

        <div id="component">
          <AboutMe />
        </div>
      </div>
    </div>
  );
};

export default Information;
