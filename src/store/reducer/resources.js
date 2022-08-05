import {UPDATE_RESOURCES} from '../actionType';

// init states
const initState = {
  resources: [{}],
  langID: 'en',
};

export default reducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_RESOURCES:
      return {
        ...state,
        resources: action.resources,
        langID: action.langID,
      };
    default:
      return state;
  }
};
