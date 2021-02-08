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
            <div className={`item`}>
                <div className="item__done">
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.index)}/>
                </div>
                <div className="item__task" onDoubleClick={() => setEdit(!isEdit)}>
                    <p className={`item__text ${todo.completed ? "item__completed" : null}`}>
                        {todo.task}
                        {isEdit && <EditTodoForm text={todo.task} index={todo.index}/>}
                    </p>
                </div>
                <button className="item__deletebtn" onClick={() => deleteTodo(todo.index)}>
                    <i className="fa fa-close"/>
                </button>
            </div>
        )
    }, (prevProps, nextProps) => {
        if (prevProps.todo === nextProps.todo) {
            return true
        }
        return false
    }
)