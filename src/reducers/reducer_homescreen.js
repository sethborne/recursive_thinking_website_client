import { HOMESCREEN_TYPES } from '../actions/types';
// import _ from 'lodash';

const initialState = {
  allHSQObj: {},
  isGettingHSGetAll: null,
  isEMHSGetAll: null,
  eMHSGetAll: null,
};

export default (state = initialState, action) => {
  const {
    HOMESCREEN_QUOTES_GET_ALL_REQUEST,
    HOMESCREEN_QUOTES_GET_ALL_SUCCESS,
    HOMESCREEN_QUOTES_GET_ALL_ERRORS,
  } = HOMESCREEN_TYPES;
  switch (action.type) {
    case HOMESCREEN_QUOTES_GET_ALL_REQUEST:
      return {
        ...state,
        isGettingHSGetAll: true,
      };
    case HOMESCREEN_QUOTES_GET_ALL_SUCCESS:
      return {
        ...state,
        isGettingHSGetAll: false,
        allHSQObj: action.payload.reduce((all, one) => {
          all[one.id] = one;
          return all;
        }, {}),
      };
    case HOMESCREEN_QUOTES_GET_ALL_ERRORS:
      return {
        ...state,
        isGettingHSGetAll: false,
        isEMHSGetAll: true,
        eMHSGetAll: action.payload,
      };
    default:
      return state;
  }
};
