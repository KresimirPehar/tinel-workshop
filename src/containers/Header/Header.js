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
        {isCartOpen && <div>Cart</div>}
      </CartContainer>
    </Container>
  );
};

export default Header;
