import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addFav: (state, action) => {
      state.unshift(action.payload);
    },
    removeFav: (state, action) => {
      state.forEach((item, index) => {
        if (item.bookId === action.payload.bookId) {
          state.splice(index, 1);
        }
      });
    },
    clearFav: state => {
      state.splice(0, state.length);
    },
    addAllFav: (state, action) => {
      action.payload.forEach(element => state.push(element));
    },
  },
});

export const addFav = favoriteSlice.actions.addFav;
export const removeFav = favoriteSlice.actions.removeFav;
export const clearFav = favoriteSlice.actions.clearFav;

export default favoriteSlice.reducer;
