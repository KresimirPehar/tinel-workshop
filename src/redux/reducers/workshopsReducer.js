import { GET_WORKSHOPS } from '../actions/types';

export const initialState = {
  workshopsData: {
    0: {
      id: '',
      title: '',
      price: '',
      imageUrl: '',
      dateTime: '',
    },
  },
};

const getWorkshops = (state, payload) => ({
  ...state,
  workshopsData: {
    ...payload,
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKSHOPS:
      return getWorkshops(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
