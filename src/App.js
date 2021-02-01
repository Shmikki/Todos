import './App.scss';
import React from "react";
import TodoListContainer from "./component/TodoList/TodoListContainer";
import TodoFormContainer from "./component/AddTodoForm/TodoFormContainer";

function App() {
    return (
        <div className="App">
            <h2 className="title">My To Do List</h2>
            <div className="wrapper">
                <TodoFormContainer/>
                <TodoListContainer/>
            </div>
        </div>
    );
}

export default App;
