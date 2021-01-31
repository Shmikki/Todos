import React from 'react';
import "./TodoList.css"
import TodoItem from "./TodoItem/TodoItem";


export default function TodoList(props) {

    return (
        <div className={"todo__list"}>
            {props.todos.map(todo => <TodoItem todo={todo} key={todo.index} toggleCompleted={props.toggleCompleted}
            />)}
        </div>
    )
}