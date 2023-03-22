import { useState, useEffect } from 'react';
import { TaskPreview } from './TaskPreview';
import {TaskService} from '../../services/TaskService.js';


export const TaskList = () => {

    const [tasks, setTasks] = useState(null);

    useEffect(() => {
      const fetchTask = TaskService.query(tasks);
      setTasks(fetchTask);
    }, []);


    return (
        <div className = "TaskList">
        { tasks && tasks.map(task => <TaskPreview task={task}/>)}
        </div>
      );
    };