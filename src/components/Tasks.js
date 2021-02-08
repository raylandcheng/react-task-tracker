import React from 'react'
import Task from './Task'
// const tasks = [
//     {id:1, text:"ABCE", day:"Monday 1st February 2021", reminder: true},
//     {id:2, text:"DEF", day:"Tuesday 2nd February 2021", reminder: true},
//     {id:3, text:"HIJ", day:"Wednesday 3rd February 2021", reminder: true},
//     {id:4, text:"KLM", day:"Thursday 4th February 2021", reminder: true},
// ]



function Tasks({ tasks, onDelete, onToggle}) {
    


    return (
        <div>
            {tasks.map((task) => (
          
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default Tasks
