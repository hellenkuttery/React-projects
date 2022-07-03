import React from "react";
import { useState } from "react";
import "./addTask.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const AddTask = ({ tasks, setTasks }) => {
  const [todo, setTodo] = useState("");
  const [day, setDay] = useState("");

  const handleTodoChange = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };
  const handleDayChange = (e) => {
    console.log(e.target.value);
    setDay(e.target.value);
  };

const addTask=(newTask)=>{
  console.log("newTask ",newTask)
  const id=new Date().getTime();
  const addNewTask={id,...newTask};
  setTasks([...tasks,addNewTask])
  
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo,day)
    addTask({todo:todo,day:day,isDone:false})
    setTodo("");
    setDay("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="formStyle">
        <Form.Label htmlFor="">Task:</Form.Label>
        <Form.Control type="text" value={todo} onChange={(e) => handleTodoChange(e)} />
        <br />
        <Form.Label htmlFor="">Date</Form.Label>
        <Form.Control  type="date" onChange={(e) => handleDayChange(e)} />
        <Button  type="submit" size="lg" className="submitButton">SUBMIT</Button>
      </form>
    </div>
  );
};

export default AddTask;
