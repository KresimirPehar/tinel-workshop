import axios from 'axios';
import { GET_WORKSHOPS } from './types';

const getWorkShops = () => async (dispatch) => {
  const { data } = await axios.get('/workshops');
  dispatch({
    type: GET_WORKSHOPS,
    payload: data,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { getWorkShops };
