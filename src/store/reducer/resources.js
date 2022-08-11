// import {UPDATE_RESOURCES} from '../actionType';

// // init states
// const initState = {
//   resources: [{}],
//   langID: 'en',
// };

// export default reducer = (state = initState, action) => {
//   switch (action.type) {
//     case UPDATE_RESOURCES:
//       return {
//         ...state,
//         resources: action.resources,
//         langID: action.langID,
//       };
//     default:
//       return state;
//   }
// };

// import {createSlice} from '@reduxjs/toolkit';

// const resources = createSlice({
//   name: 'res',
//   initialState: {
//     langID: 'en',
//     colorTheme: {
//       PRIMARY: '#03646b',
//       PRIMARY_TEXT: 'white',
//       SHOW_MORE: '#3db6fc',
//       isDark: true,
//       BACKGROUND: 'black',
//       TEXT: 'white',
//       LIGHT_GRAY: '#5c5e5c',
//       GRAY: 'grey',
//     },
//   },
//   reducers: {
//     changeLanguage: (state, action) => {
//       state.langID = action.payload;
//     },
//     changeColor: (state, action) => {
//       state.colorTheme = {
//         isDark: false,
//         BACKGROUND: 'white',
//         TEXT: 'black',
//         LIGHT_GRAY: '#c1c7c2',
//         GRAY: 'grey',
//         PRIMARY: '#03646b',
//         PRIMARY_TEXT: 'white',
//         SHOW_MORE: '#3db6fc',
//       };
//     },
//     restore: state => {
//       state.langID = 'en';
//       state.colorTheme = 'default';
//     },
//   },
// });

// export const changeLanguage = resources.actions.changeLanguage;
// export const changeColor = resources.actions.changeColor;
// export const restore = resources.actions.restore;
// export default resources.reducer;
