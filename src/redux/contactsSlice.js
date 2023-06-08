import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from 'redux/operations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase((state, action) => {
        state.error = 'someone use old function, fix it!';
      });
  },
});
export const contactsReducer = contactSlice.reducer;
// reducers: {
//   fetchingInProgress(state) {
//     state.isLoading = true;
//   },
//   fetchingSuccess(state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.contacts = action.payload;
//     removeContactAction();
//   },
//   fetchingError(state, action) {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
//   deleteContactSucess(state, action) {
//     state.isLoading = false;
//     state.error = null;
//     //removeContactAction(action.payload.id);
//   },
//   deleteContactError(state, action) {
//     Notiflix.Notify.warning(`Please try do it again`);
//     state.error = action.payload;
//   },

//   addContactAction: {
//     reducer(state, action) {
//       const { id, name, number } = action.payload;
//       let isNameUnique = false;
//       isNameUnique = state.contacts.some(elem => elem.name === name);
//       if (!isNameUnique) {
//         state.contacts.push({ id: id, name: name, number: number });
//       } else {
//         alert('This contact already exist');
//       }
//     },
//     prepare(name, number) {
//       return {
//         payload: {
//           name: name,
//           number: number,
//           id: nanoid(),
//         },
//       };
//     },
//   },

//   removeContactAction: {
//     reducer(state, action) {
//       const index = state.contacts.findIndex(contact => {
//         return contact.id === action.payload.id;
//       });

//       state.contacts.splice(index, 1);
//     },
//     prepare(id) {
//       return {
//         payload: {
//           id: id,
//         },
//       };
//     },
//   },
// },
