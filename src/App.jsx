import React from 'react'
// import Hero from './component/Hero'
import './App.css'
const App = () => {
  return (
    <>
    <div className="hero">

   <div className="app">
    <h3>My Todo</h3>

    <div className="todo-wrapper">
      <div className="todo-input">
        <div className="todo-input-items">
          <label htmlFor="">Title</label>
          <input type="text" name="Todays Todo" placeholder="Today's task Todo" />
        </div>

        <div className="todo-input-items">
          <label htmlFor="">Discription</label>
          <input type="text" name="Todays Todo disc" placeholder="Today's task Todo Discription" />
        </div>

        <div className="todo-input-items">
        <input type="button" value="Add" className='primarybtn' />

        </div>
      </div>

    <div className="btn-area">
      <button>Todo</button>
      <button>Completed</button>
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