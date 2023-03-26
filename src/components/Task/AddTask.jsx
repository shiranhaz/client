import React, { useState } from 'react';
import { TaskService } from '../../services/TaskService.js';

export const AddTask = () => {

  const [showForm, setShowForm] = useState(false);
  const [task, setTask] = useState({ title: '', isDone: false });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.title.trim()) {
      let obj={ ...task, createdBy: new Date().toISOString()}
      TaskService.addTask(obj);
      setTask({ title: '', isDone: false });
      setShowForm(false);
    }
  };

  const handleTitleChange = (event) => {
    setTask({ ...task, title: event.target.value });
  };

  const handleIsDoneChange = (event) => {
    setTask({ ...task, isDone: event.target.checked });
  };

  const handleAddTaskClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      {!showForm && (
        <button onClick={handleAddTaskClick}>ADD TASK</button>)}
      {showForm && (
        <div className="add-task" style={{display: "flex", flexDirection: "column"}}>
          <form onSubmit={handleSubmit}>
            <label>
              Task name:
              <input type="text" value={task.title} onChange={handleTitleChange} />
            </label>
            <label>
              <input type="checkbox" checked={task.isDone} onChange={handleIsDoneChange} />
              Done
            </label>
            <button type="submit">Add Task</button>
          </form>
        </div>
      )}
    </div>
  )
}