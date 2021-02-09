import './App.scss';
import React from "react";
import TodoList from "./component/TodoList/TodoList";
import {CreateTodoForm} from "./component/AddTodoForm/CreateTodoForm";
import {NavBar} from "./component/NavBar/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import {Info} from "./component/Info/Info";


function App() {
    return (
        <Router>
            <NavBar/>
            <div className="container">
            <Switch>
                    <Route path="/" exact render={() => {
                        return (
                            <>
                                <CreateTodoForm/>
                                <TodoList/>
                            </>
                        )
                    }}/>
                    <Route path="/info" render={() => <Info />} />
            </Switch>
            </div>
        </Router>
    );
}

export default App;
