import React, {useCallback} from "react";
import Form from "./FormControls/AddTodoForm";
import {Input} from "./FormControls/AddTodoInput/AddTodoInput";
import {useDispatch} from "react-redux";
import {addTodoActionCreator} from "../../redux/store";
import "./CreateTodoForm.scss";

export const CreateTodoForm = (props) => {

    const dispatch = useDispatch();

    const addTodo = useCallback(
        (text) => dispatch(addTodoActionCreator(text)),
        [dispatch]
    )

    return (


        <Form onSubmit={values => {
            if (values.task !== "") {
                addTodo(values.task);
                values.task = "";
            }
        }}>
            {props => (
                <>
                    <Input name="task" type="text" placeholder="Title..." validate={validate => !(validate || "")}/>
                    <div className="abs-btn">
                    <button className="btn-floating waves-effect waves-light blue">
                        <i className="material-icons">add</i>
                    </button>
                    </div>
                </>
            )}
        </Form>
    )
}