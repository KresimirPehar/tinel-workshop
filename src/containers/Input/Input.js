import React, { useReducer, useEffect, useState } from 'react';
import {
  Container,
  Heading,
  Error,
  InputContainer,
  Label,
  DateIcon,
} from './Input.style';
import dateIcon from '../../assets/date.svg';

const inputReducer = (state, action) => ({
  ...state,
  value: action.value,
  isValid: action.isValid,
});

const Input = ({
  id,
  label,
  placeholder,
  value,
  onInputChange,
  letters,
  email,
  number,
  date,
  address,
}) => {
  const initialState = {
    value,
    isValid: false,
  };
  const [inputState, setInputState] = useReducer(inputReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, id, onInputChange]);

  const textChangeHandler = (e) => {
    // accept only letters for the name values; although Elon Musk wouldn't agree :)
    const onlyLettersRegex = /^[a-z]+$/gi;
    const onlyNumbersRegex = /^\d+$/g;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const dateRegex = /^(\d{1,2}.){2}\d{4}$/;
    let isValid = true;
    if (
      letters &&
      (!onlyLettersRegex.test(e.target.value) ||
        e.target.value.trim().length < 1)
    ) {
      isValid = false;
    }
    if (
      email &&
      (!emailRegex.test(e.target.value) || e.target.value.trim().length < 1)
    ) {
      isValid = false;
    }
    if (
      number &&
      (!onlyNumbersRegex.test(e.target.value) ||
        e.target.value.trim().length < 1)
    ) {
      isValid = false;
    }
    if (
      date &&
      (!dateRegex.test(e.target.value) || e.target.value.trim().length < 1)
    ) {
      isValid = false;
    }
    if (address && e.target.value.trim().length < 1) {
      isValid = false;
    }
    setInputState({ value: e.target.value, isValid });
  };

  return (
    <Container>
      <InputContainer
        isDate={date}
        isError={!inputState.isValid && inputState.value.length > 0}
      >
        <Heading>
          <Label>{label}</Label>
          {!inputState.isValid && inputState.value.length > 0 && (
            <Error>{`Your ${label.toLowerCase()} contains invalid symbol!`}</Error>
          )}
        </Heading>
        {date && <DateIcon alt='date' src={dateIcon} />}
        <input
          id='input'
          //   value={inputState.value}
          //   onChange={textChangeHandler}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={textChangeHandler}
          placeholder={placeholder}
        />
      </InputContainer>
    </Container>
  );
};

export default Input;
