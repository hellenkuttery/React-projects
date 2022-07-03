import React from 'react'
import Table from 'react-bootstrap/Table';


const ShowTask = ({tasks,setTasks}) => {
  console.log("show daki:",tasks)
  return (
    <div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Task</th>
      <th>Date</th>
      <th>IsDone</th>
    </tr>
  </thead>
  <tbody>
    {
      tasks.map((item)=>{
       const {id,todo,day,isDone}=item;
       console.log(id,todo,day)
       return(
        <tr>
        <td>{id}</td>
        <td>{todo}</td>
        <td>{day}</td>
        <td>{isDone}</td>
      </tr>
       )
      })
      
    }    
  </tbody>
</Table>


    </div>
  )
}

export default ShowTask