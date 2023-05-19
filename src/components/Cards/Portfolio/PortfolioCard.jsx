import React from 'react'

const PortfolioCard = ({ data }) => {
  return (
    <div className='portfoliocard__container'>
      <div className='image__container' style={{margin: '0 10px 0 10px', borderRadius: '10px', overflow: 'hidden'}}>
        <img src={data.image} alt="" height={'300px'} width='100%'/>
      </div>
    </div>
  )
}

export default PortfolioCard