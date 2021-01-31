import React from "react";
import {compose} from "redux";
import TodoList from "./TodoList";
import {deleteTodo, setCompleted} from "../../redux/store";
import {connect} from "react-redux";

class TodoListContainer extends React.Component{

    render(){
        return(
            <TodoList todos={this.props.todos} toggleCompleted={this.props.toggleCompleted} deleteTodo={this.props.deleteTodo}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCompleted: (index) => dispatch(setCompleted(index)),
        deleteTodo: (index) => dispatch(deleteTodo(index))
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(TodoListContainer)