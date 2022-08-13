// import {
//   USER_LOGOUT,
//   USER_LOGIN,
//   EMAIL_VERIFY,
//   PHONE_VERIFY,
//   INTRO_DONE,
// } from '../actionType';

// // init state
// const initState = {
//   userData: {},
//   isLogin: false,
//   email: false,
//   phone: false,
//   intro: false,
// };

// export default reducer = (state = initState, action) => {
//   switch (action.type) {
//     case USER_LOGOUT:
//       return {
//         ...state,
//         isLogin: false,
//         userData: {},
//       };
//     case USER_LOGIN:
//       return {
//         ...state,
//         isLogin: true,
//         userData: action.userData,
//         token: action.token,
//       };
//     case EMAIL_VERIFY:
//       return {
//         ...state,
//         email: action.isEmailVerified,
//       };
//     case PHONE_VERIFY:
//       return {
//         ...state,
//         phone: action.isPhoneoVerified,
//       };
//     case INTRO_DONE:
//       return {
//         ...state,
//         intro: action.isIntroDone,
//       };
//     default:
//       return state;
//   }
// };

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
