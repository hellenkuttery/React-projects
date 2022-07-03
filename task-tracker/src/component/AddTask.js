import React from "react";
import { useState } from "react";

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
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Task:</label>
        <input type="text" value={todo} onChange={(e) => handleTodoChange(e)} />
        <br />
        <label htmlFor="">Date</label>
        <input type="date" onChange={(e) => handleDayChange(e)} />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default AddTask;
