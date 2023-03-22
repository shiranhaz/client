import React from 'react'
import  {TaskList}  from '../components/taskList'
import {AddTask} from '../components/addTask'

export const Home = () => {
    return (
        <div className="home">
            <div className="leftSide">
                <TaskList/>
                </div>
                <div className="rightSide">
                <AddTask/>
            </div>
        </div>
    )
}

