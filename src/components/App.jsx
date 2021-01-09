import React, { useState } from "react";
import TodoItem from "./TodoItem"
import InputArea from "./InputArea"


function App() {


const [todos,setTodos]=useState([]);

  

function handleClick(todo){
  setTodos(p=> [...p,todo])
;}
 
function deleteItem(id){
  setTodos(p=>{
    return p.filter((el,index) => {
      return index !== id;
    })
  })
}

//<button onClick={() => setState([...state, "again"])}>Click me</button>
//setTheArray(oldArray => [...oldArray, newElement]);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <InputArea 
       clicked={handleClick}
     />
      <div>
        <ul>
   {todos.map((el,index)=><TodoItem
    item={el} 
    onChecked={deleteItem}
    key={index}
    id={index}
    />)}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
