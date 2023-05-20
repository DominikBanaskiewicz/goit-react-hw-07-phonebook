import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6467d1e8e99f0ba0a818b607.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number, id }, thunkAPI) => {
    try {
      console.log('tutaj');
      console.log(name, number, id);
      const response = await axios.post('/contacts', {
        name: name,
        phone: number,
        id: id,
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get('/contacts/');
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
// export const deleteContact = id => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContactSucess(response.data));
//     Notiflix.Notify.success(
//       `Success deleted contact to ${response.data.name} `
//     );
//   } catch (e) {
//     dispatch(deleteContactError(e.message));
//   }
// };
