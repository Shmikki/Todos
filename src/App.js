import './App.scss';
import TodoList from "./component/TodoList/TodoList";
import React from "react";


const todos = [
    {
      index : 1,
      task: "купить молоко",
      isDone: false
    },
    {
      index : 2,
      task: "купить хлеб",
      isDone: false
    },
    {
      index : 3,
      task: "купить масло",
      isDone: false
    }
]



function App() {
  return (
    <div className="App">
        <h1>Write your todos</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
