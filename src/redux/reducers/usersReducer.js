import {
  GET_WORKSHOP_USER_FAILURE,
  GET_WORKSHOP_USER_SUCCESS,
  GET_WORKSHOP_USER_REQUEST,
} from '../actions/types';

const initialState = {
  user: null,
  isError: false,
  isLoading: false,
};

const getWorkshopUserRequest = (state) => ({
  ...state,
  isLoading: true,
});

const getWorkshopUserFailure = (state) => ({
  ...state,
  isError: true,
  isLoading: false,
});

const getWorkshopUserSuccess = (state, name) => ({
  ...state,
  user: name,
  isError: false,
  isLoading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKSHOP_USER_REQUEST:
      return getWorkshopUserRequest(state);
    case GET_WORKSHOP_USER_FAILURE:
      return getWorkshopUserFailure(state);
    case GET_WORKSHOP_USER_SUCCESS:
      return getWorkshopUserSuccess(state, action.name);
    default:
      return state;
  }
};

export default reducer;
