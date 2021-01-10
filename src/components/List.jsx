import React, {useState} from "react";


function CreateList(props){
   
    function handleDelete(){
        return props.onDelete(props.id)
    }
    return<div>
    <li>{props.item}
    <input type="checkBox" onChange={handleDelete}>

    </input>
    </li>
    </div> 
}

export default CreateList;