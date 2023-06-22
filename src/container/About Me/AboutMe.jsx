import React from 'react';
import { jobs, techSkills } from '../../constants/resources';
import './AboutMe.scss';



const AboutMe = () => {
  
  
  const RenderCards = ({techSkills}) => {  
    return(
      <>

      <div className='aboutme__stack_container'>
        <h3>Front end</h3>
        <div>
          {
            techSkills.front_end.map( (tech, techIdx) => (
              <div className='aboutme__icon' title={tech.title} key={techIdx}>

                <a  href={tech.website} target='_blank'>
                  <img src={tech.icon} alt="" />
                </a>

              </div>
            ))
          }
        </div>
      </div>
      <div className='aboutme__stack_container'>
        <h3>Back end</h3>
        <div>
          {
            techSkills.back_end.map( (tech, techIdx) => (
              <div className='aboutme__icon' title={tech.title} key={techIdx}>

                <a  href={tech.website} target='_blank'>
                  <img src={tech.icon} alt="" />
                </a>

              </div>
            ))
          }
        </div>
      </div>
      <div className='aboutme__stack_container'>
        <h3>Other Tools</h3>
        <div>
          {
            techSkills.other_tools.map( (tech, techIdx) => (
              <div className='aboutme__icon' title={tech.title} key={techIdx}>

                <a  href={tech.website} target='_blank'>
                  <img src={tech.icon} alt="" />
                </a>

              </div>
            ))
          }
        </div>
      </div>
      
      </>
    )
  }

  return (
    <section className='aboutme__container' id='AboutMe'>
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

          <div className='aboutme__skills_container' id='aboutme__info_container'>
            
            <RenderCards techSkills={techSkills} />
 
          </div>
          
        </div>
      </div>

    </section>
  )

  
}



export default AboutMe