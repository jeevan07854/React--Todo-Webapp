import React, { useEffect, useState } from 'react'
// import Hero from './component/Hero'
import './App.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { uniqueId } from 'lodash';


// setactive(!true);
const App = () => {
  const [active,setactive]=useState(false);
  const [todos,settodos]=useState([]);
  const [title,settitle]=useState("");
  const [discription,setdiscription]=useState("");
const [completedTodo,setCompletedTodo]=useState("");
    

  const handleAdd=()=>{
     const newtodoitem ={

      title:title,
      discription:discription ,
      id:uniqueId(),
      
     }
     const updatetodoarr =[...todos];
    updatetodoarr.push(newtodoitem);
    settodos(updatetodoarr);
    // console.log(newtodoitem)
    localStorage.setItem('todolist',JSON.stringify(updatetodoarr));
  }
    
     const handledeletetodo =(id)=>{
     const reducedtodo =todos.filter((item)=>item.id !== id);
   console.log(id,reducedtodo)
    //  reducedtodo.splice(index);
    //   console.log(reducedtodo);
     localStorage.setItem('todolist',JSON.stringify(reducedtodo))
     settodos(reducedtodo);


     };
       
     const completeTodoHandler=(index)=>{
      const now =new Date();
      const dd =now.getDate();
      const mm =now.getMonth();
      const yyyy =now.getFullYear();
      const h =now.getHours();
      const m =now.getMonth()
      const s =now.getSeconds()
      const completedOn = dd + '-' +mm +'-'+yyyy+ ' at ' +h+':'+m+':'+s;

      const filterItem ={
        ...allTodos[index],
        completedOn : completedOn,
      }
     }
 


useEffect(()=>{
  let savedtodo = JSON.parse(localStorage.getItem('todolist'));
  // console.log(savedtodo)
  if(savedtodo){
 settodos(savedtodo);
  }
},[])
  return (
    
    <>
    <div className="hero">
      

   <div className="app">
    <h1>My Todo</h1>

    <div className="todo-wrapper">
      <div className="todo-input">
        <div className="todo-input-items">
          <label htmlFor="">Title : </label>
          <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} name="Todays Todo" placeholder="Today's task Todo" />
        </div>

        <div className="todo-input-items">
          <label htmlFor="">Discription : </label>
          <input type="text" name="Todays Todo disc" value={discription} onChange={(e)=>{setdiscription(e.target.value)}} placeholder="Today's task Todo Discription" />
        </div>

        <div className="todo-input-items">
<input type="button" className="primarybtn" onClick={handleAdd} value="Add" placeholder='Add' />

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
 


      {
        todos.map((value,index)=>{
          return(
            <div className="todo-list" key={value.id}>
            <div className="todo-list-item">
              <div className='list'>
            <h3>{value.title}</h3>
            <p>{value.discription}</p>
      
              </div>
              <div className='icon'>
      
              <RiDeleteBinLine className='del-icon' onClick={()=>[
                handledeletetodo(value.id)
              ]} />
              <IoCheckmarkDoneOutline className='ok-icon' onClick={()=>{
                completeTodoHandler()
              }}/>
      
      
              </div>
            </div>
          </div>

            
          )
        })
      }

  


</div>

   </div>
    </div>
    </>
  )
}

export default App