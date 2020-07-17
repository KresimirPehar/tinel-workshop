import React, { useState } from 'react';
import {
  Container,
  LogoContainer,
  Content,
  CartStatus,
  CartTitle,
  CartContainer,
} from './Header.style';
import logoIcon from '../../assets/logo.svg';
import cartIcon from '../../assets/cart.svg';
import CheckoutCart from '../CheckoutCart';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartStateHandler = () => setIsCartOpen((prevState) => !prevState);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logoIcon} alt='logo' />
        </LogoContainer>
        <CartStatus onClick={cartStateHandler}>
          <img src={cartIcon} alt='cart' />
          <CartTitle>Cart is empty</CartTitle>
        </CartStatus>
      </Content>
      <CartContainer isCartOpen={isCartOpen}>
        {isCartOpen && <CheckoutCart />}
      </CartContainer>
    </Container>
  );
};

export default Header;
