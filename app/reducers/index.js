import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form';

import drawer from './drawer';
import auth from './auth';

export default combineReducers({
  drawer,
  auth,
  form,
});
