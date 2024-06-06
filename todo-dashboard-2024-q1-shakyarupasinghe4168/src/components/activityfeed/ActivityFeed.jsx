import React from 'react';
import './ActivityFeed.css';
import image1 from '../assets/Pr1.png'; 
import image2 from '../assets/Pr2.png'; 
import image3 from '../assets/Pr3.png'; 

const ActivityFeed = () => {
  const activities = [
    { id: 1, content: '<strong> Kushantha Charuka </strong> <span style="color: #BC006D;">created contract #00124 need John Beige\'s signature </span>', image: image1, date: '2023-06-05T11:30:00' },
    { id: 2, content: 'Lorem ipsum <strong> dolor sit amet,</strong> consectetur adipiscing elit. Maecenas pretium neque', image: image2, date: '2023-06-04T10:00:00' },
    { id: 3, content: 'Lorem ipsum <strong> dolor sit amet,</strong> consectetur adipiscing elit. Maecenas pretium neque', image: image3, date: '2023-06-03T09:45:00' },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    return date.toLocaleDateString('en-US', options).replace(',', ' at');
  };

  const renderContentWithBoldWords = (content) => {
    return <span dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div className="activity-feed-container">
      <div className="activity-feed-header">
        <h2 className='header'>Activity Feed</h2>
      </div>
      {activities.map(activity => (
        <div key={activity.id} className="activity-item">
          <img src={activity.image} alt="Activity" className="activity-image" />
          <div className="activity-content">
            {}
            <p>{renderContentWithBoldWords(activity.content)}</p>
            <span className="activity-date">{formatDate(activity.date)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
