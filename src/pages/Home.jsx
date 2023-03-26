import React from 'react'
import  {TaskList}  from '../components/Task/TaskList'
import {AddTask} from '../components/Task/AddTask'

export const Home = () => {
    return (
        <div className="home"  style={{ display: "flex", justifyContent: "space-around" ,alignItems: "center", alignContent: "center",height: "100vh"}}>
            <div className="leftSide">
                <TaskList/>
            </div>
            <div className="rightSide">
                <AddTask/>
            </div>
        </div>
    )
}

