import axios from 'axios';
import {
  GET_WORKSHOP_USER_REQUEST,
  GET_WORKSHOP_USER_SUCCESS,
  GET_WORKSHOP_USER_FAILURE,
} from './types';

const getWorkshopUserRequest = () => ({
  type: GET_WORKSHOP_USER_REQUEST,
});

const getWorkshopUserFailure = () => ({
  type: GET_WORKSHOP_USER_FAILURE,
});

const getWorkshopUserSuccess = (name) => ({
  type: GET_WORKSHOP_USER_SUCCESS,
  name,
});

const getWorkshopUser = (id) => async (dispatch) => {
  dispatch(getWorkshopUserRequest());
  try {
    const { data } = await axios.get(`/users/${id}`);
    return dispatch(getWorkshopUserSuccess(data.name));
  } catch {
    return dispatch(getWorkshopUserFailure());
  }
};

export default getWorkshopUser;
