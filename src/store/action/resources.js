import {UPDATE_RESOURCES} from '../actionType';

export const update_resources = (resources, langID) => {
  console.log('From Action ', resources);
  return {
    type: UPDATE_RESOURCES,
    resources,
    langID,
  };
};
