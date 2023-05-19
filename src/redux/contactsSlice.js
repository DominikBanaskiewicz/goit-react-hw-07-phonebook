import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,

  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addContactAction: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
        let isNameUnique = false;
        isNameUnique = state.contacts.some(elem => elem.name === name);
        if (!isNameUnique) {
          state.contacts.push({ id: id, name: name, number: number });
        } else {
          alert('This contact already exist');
        }
      },
      prepare(name, number) {
        return {
          payload: {
            name: name,
            number: number,
            id: nanoid(),
          },
        };
      },
    },

    removeContactAction(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    prepare(id) {
      return {
        payload: {
          id: id,
        },
      };
    },
  },
});

export const {
  addContactAction,
  removeContactAction,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
