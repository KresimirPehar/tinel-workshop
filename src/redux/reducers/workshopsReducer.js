import {
  GET_WORKSHOPS_REQUEST,
  GET_WORKSHOPS_FAILURE,
  GET_WORKSHOPS_SUCCESS,
  GET_FILTERED_WORKSHOPS,
  GET_SIMILAR_WORKSHOPS,
} from '../actions/types';
import { filterByCategory } from '../../utils/helpers';

export const initialState = {
  workshopsData: {},
  filteredWorkshopsData: {},
  similarWorkshops: {},
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
  const filteredWorkshops = filterByCategory(state.workshopsData, filter);
  return {
    ...state,
    filteredWorkshopsData: { ...filteredWorkshops },
  };
};

const getSimilarWorkshops = (state, filter, currentId) => {
  const filteredWorkshops = filterByCategory(state.workshopsData, filter);

  const similarWorkshops = Object.keys(filteredWorkshops).reduce((obj, key) => {
    if (currentId !== filteredWorkshops[key].id) {
      const initElement = obj;
      initElement[key] = filteredWorkshops[key];
      return initElement;
    }
    return obj;
  }, {});

  return {
    ...state,
    similarWorkshops: { ...similarWorkshops },
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
    case GET_SIMILAR_WORKSHOPS:
      return getSimilarWorkshops(state, action.filter, action.currentId);
    default:
      return state;
  }
};

export default reducer;
