import {createSlice} from '@reduxjs/toolkit';
const myOrdersSlice = createSlice({
  name: 'myOrders',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.unshift({
        date: new Date().toDateString(),
        price: action.payload.price,
        books: action.payload.books,
      });
      console.log(state);
    },
    clearMyOrders: state => {
      while (state.length > 0) {
        state.pop();
      }
    },
  },
});

export default myOrdersSlice.reducer;
export const addOrder = myOrdersSlice.actions.addOrder;
export const clearMyOrders = myOrdersSlice.actions.clearMyOrders;
