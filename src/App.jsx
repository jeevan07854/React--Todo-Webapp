import React, { useState } from 'react'
// import Hero from './component/Hero'
import './App.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckmarkDoneOutline } from "react-icons/io5";



// setactive(!true);
const App = () => {
  const [active,setactive]=useState(false);
  
  return (
    
    <>
    <div className="hero">
      

   <div className="app">
    <h1>My Todo</h1>

    <div className="todo-wrapper">
      <div className="todo-input">
        <div className="todo-input-items">
          <label htmlFor="">Title : </label>
          <input type="text" name="Todays Todo" placeholder="Today's task Todo" />
        </div>

        <div className="todo-input-items">
          <label htmlFor="">Discription : </label>
          <input type="text" name="Todays Todo disc" placeholder="Today's task Todo Discription" />
        </div>

        <div className="todo-input-items">
<input type="button" className="primarybtn" value="Add" placeholder='Add' />

        </div>
      </div>

    <div className="btn-area">
    <button className={`secondarybtn ${ active===false && 'active'}`} onClick={()=>{
      setactive(false)
    }}>Todo</button>
    <button className={`secondarybtn ${ active===true && 'active'}`} onClick={()=>{
      setactive(true)
    }}>Completed</button>
    </div>

    <div className="todo-list">
      <div className="todo-list-item">
        <div className='list'>
      <h3>Todo 1</h3>
      <p>Discription</p>

        </div>
        <div className='icon'>

        <RiDeleteBinLine className='del-icon' />
        <IoCheckmarkDoneOutline className='ok-icon' />


        </div>
      </div>
    </div>
</div>

   </div>
    </div>
    </>
  )
}

export default App