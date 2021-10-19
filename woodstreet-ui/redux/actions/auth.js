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
} from './types';

export const register =
  (first_name, last_name, username, email, password) => async (dispatch) => {
    dispatch({
      type: SET_AUTH_LOADING,
    });

    try {
      const body = JSON.stringify({
        first_name,
        last_name,
        username,
        email,
        password,
      });

      const response = await fetch('/api/accounts/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
      });

      if (response.status === 201) {
        dispatch({
          type: REGISTER_SUCCESS,
        });
      } else {
        dispatch({
          type: REGISTER_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
      });
    }

    dispatch({
      type: REMOVE_AUTH_LOADING,
    });
  };

export const resetRegisterSuccess = () => (dispatch) => {
  dispatch({
    type: RESET_REGISTER_SUCCESS,
  });
};

export const login = (username, password) => async (dispatch) => {
  const body = JSON.stringify({
    username,
    password,
  });

  dispatch({
    type: SET_AUTH_LOADING,
  });

  try {
    const res = await fetch('/api/accounts/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body,
    });

    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    } else {
      dispatch({ type: LOGIN_FAIL });
    }
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }

  dispatch({
    type: REMOVE_AUTH_LOADING,
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
  });

  try {
    const res = await fetch('api/accounts/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (res.status === 200) {
      dispatch({ type: LOGOUT_SUCCESS });
    } else {
      dispatch({ type: LOGOUT_FAIL });
    }
  } catch (err) {
    dispatch({ type: LOGOUT_FAIL });
  }

  dispatch({
    type: REMOVE_AUTH_LOADING,
  });
};
