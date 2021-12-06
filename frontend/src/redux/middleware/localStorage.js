//* IMPORTS
import {
  USER_LOGIN_SUCCESS,
  USER_AUTH_SUCCESS,
  USER_LOGOUT,
} from '../ducks/user';

export const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);

    if ([USER_LOGIN_SUCCESS].includes(result.type)) {
      localStorage.setItem('user', JSON.stringify(getState().user.user));
    }

    if ([USER_AUTH_SUCCESS].includes(result.type)) {
      localStorage.setItem('user', JSON.stringify(getState().user.user));
    }

    if ([USER_LOGOUT].includes(result.type)) {
      localStorage.removeItem('user');
    }

    return result;
  };
};

export const loadLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('user'));
  if (!data || !Object.keys(data).length) return undefined;
  return { user: { user: data, isLoggedIn: false } };
};
