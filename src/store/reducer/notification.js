import {createSlice} from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.unshift(action.payload);
    },
    removeNotification: (state, action) => {
      state.forEach((element, index) => {
        if (element.notification.id == action.payload.id) {
          state.splice(index, 1);
        }
      });
    },
    clearNotification: state => {
      state.splice(0, state.length);
    },
    addAllNotification: (state, action) => {
      action.payload.forEach(element => state.push(element));
    },
  },
});

export const addNotification = notificationSlice.actions.addNotification;
export const removeNotification = notificationSlice.actions.removeNotification;
export const clearNotification = notificationSlice.actions.clearNotification;
export default notificationSlice.reducer;
