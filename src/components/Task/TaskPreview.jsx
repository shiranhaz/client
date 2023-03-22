import React from 'react'

export const TaskPreview = ({ task }) => {
    return (
        <div className="TaskPreview">
            <h4 className="title">{task.title}</h4>
        </div>
    )
}
