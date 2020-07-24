import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Container,
  Image,
  Details,
  DeleteCheckoutItemIcon,
  Title,
  PriceContainer,
  Price,
} from './CheckoutItem.style';
import deleteCheckoutItemIcon from '../../assets/deleteCheckoutItem.svg';
import {
  updateNumberOfTickets,
  deleteCheckoutItem,
} from '../../redux/actions/checkoutActions';

const CheckoutItem = ({ id, imageUrl, title, price, numberOfTickets }) => {
  const [ticketsCount, setTicketsCount] = useState(numberOfTickets);
  const dispatch = useDispatch();

  useEffect(() => {
    // update number of tickets on number change
    if (ticketsCount !== 1) dispatch(updateNumberOfTickets(id, ticketsCount));
  }, [dispatch, ticketsCount, id]);

  const deleteCheckoutItemHandler = () => dispatch(deleteCheckoutItem(id));

  const ticketsNumberHandler = (e) => setTicketsCount(e.target.value);

  return (
    <Container>
      <Image alt='workshop' src={imageUrl} />
      <Details>
        <DeleteCheckoutItemIcon
          alt='delete workshop'
          src={deleteCheckoutItemIcon}
          onClick={deleteCheckoutItemHandler}
        />
        <Title>{title}</Title>
        <PriceContainer>
          <select value={numberOfTickets} onChange={ticketsNumberHandler}>
            {[...Array(10).keys()].map((item, key) => (
              <option key={key.toString()}>{item + 1}</option>
            ))}
          </select>
          <Price>
            <span>{price}</span> EUR
          </Price>
        </PriceContainer>
      </Details>
    </Container>
  );
};

export default CheckoutItem;
