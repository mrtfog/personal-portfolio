import React from 'react';
import './PortfolioCard.scss';

const PortfolioCard = ({ data }) => {
  return (
    <div className='portfoliocard__container'>
      <div className='portfoliocard__imageContainer'>
        <img src={data.image} alt="" className='portfoliocard__image'/>
      </div>

      <div className='portfoliocard__information'>
        
        <div className='portfoliocard__title'>
          <h3>{data.title}</h3>
          <h5>{data.project_type}</h5>
        </div>
        
        <div className='portfoliocard__description'>
          <p>{data.project_description}</p>
        </div>

        <div className='portfoliocard__buttons'>
          {
            data.hasDeployment ? (
              <button>Deployment</button>
              ) : ('')
          }
          <button style={ data.hasDeployment ? { borderLeft: '1px solid rgba(58,59,60,1)'} : {}}
          >More Details</button>
        </div>

      </div>

    </div>
  )
}

export default PortfolioCard