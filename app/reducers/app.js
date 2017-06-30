import { fromJS } from 'immutable';
import { AppTypes } from '../actions/app';

const initialState = fromJS({
  token: null,
  user: null,
  loading: false,
  authenticated: false,
});

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case AppTypes.SET_LOADING_STATE:
      return state.merge({ loading: action.loading });

    case AppTypes.SET_USER_STATE:
      return state.merge({ user: action.user });

    case AppTypes.AUTHENTICATE:
      return state.merge({ token: action.payload.token, authenticated: true });

    case AppTypes.UNAUTHENTICATE:
      return state.merge({ user: null, token: null, authenticated: false });

    default:
      return state;
  }
}
