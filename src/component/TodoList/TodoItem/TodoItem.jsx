import React from "react";
import "./TodoItem.css";


export default function TodoItem(props){
    return(
        <div className="item">
            <div className="item__done">
                <input type="checkbox" checked={props.todo.completed} onChange={() => props.toggleCompleted(props.todo.index)} />
            </div>
            <div className="item__task">
                {props.todo.task}
            </div>
            <button className="item__deletebtn"><i className="fa fa-close" /></button>
        </div>
    )
}