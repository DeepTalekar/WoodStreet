/*
  @author Deep
  @contributor 
*/

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REMOVE_AUTH_LOADING,
  RESET_REGISTER_SUCCESS,
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

    case RESET_REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
      };
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
