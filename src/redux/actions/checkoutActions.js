import axios from 'axios';
import {
  ADD_TO_CART,
  OPEN_CHECKOUT_CART,
  CLOSE_CHECKOUT_CART,
  UPDATE_NUMBER_OF_TICKETS,
  DELETE_CHECKOUT_ITEM,
  OPEN_CHECKOUT_MODAL,
  CLOSE_CHECKOUT_MODAL,
  ORDER_SUCCESS,
  ORDER_FAILURE,
  ORDER_REQUEST,
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

const openCheckoutModal = () => ({
  type: OPEN_CHECKOUT_MODAL,
});

const closeCheckoutModal = () => ({
  type: CLOSE_CHECKOUT_MODAL,
});

const orderRequest = () => ({
  type: ORDER_REQUEST,
});

const orderSuccess = () => ({
  type: ORDER_SUCCESS,
});

const orderFailure = () => ({
  type: ORDER_FAILURE,
});

// TODO - handle action in the reducer
const orderTickets = (workshops) => async (dispatch) => {
  dispatch(orderRequest());
  try {
    const body = { products: [workshops] }; // TODO: betted request body
    await axios.post('/orders', body);
    return dispatch(orderSuccess());
  } catch {
    return dispatch(orderFailure());
  }
};

export {
  addWorkshopToCart,
  openCheckoutCart,
  closeCheckoutCart,
  updateNumberOfTickets,
  deleteCheckoutItem,
  openCheckoutModal,
  closeCheckoutModal,
  orderTickets,
};
