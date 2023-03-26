import { useState, useEffect } from 'react';
import { TaskPreview } from './TaskPreview';
import { TaskService } from '../../services/TaskService.js';


export const TaskList = () => {

  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    // const fetchTasks = async () => {
    //   const tasks = await TaskService.query();
    //   setTasks(tasks);
    // }
    const fetchTasks =  () => {
      const tasks =  TaskService.query();
      setTasks(tasks);
    }

    fetchTasks();
  }, []);


  return (
    <div className="TaskList">
      { tasks && tasks.map(task => <TaskPreview key={task._id} task={task} />)}
    </div>
  );
};
