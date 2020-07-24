/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useReducer, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Heading,
  Title,
  CloseCheckoutIcon,
  FlexContainer,
  GenderSelect,
  GenderLabel,
  AgreeChecbox,
  CheckoutButton,
} from './CheckoutModal.style';
import Input from '../Input';
import closeIcon from '../../assets/closeCheckout.svg';
import {
  closeCheckoutModal,
  orderTickets,
} from '../../redux/actions/checkoutActions';

const formReducer = (state, action) => {
  const updatedValues = {
    ...state.inputValues,
    [action.id]: action.value,
  };
  const updatedValidities = {
    ...state.inputValidities,
    [action.id]: action.isValid,
  };
  const updatedFormIsValid = Object.keys(updatedValidities).every(
    (item) => updatedValidities[item] === true
  );
  return {
    inputValues: updatedValues,
    inputValidities: updatedValidities,
    formIsValid: updatedFormIsValid,
  };
};

const initialState = {
  inputValues: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    zip: '',
    agreeCheckbox: false,
  },
  inputValidities: {
    firstName: false,
    lastName: false,
    emailAddress: false,
    dateOfBirth: false,
    gender: false,
    address: false,
    zip: false,
    agreeCheckbox: false,
  },
  formIsValid: false,
};

const CheckoutModal = () => {
  const dispatch = useDispatch();
  const workshopsToOrder = useSelector((state) => state.checkout.items);
  const [formState, setFormState] = useReducer(formReducer, initialState);

  const inputChangeHandler = useCallback(
    (id, value, isValid) => setFormState({ id, value, isValid }),
    [setFormState]
  );

  const closeModalHandler = () => dispatch(closeCheckoutModal());

  const agreeCheckboxHandler = (e) =>
    setFormState({
      id: 'agreeCheckbox',
      value: e.target.checked,
      isValid: e.target.checked,
    });

  const selectGenderHandler = (e) =>
    setFormState({ id: 'gender', value: e.target.value, isValid: true });

  const checkoutHandler = () => dispatch(orderTickets(workshopsToOrder));

  const {
    firstName,
    lastName,
    emailAddress,
    dateOfBirth,
    gender,
    address,
    zip,
  } = formState.inputValues;

  return (
    <Container>
      <Heading>
        <Title>Checkout</Title>
        <CloseCheckoutIcon src={closeIcon} onClick={closeModalHandler} />
      </Heading>
      <Input
        id='firstName'
        label='First Name'
        placeholder='Type your first name here'
        value={firstName}
        onInputChange={inputChangeHandler}
        letters
      />
      <Input
        id='lastName'
        label='Last Name'
        placeholder='Type your last name here'
        value={lastName}
        onInputChange={inputChangeHandler}
        letters
      />
      <FlexContainer>
        <Input
          id='dateOfBirth'
          label='Date of Birth'
          placeholder='DD.MM.YYYY'
          value={dateOfBirth}
          onInputChange={inputChangeHandler}
          date
        />
        <GenderSelect>
          <GenderLabel>Gender</GenderLabel>
          <select value={gender} onChange={selectGenderHandler}>
            <option style={{ display: 'none' }} />
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </GenderSelect>
      </FlexContainer>
      <Input
        id='emailAddress'
        label='Email Address'
        placeholder='Type your email address here'
        value={emailAddress}
        onInputChange={inputChangeHandler}
        email
      />
      <Input
        id='address'
        label='Address'
        placeholder='Type your address here'
        value={address}
        onInputChange={inputChangeHandler}
        address
      />
      <Input
        id='zip'
        label='Zip'
        placeholder='eg. 21310'
        value={zip}
        onInputChange={inputChangeHandler}
        number
      />
      <AgreeChecbox>
        <label htmlFor='checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            onChange={agreeCheckboxHandler}
          />
          <span>I agree</span>
        </label>
      </AgreeChecbox>
      <CheckoutButton
        disabled={!formState.formIsValid}
        onClick={checkoutHandler}
      >
        Checkout
      </CheckoutButton>
    </Container>
  );
};

export default CheckoutModal;
