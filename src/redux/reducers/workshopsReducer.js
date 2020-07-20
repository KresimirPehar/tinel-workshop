import {
  GET_WORKSHOPS_REQUEST,
  GET_WORKSHOPS_FAILURE,
  GET_WORKSHOPS_SUCCESS,
  GET_FILTERED_WORKSHOPS,
} from '../actions/types';

export const initialState = {
  workshopsData: {},
  filteredWorkshopsData: {},
  isLoading: false,
  isError: false,
};

const getWorkshopsRequest = (state) => ({
  ...state,
  isLoading: true,
});

const getWorkshopsFailure = (state) => ({
  ...state,
  isLoading: false,
  isError: true,
});

const getWorkshopsSuccess = (state, data) => ({
  ...state,
  workshopsData: {
    ...data,
  },
  isLoading: false,
  isError: false,
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
    case GET_WORKSHOPS_REQUEST:
      return getWorkshopsRequest(state);
    case GET_WORKSHOPS_FAILURE:
      return getWorkshopsFailure(state);
    case GET_WORKSHOPS_SUCCESS:
      return getWorkshopsSuccess(state, action.data);
    case GET_FILTERED_WORKSHOPS:
      return getFilteredWorkshops(state, action.filter);
    default:
      return state;
  }
};

export default reducer;
