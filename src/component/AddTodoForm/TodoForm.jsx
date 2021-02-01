import React from "react";
import  "./TodoForm.scss";
import styled from "styled-components";
import Form from "./FormControls/AddTodoForm";
import {Input} from "./FormControls/AddTodoInput/AddTodoInput";
import plus from "../../assets/images/plus.svg";


const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  margin-bottom: 10px;
`;


const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 400px;
  box-sizing: border-box;
`;


const Button = styled.button`
  color: #5b7cb5;
  margin: 5px;
  margin-left: 3px;
  padding: 0;
  border: none;
  border-radius: 3px;
  width: 100%;
  display: flex;
  background: url(${plus});
  background-position: cover;
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;
  
 &:active, &:focus{
      outline: none;
    }
  `;



export const TodoForm = (props) => (
    <Form className="form" onSubmit={values => {
        if(values.task !== "") {
            props.addTodo(values.task);
            values.task = "";
        }
    }}>
        {props => (
            <FormWrapper>
                <Group>
                    <Input name="task" type="text" placeholder="Title..." validate={validate => !(validate || "")} />
                </Group>
                <Button type="submit" primary />
            </FormWrapper>
        )}
    </Form>
)
