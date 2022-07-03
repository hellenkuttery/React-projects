import React from 'react'
import {useState} from "react"
import AddTask from '../addTask/AddTask'
import Button from 'react-bootstrap/Button';
import "./Header.css"


const Header = ({tasks,setTasks}) => {
    const [show,setShow]=useState(true)
    const handleChange=()=>{
        setShow(!show)
    }

  return (
    <div>
        <h1 className="headerTitle">Task Tracker</h1>

        <Button className="taskButton" size="lg"style={show? {backgroundColor:"purple"} : { backgroundColor:"crimson"}} onClick={handleChange}> { show ?  " Open Add Task Button" :" Close Add Task Button"} </Button>
        { show && <AddTask tasks={tasks} setTasks={setTasks}/>}
    </div>
   
  )
}

export default Header