import React, {useCallback} from 'react';
import "./TodoList.css"
import TodoItem from "./TodoItem/TodoItem";
import {getTodosSuperSelector} from "../../redux/todo-selectors";
import {setCompleted, deleteTodoActionCreator, todoType, changeTaskTextActionCreator} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";


export default function TodoList() {

    const todos: Array<todoType> = useSelector((state: any) =>
        getTodosSuperSelector(state)
    )

    const dispatch = useDispatch();

    const toggleCompleted = useCallback(
        (index: number) => dispatch(setCompleted(index)),
        [dispatch]
    );

    const deleteTodo = (index: number) => dispatch(deleteTodoActionCreator(index));

    return (
        <div className={"todo__list"}>
            {todos.map(todo => <TodoItem todo={todo} key={todo.index} deleteTodo={deleteTodo}
                                         toggleCompleted={toggleCompleted}
            />)}
        </div>
    )
}