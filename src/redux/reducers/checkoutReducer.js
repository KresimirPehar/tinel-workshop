import {
  ADD_TO_CART,
  UPDATE_NUMBER_OF_TICKETS,
  DELETE_CHECKOUT_ITEM,
  OPEN_CHECKOUT_CART,
  CLOSE_CHECKOUT_CART,
  OPEN_CHECKOUT_MODAL,
  CLOSE_CHECKOUT_MODAL,
  ORDER_SUCCESS,
} from '../actions/types';

const initialState = {
  items: {},
  itemsCount: 0,
  isOpen: false,
  isCheckoutModalOpen: false,
};

const addWorkshopToCart = (state, workshopDetails, numberOfTickets) => {
  // increase number of tickets if the workshop is already in the cart
  if (state.items[workshopDetails.id]?.numberOfTickets < 10) {
    if (
      Object.keys(state.items).some(
        (item) => state.items[item].id === workshopDetails.id
      )
    ) {
      const newNumberOfTickets =
        state.items[workshopDetails.id].numberOfTickets + 1;
      return {
        ...state,
        isOpen: true,
        items: {
          ...state.items,
          [workshopDetails.id]: {
            ...workshopDetails,
            numberOfTickets: newNumberOfTickets,
            workshopSubtotal:
              state.items[workshopDetails.id].price * newNumberOfTickets,
          },
        },
      };
    }
  }
  // forbid more than 10 tickets for the one workshop
  else if (state.items[workshopDetails.id]?.numberOfTickets > 9) {
    return {
      ...state,
      isOpen: true,
      items: {
        ...state.items,
        [workshopDetails.id]: {
          ...workshopDetails,
          numberOfTickets: 10,
          workshopSubtotal: 10 * workshopDetails.price,
        },
      },
    };
  }
  // add the workshop if it is not in the cart
  return {
    ...state,
    isOpen: true,
    itemsCount: state.itemsCount + 1,
    items: {
      ...state.items,
      [workshopDetails.id]: {
        ...workshopDetails,
        numberOfTickets,
        workshopSubtotal: numberOfTickets * workshopDetails.price,
      },
    },
  };
};

const openCheckoutCart = (state) => ({
  ...state,
  isOpen: true,
});

const closeCheckoutCart = (state) => ({
  ...state,
  isOpen: false,
});

const updateNumberOfTickets = (state, id, numberOfTickets) => ({
  ...state,
  items: {
    ...state.items,
    [id]: {
      ...state.items[id],
      numberOfTickets,
      workshopSubtotal: state.items[id].price * numberOfTickets,
    },
  },
});

const deleteCheckoutItem = (state, id) => {
  const { [id]: deletedItem, ...rest } = state.items;
  return {
    ...state,
    itemsCount: state.itemsCount - 1,
    items: { ...rest },
  };
};

const openCheckoutModal = (state) => ({
  ...state,
  isOpen: false,
  isCheckoutModalOpen: true,
});

const closeCheckoutModal = (state) => ({
  ...state,
  isCheckoutModalOpen: false,
});

const orderSuccess = (state) => ({
  ...state,
  isCheckoutModalOpen: false,
  items: {},
  itemsCount: 0,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addWorkshopToCart(
        state,
        action.workshopDetails,
        action.numberOfTickets
      );
    case OPEN_CHECKOUT_CART:
      return openCheckoutCart(state);
    case CLOSE_CHECKOUT_CART:
      return closeCheckoutCart(state);
    case UPDATE_NUMBER_OF_TICKETS:
      return updateNumberOfTickets(state, action.id, action.numberOfTickets);
    case DELETE_CHECKOUT_ITEM:
      return deleteCheckoutItem(state, action.id);
    case OPEN_CHECKOUT_MODAL:
      return openCheckoutModal(state);
    case CLOSE_CHECKOUT_MODAL:
      return closeCheckoutModal(state);
    case ORDER_SUCCESS:
      return orderSuccess(state);
    default:
      return state;
  }
};

export default reducer;
