import {
  ADD_TO_CART,
  OPEN_CHECKOUT,
  CLOSE_CHECKOUT,
  UPDATE_NUMBER_OF_TICKETS,
  DELETE_CHECKOUT_ITEM,
} from './types';

const addWorkshopToCart = (workshopDetails, numberOfTickets) => ({
  type: ADD_TO_CART,
  workshopDetails,
  numberOfTickets,
});

const openCheckout = () => ({
  type: OPEN_CHECKOUT,
});

const closeCheckout = () => ({
  type: CLOSE_CHECKOUT,
});

const updateNumberOfTickets = (id, numberOfTickets) => ({
  type: UPDATE_NUMBER_OF_TICKETS,
  id,
  numberOfTickets,
});

const deleteCheckoutItem = (id) => ({
  type: DELETE_CHECKOUT_ITEM,
  id,
});

export {
  addWorkshopToCart,
  openCheckout,
  closeCheckout,
  updateNumberOfTickets,
  deleteCheckoutItem,
};
