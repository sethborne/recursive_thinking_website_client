import { combineReducers } from 'redux';
import HomeScreenReducer from './reducer_homescreen.js';

export default combineReducers({
  homescreen: HomeScreenReducer,
});
