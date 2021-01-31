import './App.scss';
import React from "react";
import TodoListContainer from "./component/TodoList/TodoListContainer";

function App() {
  return (
    <div className="App">
        <h1>Write your todos</h1>
      <TodoListContainer />
    </div>
  );
}

export default App;
