import { fromJS } from 'immutable';
import { AuthTypes } from '../actions/auth';

const initialState = fromJS({
  error: null,
  payload: null,
});

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return state.merge({ payload: action.payload });

    case AuthTypes.LOGIN_SUCCESS:
      return state.merge({
        payload: action.payload,
        error: null,
      });

    case AuthTypes.LOGIN_ERROR:
      return state.merge({
        payload: null,
        error: action.error,
      });

    default:
      return state;
  }
}
