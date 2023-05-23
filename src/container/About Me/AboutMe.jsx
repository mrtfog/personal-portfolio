import React from 'react';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <section className='aboutme__container'>
      <div className='aboutme__wrapper'>

        <div className='aboutme__description'>
          <h2>Current role and knowledge</h2>
          <p>Those are my experiencies as developer, technologies, and tools that I usually use 
          <br/> with the UX / UI Design. </p>
        </div>

        <div className='aboutme__cards_container'>
          <div className='aboute__experience_container' id='aboutme__info_container'>

          </div>
          <div className='aboute__skills_container' id='aboutme__info_container'>
            
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default AboutMe