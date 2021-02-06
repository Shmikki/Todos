import React, {useCallback} from 'react';
import "./TodoList.css"
import TodoItem from "./TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {getTodosSuperSelector} from "../../redux/todo-selectors";
import {setCompleted, deleteTodoActionCreator } from "../../redux/store";


export default function TodoList() {

    const todos = useSelector(state =>
        getTodosSuperSelector(state)
    )

    const dispatch = useDispatch();

    const toggleCompleted = useCallback(
        (index) => dispatch(setCompleted(index)),
        [dispatch]
    );

    const deleteTodo = (index) => dispatch(deleteTodoActionCreator(index));

    return (
        <div className={"todo__list"}>
            {todos.map(todo => <TodoItem todo={todo} key={todo.index} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}
            />)}
        </div>
    )
}