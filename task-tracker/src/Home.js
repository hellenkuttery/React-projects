import React from 'react'
import {useState} from "react"
import Header from './component/header/Header'
import ShowTask from './component/showTask/ShowTask'
import "./Home.css"

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    return saved || [];
  });
  return (
    <div className="container">
     <Header tasks={tasks} setTasks={setTasks} className="taskButton"/>
  
     <ShowTask tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default Home
