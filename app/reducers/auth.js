import { fromJS } from 'immutable';
import { AuthTypes } from '../actions/auth';

const initialState = fromJS({});

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return state.set('payload', action.payload);

    case AuthTypes.LOGIN_SUCCESS:
      return state.set('payload', action.payload);

    case AuthTypes.LOGIN_ERROR:
      return state.set('error', action.error);

    default:
      return state;
  }
}
