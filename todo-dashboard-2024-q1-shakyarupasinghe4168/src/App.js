import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './components/tasklist/TaskList';
import ActivityFeed from './components/activityfeed/ActivityFeed';
import Welcome from './components/welcome/Welcome'; 
import Tagline from './components/tagline/Tagline'; 
import PriorityChart from './components/prioritychart/PriorityChart'; 
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="app">
      <div className="left-column">
      <Dashboard /> {/* Dashboard */}
       
      </div>
      <div className="right-column">
      <div className="row">
          <Welcome /> {/* Welcome component */}
        </div>
        <div className="row">
          <Tagline /> {/* Tagline component */}
        </div>
        <div className="row">
          <div className="column">
            <TaskList tasks={tasks} /> {/* TaskList component */}
          </div>
          <div className="column">
          <div className="row">
            <ActivityFeed /> {/* ActivityFeed component */}
          </div>
          <div className="row">
            <PriorityChart /> {/* Priority component */}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
