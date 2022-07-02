import React from 'react'
import AddTask from './component/AddTask'
import Header from './component/Header'
import ShowTask from './component/ShowTask'

const Home = () => {
  return (
    <div>
     <Header/>
     <AddTask/>
     <ShowTask/>
    </div>
  )
}

export default Home
