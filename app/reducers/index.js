import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form';

import auth from './auth';
import nav from './nav';

export default combineReducers({
  auth,
  form,
  nav,
});
