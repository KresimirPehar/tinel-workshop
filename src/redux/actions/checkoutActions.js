import {
  ADD_TO_CART,
  OPEN_CHECKOUT_CART,
  CLOSE_CHECKOUT_CART,
  UPDATE_NUMBER_OF_TICKETS,
  DELETE_CHECKOUT_ITEM,
} from './types';

const addWorkshopToCart = (workshopDetails, numberOfTickets) => ({
  type: ADD_TO_CART,
  workshopDetails,
  numberOfTickets,
});

const openCheckoutCart = () => ({
  type: OPEN_CHECKOUT_CART,
});

const closeCheckoutCart = () => ({
  type: CLOSE_CHECKOUT_CART,
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
  openCheckoutCart,
  closeCheckoutCart,
  updateNumberOfTickets,
  deleteCheckoutItem,
};
