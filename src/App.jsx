import React, { useState } from 'react'
// import Hero from './component/Hero'
import './App.css'
const[iscompletestate,useiscompletestate]=useState(false);
const App = () => {
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
      <button  className={`iscompletestate ${iscompletestate === false && `active`}`} onClick={()=>{setiscompletestate(false)}}>Todo</button>
      <button className={`iscompletestate ${iscompletestate === true && `active`}`} onClick={()=>{setiscompletestate(true)}}>Completed</button>
    </div>

    <div className="todo-list">
      <h3>Todo 1</h3>
      <p>Discription</p>
    </div>

    </div>
   </div>
    </div>
    </>
  )
}

export default App