import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../../redux/store";
import {compose} from "redux";
import {TodoForm} from "./TodoForm";


class TodoFormContainer extends React.Component{


    render() {
        return(
            <TodoForm addTodo={this.props.addTodo} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (text) => dispatch(addTodo(text))
    }
}

export default compose(
    connect(null,mapDispatchToProps)
)(TodoFormContainer)