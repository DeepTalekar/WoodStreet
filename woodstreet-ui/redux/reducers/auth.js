/*
  @author Deep
  @contributor 
*/

import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REMOVE_AUTH_LOADING,
  RESET_LOGIN_SUCCESS,
  RESET_REGISTER_SUCCESS,
  SET_AUTH_LOADING,
} from '../actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  loginError: false,
  loginSuccess: false,
  registerSuccess: false,
  registerFail: false,
  loadUserSuccess: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
        registerFail: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        registerSuccess: false,
        registerFail: true,
      };

    case RESET_REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginSuccess: true,
        loginError: false,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loginSuccess: false,
        loginError: payload,
      };

    case RESET_LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: payload.user,
        loadUserSuccess: true,
      };

    case LOAD_USER_FAIL:
      return {
        ...state,
        user: null,
        loadUserSuccess: false,
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
