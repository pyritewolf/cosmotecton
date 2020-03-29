import { combineReducers } from 'redux';
import auth from './auth';
import worlds from './worlds';

export default combineReducers({
  auth,
  worlds
});