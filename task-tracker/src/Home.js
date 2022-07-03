import React from 'react'
import {useState} from "react"
import Header from './component/Header'
import ShowTask from './component/ShowTask'

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    return saved || [];
  });
  return (
    <div>
     <Header tasks={tasks} setTasks={setTasks} className="taskButton"/>
  
     <ShowTask/>
    </div>
  )
}

export default Home
