import React from 'react';
import './Welcome.css';
import arrowImage from '../assets/Icon-arrow.png'; 
import bellImage from '../assets/Bell-off.png'; 
import profileImage from '../assets/profile.png'; 

const Welcome = () => {
  return (
    <div className="welcome">
      <h4 className='font'>Dashboard</h4>
      <div className='image-container'>
        <img src={bellImage} alt="Bell" className="welcome-image" />
        <img src={profileImage} alt="Profile" className="welcome-image" width={40} height={40} />
        <img src={arrowImage} alt="Arrow" className="welcome-image" width={20} height={14}/>
      </div>
    </div>
  );
};

export default Welcome;
