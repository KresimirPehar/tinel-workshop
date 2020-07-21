import axios from 'axios';
import {
  GET_WORKSHOPS_REQUEST,
  GET_WORKSHOPS_SUCCESS,
  GET_WORKSHOPS_FAILURE,
  GET_FILTERED_WORKSHOPS,
  GET_SIMILAR_WORKSHOPS,
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

const getSimilarWorkshops = (filter, currentId) => ({
  type: GET_SIMILAR_WORKSHOPS,
  filter,
  currentId,
});

const getWorkshops = () => async (dispatch) => {
  dispatch(getWorkshopsRequest());
  try {
    const { data } = await axios.get('/workshops');
    return dispatch(getWorkshopsSuccess(data));
  } catch {
    return dispatch(getWorkshopsFailure());
  }
};

export { getWorkshops, getFilteredWorkshops, getSimilarWorkshops };
