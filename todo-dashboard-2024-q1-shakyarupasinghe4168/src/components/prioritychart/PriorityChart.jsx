import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; 
import './PriorityChart.css';

const PriorityChart = () => {
  const [taskCounts, setTaskCounts] = useState({});
  const chartRef = useRef(null); 

  
  useEffect(() => {
    fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
      .then(response => response.json())
      .then(data => {
        const counts = { LOW: 0, MEDIUM: 0, HIGH: 0 };
        data.forEach(task => {
          counts[task.priority]++; 
        });
        setTaskCounts(counts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const ctx = document.getElementById('priority-chart');
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: 'doughnut', 
        data: {
          labels: ['Low', 'Medium', 'High'],
          datasets: [{
            label: 'Task Count by Priority',
            data: [taskCounts.LOW, taskCounts.MEDIUM, taskCounts.HIGH],
            backgroundColor: [
              '#F2C94C', 
              '#EB5757',
              '#2F80ED'  
            ],
            borderColor: [
              '#F2C94C', 
              '#EB5757', 
              '#2F80ED'  
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true, 
          cutout: '50%', 
          plugins: {
            legend: {
              position: 'right', 
            }
          }
        }
      });
    }
  }, [taskCounts]);

  return (
    <div className="priority-chart-container">
      <div className="priority-chart-header">
        <h2 className='header'>Priority Chart</h2>
      </div>
      <canvas id="priority-chart" ></canvas>
    </div>
  );
};

export default PriorityChart;
