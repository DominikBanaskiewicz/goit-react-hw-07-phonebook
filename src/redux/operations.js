import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://6467d1e8e99f0ba0a818b607.mockapi.io';
export const fetchTasks = () => async dispatch => {
  try {
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
    console.log(response);
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};
