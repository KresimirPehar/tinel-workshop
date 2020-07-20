import { GET_WORKSHOPS, GET_FILTERED_WORKSHOPS } from '../actions/types';

export const initialState = {
  workshopsData: {
    0: {
      id: '',
      title: '',
      price: '',
      imageUrl: '',
      dateTime: '',
      category: '',
    },
  },
  filteredWorkshopsData: {
    0: {
      id: '',
      title: '',
      price: '',
      imageUrl: '',
      dateTime: '',
      category: '',
    },
  },
};

const getWorkshops = (state, data) => ({
  ...state,
  workshopsData: {
    ...data,
  },
});

const getFilteredWorkshops = (state, filter) => {
  const filteredWorkshops = Object.keys(state.workshopsData).reduce(
    (obj, key) => {
      if (filter.includes(state.workshopsData[key].category)) {
        const initElement = obj;
        initElement[key] = state.workshopsData[key];
        return initElement;
      }
      return obj;
    },
    {}
  );
  return {
    ...state,
    filteredWorkshopsData: { ...filteredWorkshops },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKSHOPS:
      return getWorkshops(state, action.data);
    case GET_FILTERED_WORKSHOPS:
      return getFilteredWorkshops(state, action.filter);
    default:
      return state;
  }
};

export default reducer;
