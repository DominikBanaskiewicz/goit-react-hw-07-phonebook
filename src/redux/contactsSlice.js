import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const InitialState = {
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
    addContactAction: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
        let isNameUnique = false;
        isNameUnique = state.some(elem => elem.name === name);
        if (!isNameUnique) {
          return state.concat({ id, name, number });
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
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
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

export const { addContactAction, removeContactAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
