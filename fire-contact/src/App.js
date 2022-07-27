import './App.css';
import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';
import {useState} from "react"
import {AddUser,EditUser} from "./utils/functions"
import {ToastContainer} from "react-toastify"

const initialValues={
  username:"",
  phoneNumber:"",
  gender:""
}


function App() {
  const [info,setInfo]=useState(initialValues)
  const handleFormSubmit=(e)=>{
    e.preventDefault()

    if (info.id){
      EditUser(info)
    }
    else{
      AddUser(info)
    }

    setInfo(initialValues)
  }
  const editHandler=(id,username,phoneNumber,gender)=>{
    setInfo({id,username,phoneNumber,gender})
  }
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit}/>
      <Contacts editHandler={editHandler}/>
      <ToastContainer/>
    </div>
  );
}

export default App;
