import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  LogoContainer,
  Content,
  CartContainer,
} from './Header.style';
import logoIcon from '../../assets/logo.svg';
import CheckoutCart from '../CheckoutCart';
import CartStatus from '../CartStatus';

const Header = () => {
  const isCartOpen = useSelector((state) => state.checkout.isOpen);

  return (
    <Container>
      <Content>
        <Link to='/'>
          <LogoContainer>
            <img src={logoIcon} alt='logo' />
          </LogoContainer>
        </Link>
        {!isCartOpen && <CartStatus />}
      </Content>
      <CartContainer isCartOpen={isCartOpen}>
        {isCartOpen && <CheckoutCart />}
      </CartContainer>
    </Container>
  );
};

export default Header;
