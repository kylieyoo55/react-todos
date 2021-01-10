import React, { useState } from "react";
import List from "./List"
import CreateItem from "./CreateItem"

function App() {
const [listArray,setListArray]=useState([]);

  function addItem(todo){
    setListArray(p=>[...p,todo])
    
  }

  function itemDelete(id){
return setListArray(
  listArray.filter((el,index)=>{
    return index !== id
  })
)}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <CreateItem 
      onAdd={addItem}/>
      <div>
        <ul>

        {listArray.map((el,index)=>{
          return(
            <List 
            key={index}
            id={index}
            item={el}
            onDelete={itemDelete}
          />
          )
        })}
          
        </ul>
      </div>
    </div>
  );
}

export default App;

//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
