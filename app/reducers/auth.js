import { fromJS } from 'immutable';
import { AuthTypes } from '../actions/auth';

const initialState = fromJS({
  error: null,
  payload: null,
  authenticated: false,
});

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.AUTHENTICATE:
      return state.set('authenticated', true);

    case AuthTypes.UNAUTHENTICATE:
      return state.set('authenticated', false);

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
