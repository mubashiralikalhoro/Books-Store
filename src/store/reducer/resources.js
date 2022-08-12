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
    langID: {id: 'English-US', language: 'strings', reversed: false},
    animation: true,
  },
  reducers: {
    changeLanguage: (state, action) => {
      if (action.payload == 'English-US') {
        state.langID = {id: 'English-US', language: 'strings', reversed: false};
      } else if (action.payload == 'Urdu-Pakistan') {
        state.langID = {
          id: 'Urdu-Pakistan',
          language: 'strings',
          reversed: true,
        };
      } else if (action.payload == 'Arabic-Saudi Arabia') {
        state.langID = {
          id: 'Arabic-Saudi Arabia',
          language: 'strings',
          reversed: true,
        };
      }
    },
    restore: state => {
      state.langID = 'English-US';
      state.animation = true;
    },
    disableAnimations: state => {
      state.animation = false;
    },
    enableAnimations: state => {
      state.animation = true;
    },
  },
});

export const changeLanguage = resources.actions.changeLanguage;
export const enableAnimations = resources.actions.enableAnimations;
export const disableAnimations = resources.actions.disableAnimations;
export const restore = resources.actions.restore;
export default resources.reducer;
