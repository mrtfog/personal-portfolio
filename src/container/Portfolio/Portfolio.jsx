import React, {Fragment} from 'react';

import { PortfolioCard } from '../../components/index';
import { projects } from '../../constants/resources';
import './Portfolio.scss';

const Portfolio = () => {

  return (
    <section className='portfolio__container'>

      <div className='portfolio__wrapper'>

        <div className='portfolio__description'>
          <h2>Project highlights</h2>
          <p>Throughout my career as developer,  I've worked on a number of interesting projects.  
          <br />  Below is a small selection of those that have made significant impact on me. 
          <br />  You can contact me for more detailed projects.</p>
        </div>

        <div className='portfolio__cards_container'>
          {
            projects.length ? (
              projects.map(( project, projectIdx) => {
                return (
                  <Fragment key={projectIdx}>
                    <PortfolioCard data={project} />
                  </Fragment>
                )
              })
            ) : (
              ''
            )
          }
          
        </div>
      </div>
    </section>
  )
}

export default Portfolio