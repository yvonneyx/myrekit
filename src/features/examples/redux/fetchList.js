import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  EXAMPLES_FETCH_LIST_BEGIN,
  EXAMPLES_FETCH_LIST_SUCCESS,
  EXAMPLES_FETCH_LIST_FAILURE,
  EXAMPLES_FETCH_LIST_DISMISS_ERROR,
} from './constants';
import axios from 'axios';

export function fetchList(args = {}) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: EXAMPLES_FETCH_LIST_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      // const doRequest = args.error ? Promise.reject(new Error()) : Promise.resolve();
      const doRequest = axios.get('https://hn.algolia.com/api/v1/search?query=redux');

      doRequest.then(
        (res) => {
          dispatch({
            type: EXAMPLES_FETCH_LIST_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        (err) => {
          dispatch({
            type: EXAMPLES_FETCH_LIST_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

export function dismissFetchListError() {
  return {
    type: EXAMPLES_FETCH_LIST_DISMISS_ERROR,
  };
}

export function useFetchList(params) {
  const dispatch = useDispatch();

  const { listItems, fetchListPending, fetchListError } = useSelector(
    state => ({
      listItems: state.examples.listItems,
      fetchListPending: state.examples.fetchListPending,
      fetchListError: state.examples.fetchListError,
    }),
    shallowEqual,
  );

  const boundAction = useCallback((...args) => {
    return dispatch(fetchList(...args));
  }, [dispatch]);

  useEffect(() => {
    if (params) boundAction(...(params || []));
  }, [...(params || []), boundAction]); // eslint-disable-line

  const boundDismissError = useCallback(() => {
    return dispatch(dismissFetchListError());
  }, [dispatch]);

  return {
    listItems,
    fetchList: boundAction,
    fetchListPending,
    fetchListError,
    dismissFetchListError: boundDismissError,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case EXAMPLES_FETCH_LIST_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchListPending: true,
        fetchListError: null,
      };

    case EXAMPLES_FETCH_LIST_SUCCESS:
      // The request is success
      return {
        ...state,
        listItems: action.data.data.hits,
        fetchListPending: false,
        fetchListError: null,
      };

    case EXAMPLES_FETCH_LIST_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchListPending: false,
        fetchListError: action.data.error,
      };

    case EXAMPLES_FETCH_LIST_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        fetchListError: null,
      };

    default:
      return state;
  }
}
