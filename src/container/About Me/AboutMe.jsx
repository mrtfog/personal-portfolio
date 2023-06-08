import React from 'react';
import { jobs } from '../../constants/resources';
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
          <div className='aboutme__experience_container' id='aboutme__info_container'>
            { jobs && jobs.map((job, jobIdx) => {

              return(
                <>
                  <div className="aboutme__experienceHeader">
                    <h3> {job.title} </h3>
                    <h5> {job.period + ', ' + job.company}. </h5>
                  </div>

                  <div className="aboutme__jobDescription">
                    <p> {job.job_description} </p>
                  </div>
                  {
                    jobIdx % 2 === 0 ? (
                      <span />
                    ) : ('')

                  }
                </>
              )
            })}
          </div>
          <div className='aboute__skills_container' id='aboutme__info_container'>
            
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default AboutMe