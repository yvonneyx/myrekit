import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  EXAMPLES_LOGIN,
} from './constants';

export function login() {
  return {
    type: EXAMPLES_LOGIN,
  };
}

export function useLogin() {
  const dispatch = useDispatch();
  const boundAction = useCallback((...params) => dispatch(login(...params)), [dispatch]);
  const loggedIn = useSelector(state => state.examples.loggedIn);
  return { login: boundAction, loggedIn };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };

    default:
      return state;
  }
}
