import React from "react";
import { Form as FinalForm } from "react-final-form";
import "./AddTodoForm.scss";


export default function addTodoForm(props) {
    return (
        <FinalForm
            onSubmit={props.onSubmit}
            render={renderProps => (
                <form className="form" onSubmit={renderProps.handleSubmit}>
                    {props.children(renderProps)}
                </form>
            )}
        />
    );
}