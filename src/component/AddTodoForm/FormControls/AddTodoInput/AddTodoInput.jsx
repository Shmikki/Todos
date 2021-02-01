import React from "react";
import styled from "styled-components";
import { useField } from "react-final-form";



const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:100%;
`;

const InputContainer = styled.input`
  width: 100%;
  min-width: 300px;
  height: 2em;
  padding: 5px 10px;
  font-size: 17px;
  background-color: #ececec;
  outline: none;
  transition: all 250ms ease-in-out;
  color: #2f3337;
  border-radius: 9px;
  border: none;
  box-shadow: "0px 0px 5px 1px #0783EF";

  &:hover {
    box-shadow: 0px 0px 5px 0px #0783EF};
  }

  &:focus {
    outline: 0;
    box-shadow: 0px 0px 10px 1px #0783EF;
  }

  &::placeholder {
    color: #6f6f6f;
  }
`;


export function Input(props) {
    const {
        input,
        meta: { error, touched }
    } = useField(props.name, {
        initialValue: props.initialValue,
        validate: props.validate
    });

    const inputProps = {
        ...props,
        error: touched && error && true,
        ...input
    };

    return (
        <InputWrapper>
            <InputContainer {...inputProps} />
        </InputWrapper>
    );
}