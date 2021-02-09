import React from "react";
import {Field, useField} from "react-final-form";
import "./AddTodoInput.scss";




export function Input(props) {
    const {
        input,
        meta: { error }
    } = useField(props.name, {
        initialValue: props.initialValue,
        validate: props.validate
    });

    const inputProps = {
        ...props,
        ...input
    };

    return (
         <div className="input-field inp-w">
            <Field component="input" {...inputProps} id="title"/>
            <label htmlFor="title" className="active fz">
                Write your task`s name
            </label>
         </div>
    );
}