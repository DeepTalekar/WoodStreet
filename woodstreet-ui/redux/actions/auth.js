/*
  @author Deep
  @contributor 
*/

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REMOVE_AUTH_LOADING,
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
