import {
  ADD_TO_CART,
  OPEN_CHECKOUT,
  CLOSE_CHECKOUT,
  UPDATE_NUMBER_OF_TICKETS,
  DELETE_CHECKOUT_ITEM,
} from '../actions/types';

const initialState = {
  items: {},
  itemsCount: 0,
  isOpen: false,
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

const openCheckout = (state) => ({
  ...state,
  isOpen: true,
});

const closeCheckout = (state) => ({
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addWorkshopToCart(
        state,
        action.workshopDetails,
        action.numberOfTickets
      );
    case OPEN_CHECKOUT:
      return openCheckout(state);
    case CLOSE_CHECKOUT:
      return closeCheckout(state);
    case UPDATE_NUMBER_OF_TICKETS:
      return updateNumberOfTickets(state, action.id, action.numberOfTickets);
    case DELETE_CHECKOUT_ITEM:
      return deleteCheckoutItem(state, action.id);
    default:
      return state;
  }
};

export default reducer;
