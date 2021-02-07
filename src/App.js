import './App.scss';
import React from "react";
import TodoList from "./component/TodoList/TodoList";
import {TodoForm} from "./component/AddTodoForm/TodoForm";

function App() {
    return (
        <div className="App">
            <h2 className="title">My To Do List</h2>
            <div className="wrapper">
                <TodoForm />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
