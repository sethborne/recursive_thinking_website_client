// import axios from 'axios';

import { HOMESCREEN_TYPES } from './types';

import { CREDENTIALS } from '../credentials/credentials_Cognito.mjs';

import { ROUTES_API } from '../routes';
const API_GATEWAY_INVOKE_URL = CREDENTIALS.apiUrl;

const HTTP_METHODS = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE',
  put: 'PUT',
  patch: 'PATCH',
};

export const homeScreenQuotesGetAll = () => {
  const {
    HOMESCREEN_QUOTES_GET_ALL_REQUEST,
    HOMESCREEN_QUOTES_GET_ALL_SUCCESS,
    HOMESCREEN_QUOTES_GET_ALL_ERRORS,
  } = HOMESCREEN_TYPES;

  const URL = `${API_GATEWAY_INVOKE_URL}${ROUTES_API.homeScreenQuotes}`;
  let funcOptions = {};
  funcOptions.method = HTTP_METHODS.get;

  return async (dispatch) => {
    dispatch({ type: HOMESCREEN_QUOTES_GET_ALL_REQUEST });
    // await axios.get();
    await fetch(URL, funcOptions)
      .then((res) => {
        // console.log('res: ', res);
        if (res.ok) {
          // console.log('res1: ', res);
          return res.json();
        }
      })
      .then((res2) => {
        // console.log('res2: ', res2);

        dispatch({ type: HOMESCREEN_QUOTES_GET_ALL_SUCCESS, payload: res2 });
        return res2;
      })
      .catch((err) => {
        // console.log('err?', err);
        dispatch({ type: HOMESCREEN_QUOTES_GET_ALL_ERRORS, payload: err });
      });
  };
};
