import {USER_LOGOUT, USER_LOGIN} from '../actionType';

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const login = (userData, token) => {
  return {
    type: USER_LOGIN,
    userData,
    token,
  };
};
