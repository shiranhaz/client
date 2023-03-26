import React, { useState } from 'react';
import {Popup} from './Popup'
import { TaskService } from '../../services/TaskService.js';

export const TaskPreview = ({ task }) => {
    const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  
    const handleEditClick = () => {
      setIsEditPopupOpen(true);
    };
  
    const handleEditSubmit = (updatedTask) => {
      // Call the `updateTask` function here to update the task in the database
      console.log('Updated task:', updatedTask);
      TaskService.updateTask(updatedTask);

      setIsEditPopupOpen(false);
    };

    const removeObj=(id)=>{
        TaskService.removeTask(id);
    }
  
    return (
      <div className="TaskPreview">
        <div className="task-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4>{task.title}</h4>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => removeObj(task._id)}>Delete</button>
        </div>
        <Popup
          task={task}
          isOpen={isEditPopupOpen}
          onRequestClose={() => setIsEditPopupOpen(false)}
          onSubmit={handleEditSubmit}
        />
      </div>
    );
  };
