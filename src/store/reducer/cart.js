import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.unshift(action.payload);
    },
    removeItem: (state, action) => {
      state.forEach((item, index) => {
        if (item.book == action.payload.book) {
          state.splice(index, 1);
        }
      });
    },
    increaseNoOfCartItem: (state, action) => {
      state.forEach((item, index) => {
        if (item.book == action.payload.book) {
          state[index].noOfItems = state[index].noOfItems + 1;
        }
      });
    },
    decreaseNoOfCartItem: (state, action) => {
      state.forEach((item, index) => {
        if (item.book == action.payload.book) {
          state[index].noOfItems = state[index].noOfItems - 1;
        }
      });
    },
  },
});

export const addItem = cartSlice.actions.addItem;
export const removeItem = cartSlice.actions.removeItem;
export const increaseNoOfCartItem = cartSlice.actions.increaseNoOfCartItem;
export const decreaseNoOfCartItem = cartSlice.actions.decreaseNoOfCartItem;
export default cartSlice.reducer;
