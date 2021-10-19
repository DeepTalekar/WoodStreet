/*
  @author Deep
  @contributor 
*/

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REMOVE_AUTH_LOADING,
  SET_AUTH_LOADING,
} from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  registerSuccess: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
      };

    case REGISTER_FAIL:
      return state;

    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_AUTH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
