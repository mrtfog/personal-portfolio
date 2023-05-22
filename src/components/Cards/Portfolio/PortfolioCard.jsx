import React from 'react';
import './PortfolioCard.scss';

const PortfolioCard = ({ data }) => {
  return (
    <div className='portfoliocard__container'>
      <div className='portfoliocard__imageContainer'>
        <img src={data.image} alt="" className='portfoliocard__image' height={'300px'} width='100%'/>
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
          <button>More Details</button>
        </div>

      </div>

    </div>
  )
}

export default PortfolioCard