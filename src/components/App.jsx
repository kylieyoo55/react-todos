import React, { useState } from "react";
import TodoItem from "./TodoItem"


function App() {

const [todo,setTodo] = useState(" ")
const [todos,setTodos]=useState([]);

  function handleChange(e){
    const newTodo=e.target.value;
    setTodo(newTodo);


}


function handleClick(){
  setTodos(p=> [...p,todo])
  setTodo(" ");
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
      <div className="form">
        <input onChange={handleChange}
         type="text"
         value={todo}
          />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
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
