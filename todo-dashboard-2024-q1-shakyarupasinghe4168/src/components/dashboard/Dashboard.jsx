import React from 'react';
import './Dashboard.css';
import DashboardImage from '../assets/Icon.png'; 

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top-row">
      <h3 className='fonts-header'>Acmy Solutions</h3>
      </div>
      <div className="bottom-row">
        <button className="dashboard-button">
        <img src={DashboardImage} alt="Dashboard Illustration" className="dashboard-image" />
     
        Dashboard</button>
      </div>
    </div>
  );
};

export default Dashboard;
