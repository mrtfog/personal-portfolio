import React from 'react';
import { jobs, techSkills } from '../../constants/resources';
import './AboutMe.scss';
import { Link } from 'react-scroll';
import { ArrowDown } from '../../constants/icons';


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

        <div className='aboutme__action_container'>
          <h3>Are you impressed?</h3>
          <Link 
          activeClass="active" 
          to='ContactMe' 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500}
          className='cta_btn'
          >
              Let's Get In Touch <ArrowDown size={24} /> 
          </Link>
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
                    <h4> {job.period + ', ' + job.company}. </h4>
                  </div>

                  <div className="aboutme__jobDescription">
                    <p> {job.job_description} </p>
                  </div>
                  {/* {
                    jobIdx % 2 === 1 ? (
                      <span />
                    ) : ('')

                  } */}
                </>
              )
            })}
          </div>

          <div className='aboutme__skills_container' id='aboutme__info_bento'>
            
            <RenderCards techSkills={techSkills} />
 
          </div>
          
        </div>
      </div>

    </section>
  )

  
}



export default AboutMe