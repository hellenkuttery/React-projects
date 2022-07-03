import React from 'react'
import {useState} from "react"
import AddTask from './component/AddTask'
import Header from './component/Header'
import ShowTask from './component/ShowTask'

const Home = () => {
    const [tasks,setTasks]=useState([]);
  return (
    <div>
     <Header tasks={tasks} setTasks={setTasks} className="taskButton"/>
  
     <ShowTask/>
    </div>
  )
}

export default Home
