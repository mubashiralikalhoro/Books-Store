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
import {act} from 'react-test-renderer';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state = action.payload;
    },
    userLoggedOut: (state, action) => {
      state = null;
    },
  },
});

export const userLoggedIn = userSlice.actions.userLoggedIn;
export const userLoggedOut = userSlice.actions.userLoggedOut;
export default userSlice.reducer;
