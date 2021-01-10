import React,{useState} from "react"

function CreateItem(props){
    const [todo,setTodo]=useState("");
    
function handleChange(e){
    const newValue=e.target.value;
    setTodo(newValue);
    
}

function handleClick(){  
props.onAdd(todo)
setTodo(" ")
}

    return(
        <div className="form">
        <input 
        onChange={handleChange} 
        type="text"
        value={todo}     
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default CreateItem;