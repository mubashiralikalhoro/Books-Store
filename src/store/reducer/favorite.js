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
        if (item == action.payload) {
          state.splice(index, 1);
        }
      });
    },
  },
});

export const addFav = favoriteSlice.actions.addFav;
export const removeFav = favoriteSlice.actions.removeFav;
export default favoriteSlice.reducer;
