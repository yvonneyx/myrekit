import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  EXAMPLES_LOGOUT,
} from './constants';

export function logout() {
  return {
    type: EXAMPLES_LOGOUT,
  };
}

export function useLogout() {
  const dispatch = useDispatch();
  const boundAction = useCallback((...params) => dispatch(logout(...params)), [dispatch]);
  return { logout: boundAction };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
}
