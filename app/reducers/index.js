// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import drawer from './drawer';
import auth from './auth';

export default combineReducers({
  drawer,
  auth,
});
