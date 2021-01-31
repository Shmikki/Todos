import React from "react";
import "./TodoItem.css";


export default function TodoItem({todo,toggleCompleted, deleteTodo}){

    return(
        <div className={`item`}>
            <div className="item__done">
                <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.index)} />
            </div>
            <div className="item__task">
                <p className={`item__text ${todo.completed ? "item__completed" : null}`}>
                    {todo.task}
                </p>
            </div>
            <button className="item__deletebtn" onClick={() => deleteTodo(todo.index)}><i className="fa fa-close" /></button>
        </div>
    )
}