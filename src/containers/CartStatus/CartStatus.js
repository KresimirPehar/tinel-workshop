import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartIcon from '../../assets/cart.svg';
import cartIndicatorIcon from '../../assets/cartIndicator.svg';
import {
  Container,
  CartIcons,
  CartIcon,
  CartIndicatorIcon,
  CartTitle,
} from './CartStatus.style';
import { openCheckoutCart } from '../../redux/actions/checkoutActions';

const CartStatus = () => {
  const dispatch = useDispatch();
  const checkoutItemsCount = useSelector((state) => state.checkout.itemsCount);
  const isCartOpen = useSelector((state) => state.checkout.isOpen);

  // dispatch only if the cart is closed
  const openCheckoutHandler = () => !isCartOpen && dispatch(openCheckoutCart());

  const renderCartTitle = () => {
    if (!checkoutItemsCount) return <span>Cart is Empty</span>;
    if (checkoutItemsCount === 1)
      return <span>{`1 Workshop ${!isCartOpen ? 'in Cart' : ''}`}</span>;
    return (
      <span>{`${checkoutItemsCount} Workshops ${
        !isCartOpen ? 'in Cart' : ''
      }`}</span>
    );
  };

  return (
    <Container onClick={openCheckoutHandler}>
      <CartIcons>
        <CartIcon src={cartIcon} alt='cart' />
        <CartIndicatorIcon
          src={cartIndicatorIcon}
          alt='cart items indicator'
          isVisible={checkoutItemsCount}
        />
      </CartIcons>
      <CartTitle isHighlighted={isCartOpen}>{renderCartTitle()}</CartTitle>
    </Container>
  );
};

export default CartStatus;
