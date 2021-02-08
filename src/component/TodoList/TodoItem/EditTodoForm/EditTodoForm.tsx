import React from "react";
import {useDispatch} from "react-redux";
import TextInput from "./TextInput/TextInput";
import {Form, Field} from "react-final-form";
import {changeTaskTextActionCreator} from "../../../../redux/store";



type PropsType = {
    text: string
    index:number
}

export const EditTodoForm: React.FC<PropsType> = ({text,index}) => {

    const dispatch = useDispatch();
    const onSubmit = (text:string,index:number) => dispatch(changeTaskTextActionCreator(text,index));

    return (
        <Form
            onSubmit={(values) => onSubmit(values.text,index)}
            initialValues={{text}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form className="edit__form" onSubmit={handleSubmit}>
                    <div className="edit__input">
                        <Field<string>
                            name="text"
                            component={TextInput}
                        />
                    </div>
                    <button className="edit__saveBtn" type="submit" disabled={submitting || pristine}>
                        Save
                    </button>
                </form>
            )}
             />)
}