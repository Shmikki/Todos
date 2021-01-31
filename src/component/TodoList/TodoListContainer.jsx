import React from "react";
import {compose} from "redux";
import TodoList from "./TodoList";
import {setCompleted} from "../../redux/store";
import {connect} from "react-redux";

class TodoListContainer extends React.Component{

    render(){
        return(
            <TodoList todos={this.props.todos} toggleCompleted={this.props.toggleCompleted}/>
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
        toggleCompleted: (index) => dispatch(setCompleted(index))
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(TodoListContainer)