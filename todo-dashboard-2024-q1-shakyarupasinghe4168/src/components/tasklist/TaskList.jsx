import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './TaskList.css';
import lowImage from '../assets/low.png'; 
import mediumImage from '../assets/medium.png'; 
import highImage from '../assets/high.png'; 

const TaskList = ({ tasks }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [taskStatus, setTaskStatus] = useState(tasks.map(task => task.completed));

  const itemsPerPage = 8;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(tasks.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const markAsDone = (index) => {
    const updatedStatus = [...taskStatus];
    updatedStatus[index] = true;
    setTaskStatus(updatedStatus);
  };

  const renderTasks = () => {
    return tasks.slice(offset, offset + itemsPerPage).map((task, index) => {
    
      const createdAtDate = new Date(task.createdAt);
      const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(createdAtDate);
  
      return (
        <div key={task.id} className={`task-item ${task.priority.toLowerCase()}`}>
          <div className="task-info">
            <img src={getImageByPriority(task.priority)} alt={task.priority} className="priority-image" />
            <p>{task.todo}</p>
            <button className={taskStatus[offset + index] ? 'done' : 'in-progress'}>
              {taskStatus[offset + index] ? 'Done' : 'In Progress'}
            </button>
            <div className="task-date">
              {formattedDate} {}
            </div>
          </div>
          {!taskStatus[offset + index] && (
            <button className="mark-as-done" onClick={() => markAsDone(offset + index)}>
              Mark as done
            </button>
          )}
        </div>
      );
    });
  };
  
  const getImageByPriority = (priority) => {
    switch (priority.toLowerCase()) {
      case 'low':
        return lowImage;
      case 'medium':
        return mediumImage;
      case 'high':
        return highImage;
      default:
        return null;
    }
  };

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2 className='header'>Task List</h2>
      </div>
      {renderTasks()}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={" >"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageRangeDisplayed={3} 
        marginPagesDisplayed={0} 
      />
    </div>
  );
};

export default TaskList;
