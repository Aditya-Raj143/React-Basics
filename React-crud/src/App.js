import './App.css';
import { useState } from 'react';
import { Task } from "./task.js"

function App() {
  const [todoList,settodoList] = useState([])
  const [newTask, setnewTask] = useState("")

  const handleChange = (e) => {
    setnewTask(e.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskname: newTask,
      completed: false,
    }
    const newtodoList = [...todoList,task]
    settodoList(newtodoList);
    
  }

  const deleteTask = (id) => {
    settodoList(todoList.filter((task)=> task.id !== id));
  }

  const completeTask = (id) =>{
    settodoList(todoList.map((task)=> {
      if(task.id === id) return {...task,completed:true}
      else return task;
    }))
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask} > Add Task </button>
      </div>
      <div className='list'> 
        {todoList.map((task)=> {
          return  < Task  taskname={task.taskname} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask={completeTask} />
        })}
      </div> 
    </div>
  );
}

export default App;
