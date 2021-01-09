import React,{useState} from "react";

function InputArea(props){

    const [todo,setTodo] = useState(" ")

    function handleChange(e){
        const newTodo=e.target.value;
        setTodo(newTodo);
    }
    
    return (
        <div className="form">
        <input onChange={handleChange}
         type="text"
         value={todo}
          />
        <button onClick={()=>{
            props.clicked(todo)
            setTodo(" ");
            }}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea;