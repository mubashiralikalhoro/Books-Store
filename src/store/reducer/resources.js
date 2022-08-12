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

import {createSlice} from '@reduxjs/toolkit';

const resources = createSlice({
  name: 'res',
  initialState: {
    langID: 'en',
    animations: true,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.langID = action.payload;
    },
    restore: state => {
      state.langID = 'en';
      state.animations = true;
    },
    disableAnimations: state => {
      state.animations = false;
    },
    enableAnimations: state => {
      state.animations = true;
    },
  },
});

export const changeLanguage = resources.actions.changeLanguage;
export const enableAnimations = resources.actions.enableAnimations;
export const disableAnimations = resources.actions.disableAnimations;
export const restore = resources.actions.restore;
export default resources.reducer;
