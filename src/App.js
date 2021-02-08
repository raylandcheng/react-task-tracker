import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import {useState} from 'react'

import './App.css';

function App() {
  const [tasks, setTasks] = useState(
    [
        {id:1, text:"ABCE", day:"Monday 1st February 2021", reminder: true},
        {id:2, text:"DEF", day:"Tuesday 2nd February 2021", reminder: true},
        {id:3, text:"HIJ", day:"Wednesday 3rd February 2021", reminder: true},
        {id:4, text:"KLM", day:"Thursday 4th February 2021", reminder: true},
    ]
    );
  
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  };

  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter( (task) => task.id !== id))
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map( (task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
      <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
