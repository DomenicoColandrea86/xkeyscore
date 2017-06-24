import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import api from '../api';
import { AuthActions, AuthTypes } from '../actions/auth';
import RouteConfig from '../routes';

const routeConfig = new RouteConfig();
const isAuthenticatedRouteName = routeConfig.isAuthenticatedRouteName;
const isUnauthenticatedRouteName = routeConfig.isUnauthenticatedRouteName;
const initialAuthenticatedRouteName = routeConfig.getInitialAuthenticatedRouteName();
const initialUnauthenticatedRouteName = routeConfig.getInitialUnauthenticatedRouteName();

function* redirectFlow() {
  let state = yield select();
  state = state.toJS();
  const authenticated = state.auth.authenticated;
  const index = state.nav.index;
  const routeName = state.nav.routes[index].routeName;

  const redirectRoute = (name, childRouteName) =>
    NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: name })],
    });

  if (authenticated && !isAuthenticatedRouteName(routeName)) {
    yield put(redirectRoute(initialAuthenticatedRouteName));
  } else if (!authenticated && !isUnauthenticatedRouteName(routeName)) {
    yield put(redirectRoute(initialUnauthenticatedRouteName));
  }
}

function* authenticateFlow() {
  yield put(AuthActions.redirect());
}

function* unauthenticateFlow() {
  yield put(AuthActions.redirect());
}

function* requestLoginAsync({ payload }) {
  const response = yield call(api.auth.login, payload.toJS());
  if (!response.data.err) {
    yield put(AuthActions.loginSuccess(response.data));
    yield put(NavigationActions.navigate({ routeName: 'Home' }));
  } else {
    yield put(AuthActions.loginError(response.data.err));
  }
}

const asyncAuthWatchers = [
  function* asyncRedirectWatcher() {
    yield all([takeLatest(AuthTypes.REDIRECT, redirectFlow)]);
  },
  function* asyncAuthenticateWatcher() {
    yield all([takeLatest(AuthTypes.AUTHENTICATE, authenticateFlow)]);
  },
  function* asyncUnauthenticateWatcher() {
    yield all([takeLatest(AuthTypes.UNAUTHENTICATE, unauthenticateFlow)]);
  },
  function* asyncLoginWatcher() {
    yield all([takeLatest(AuthTypes.LOGIN_REQUEST, requestLoginAsync)]);
  },
];

export default asyncAuthWatchers;
