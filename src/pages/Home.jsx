import React from 'react'
import  {TaskList}  from '../components/Task/TaskList'
import {AddTask} from '../components/Task/AddTask'

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

