import React from "react";

function TodoItem(prop){
    

    return (
    <div onClick={()=>{
        prop.onChecked(prop.id)
    }}>
    
    <li>{prop.item}</li>
    
    </div>)
    
}

export default TodoItem;