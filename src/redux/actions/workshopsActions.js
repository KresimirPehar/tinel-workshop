import axios from 'axios';
import { GET_WORKSHOPS, GET_FILTERED_WORKSHOPS } from './types';

const getWorkshops = () => async (dispatch) => {
  const { data } = await axios.get('/workshops');
  dispatch({
    type: GET_WORKSHOPS,
    data,
  });
};

const getFilteredWorkshops = (filter) => ({
  type: GET_FILTERED_WORKSHOPS,
  filter,
});

export { getWorkshops, getFilteredWorkshops };
