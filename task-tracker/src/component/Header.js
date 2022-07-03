import React from 'react'
import {useState} from "react"
import AddTask from './AddTask'

const Header = ({tasks,setTasks}) => {
    const [show,setShow]=useState(true)
    const handleChange=()=>{
        setShow(!show)
    }

  return (
    <div>
        <h1>Task Tracker</h1>

        <button style={show? {backgroundColor:"purple"} : { backgroundColor:"red"}} onClick={handleChange}> { show ?  " Open Add Task Button" :" Close Add Task Button"} </button>
        { show && <AddTask tasks={tasks} setTasks={setTasks}/>}
    </div>
   
  )
}

export default Header