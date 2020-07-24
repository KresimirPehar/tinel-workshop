import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Container,
  Heading,
  CheckoutButton,
  CloseCheckoutIcon,
  SubtotalContainer,
  SubtotalTitle,
  Subtotal,
} from './CheckoutCart.style';
import CartStatus from '../CartStatus';
import closeCheckoutIcon from '../../assets/closeCheckout.svg';
import {
  closeCheckoutCart,
  openCheckoutModal,
} from '../../redux/actions/checkoutActions';
import CheckoutItem from '../CheckoutItem';

const CheckoutCart = () => {
  const dispatch = useDispatch();
  const checkoutItems = useSelector((state) => state.checkout.items);

  const subtotal = Object.keys(checkoutItems).reduce(
    (total, current) => checkoutItems[current].workshopSubtotal + total,
    0
  );

  const closeCheckoutHandler = () => dispatch(closeCheckoutCart());

  const checkoutModalHandler = () => dispatch(openCheckoutModal());

  return (
    <Container>
      <Heading>
        <CartStatus />
        <CloseCheckoutIcon
          alt='close checkout'
          src={closeCheckoutIcon}
          onClick={closeCheckoutHandler}
        />
      </Heading>
      {Object.keys(checkoutItems).map((item) => (
        <CheckoutItem
          key={checkoutItems[item].id}
          id={checkoutItems[item].id}
          title={checkoutItems[item].title}
          price={checkoutItems[item].price}
          imageUrl={checkoutItems[item].imageUrl}
          numberOfTickets={checkoutItems[item].numberOfTickets}
        />
      ))}
      <SubtotalContainer>
        <SubtotalTitle>Subtotal</SubtotalTitle>
        <Subtotal>
          <span>{subtotal}</span> EUR
        </Subtotal>
      </SubtotalContainer>
      <Link to='/'>
        <CheckoutButton onClick={checkoutModalHandler}>Checkout</CheckoutButton>
      </Link>
    </Container>
  );
};

export default CheckoutCart;
