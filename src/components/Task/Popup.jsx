import React, { useState } from 'react';
import Modal from 'react-modal';

export const Popup = ({ task, isOpen, onRequestClose, onSubmit }) => {
  const [title, setTitle] = useState(task.title);
  const [isDone, setIsDone] = useState(task.isDone);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleIsDoneChange = (event) => {
    setIsDone(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...task, title, isDone });
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task name:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          <input type="checkbox" checked={isDone} onChange={handleIsDoneChange} />
          Done
        </label>
        <button type="submit">Save</button>
      </form>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};