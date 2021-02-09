import React, {useState} from "react";
import "./TodoItem.css";
import {todoType} from "../../../redux/store";
import {EditTodoForm} from "./EditTodoForm/EditTodoForm";

type PropsType = {
    todo: todoType
    toggleCompleted: (index: number) => void
    deleteTodo: (index: number) => void
}

export default React.memo<PropsType>(function TodoItem({todo, toggleCompleted, deleteTodo}) {

        let [isEdit, setEdit] = useState(false);

        return (
            <div className="collection-item todo-item">
                <p>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.index)} />
                        <span className={`item__title ${todo.completed ? "item__completed" : null}`}>
                        {todo.task}
                            {isEdit && <EditTodoForm text={todo.task} index={todo.index}/>}
                        </span>
                        <button className="btn secondary-content red" onClick={() => deleteTodo(todo.index)}>
                            <i className="material-icons red">delete</i>
                        </button>
                    </label>
                </p>
            </div>
        )
    }, (prevProps, nextProps) => {
        if (prevProps.todo === nextProps.todo) {
            return true
        }
        return false
    }
)