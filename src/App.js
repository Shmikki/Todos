import './App.scss';
import React from "react";
import TodoFormContainer from "./component/AddTodoForm/TodoFormContainer";
import TodoList from "./component/TodoList/TodoList";

function App() {
    return (
        <div className="App">
            <h2 className="title">My To Do List</h2>
            <div className="wrapper">
                <TodoFormContainer />
                <TodoList />
            </div>
        </div>
    );
}

export default App;
