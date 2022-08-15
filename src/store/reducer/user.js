import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    userLoggedIn: (state, action) => {
      if (state.length == 0) {
        state.push(action.payload);
      }
    },
    userLoggedOut: state => {
      state.pop();
    },
    userUpdate: (state, action) => {
      state[0] = action.payload;
    },
  },
});

export const userLoggedIn = userSlice.actions.userLoggedIn;
export const userUpdate = userSlice.actions.userUpdate;
export const userLoggedOut = userSlice.actions.userLoggedOut;
export default userSlice.reducer;
