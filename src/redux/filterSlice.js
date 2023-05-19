import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filterReducer',
  initialState: filterInitialState,
  reducers: {
    changeFilterAction: {
      reducer(state, action) {
        console.log(state.filter);
        state = action.payload;
        return state;
      },
    },
  },
  prepare(filter) {
    return {
      payload: {
        filter: filter,
      },
    };
  },
});

export const { changeFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
