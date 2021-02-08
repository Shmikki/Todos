import './App.scss';
import React from "react";
import TodoList from "./component/TodoList/TodoList";
import {CreateTodoForm} from "./component/AddTodoForm/CreateTodoForm";

function App() {
    return (
        <div className="App">
            <h2 className="title">My To Do List</h2>
            <div className="wrapper">
                <CreateTodoForm />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
