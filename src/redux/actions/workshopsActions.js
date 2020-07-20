import axios from 'axios';
import {
  GET_WORKSHOPS_REQUEST,
  GET_WORKSHOPS_SUCCESS,
  GET_WORKSHOPS_FAILURE,
  GET_FILTERED_WORKSHOPS,
} from './types';

const getWorkshopsRequest = () => ({
  type: GET_WORKSHOPS_REQUEST,
});

const getWorkshopsFailure = () => ({
  type: GET_WORKSHOPS_FAILURE,
});

const getWorkshopsSuccess = (data) => ({
  type: GET_WORKSHOPS_SUCCESS,
  data,
});

const getFilteredWorkshops = (filter) => ({
  type: GET_FILTERED_WORKSHOPS,
  filter,
});

const getWorkshops = () => async (dispatch) => {
  dispatch(getWorkshopsRequest());
  const result = await axios.get('/workshops');
  if (result.statusText !== 'OK') {
    return dispatch(getWorkshopsFailure());
  }
  return dispatch(getWorkshopsSuccess(result.data));
};

export { getWorkshops, getFilteredWorkshops };
