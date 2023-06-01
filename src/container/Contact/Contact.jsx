import React from 'react';

import { Ellipses } from '../../components';
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <section className='contact__container'>
        <div className='contact__filter'/>
        <div className='contact__content'>
          <div className='contact__title'>
            <h2>Reach me out</h2>
          </div>

          <div className='contact__description'>
            <p>Would you like more information or do you have a question? 
            <br /> Let me show you how further we can go.
            <br /> Feel free to send me an <a href='mailto:fogliaccomartin3@gmail.com'>email</a> or <a href='https://www.linkedin.com/in/martin-fogliacco/?locale=en_US' target={'_blank'}>reach me out</a>.</p>
          </div>
        </div>


        <div className='contact_ellipses'>
          <Ellipses isRed={false} height={'400px'} width={'400px'} top={'50%'} left={'40%'}/>
          <Ellipses isRed={true} height={'400px'} width={'400px'} top={'50%'} left={'60%'}/>
        </div>
      </section>

    </>
  );
};

export default Contact