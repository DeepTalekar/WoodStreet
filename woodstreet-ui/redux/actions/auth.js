/*
  @author Deep
  @contributor 
*/

import {
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REFRESH_FAIL,
  REFRESH_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REMOVE_AUTH_LOADING,
  RESET_LOGIN_SUCCESS,
  RESET_REGISTER_SUCCESS,
  SET_AUTH_LOADING,
} from './types';

export const checkAuthStatus = () => async (dispatch) => {
  try {
    const res = await fetch('/api/accounts/verify/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status === 200) {
      dispatch({
        type: AUTHENTICATED_SUCCESS,
      });
      dispatch(loadUser());
    } else
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
  } catch (err) {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

export const requestRefreshToken = () => async (dispatch) => {
  try {
    const res = await fetch('/api/accounts/refresh/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status === 200) {
      dispatch({ type: REFRESH_SUCCESS });
      dispatch(checkAuthStatus());
    } else {
      dispatch({ type: REFRESH_FAIL });
    }
  } catch (err) {
    dispatch({ type: REFRESH_FAIL });
  }
};

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
      dispatch(loadUser());
    } else {
      const data = await res.json();
      dispatch({ type: LOGIN_FAIL, payload: data.error });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: { error: 'Something went Wrong while loggin In!' },
    });
  }

  dispatch({
    type: REMOVE_AUTH_LOADING,
  });
};

export const resetLoginSuccess = () => (dispatch) => {
  dispatch({
    type: RESET_LOGIN_SUCCESS,
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: SET_AUTH_LOADING,
  });

  try {
    const res = await fetch('/api/accounts/logout/', {
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

export const loadUser = () => async (dispatch) => {
  try {
    const res = await fetch('/api/accounts/user/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
    });
  }
};
