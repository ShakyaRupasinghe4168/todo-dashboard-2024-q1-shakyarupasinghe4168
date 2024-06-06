import React from 'react';
import './Tagline.css';
import designImage from '../assets/Design.png'; 
import closeImage from '../assets/Close.png'; 

const tagline = () => {
  return (
    <div className="tagline"><div className="welcome-content">
    <div>
      <h3 className='font-header'>Welcome back, John Doe</h3>
    </div>
    <div>
      <p className='font-body'>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy. </p>
    </div>
    <div>
      <p className='font-body-link'>  Look here for more information</p>
    </div>
  </div>
  
      <div className='image-container'>
        <img src={designImage} alt="Bell" className="tagline-image" />
        
         </div>
         
        <img src={closeImage} alt="close" className="tagline-image2" />
    </div>
  );
};

export default tagline;
