import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

import api from '../api';
import { AppActions, AppTypes } from '../actions/app';
import { AuthActions, AuthTypes } from '../actions/auth';
import RouteConfig from '../routes';
import UserService from '../services/UserService';

const routeConfig = new RouteConfig();
const isAuthenticatedRouteName = routeConfig.isAuthenticatedRouteName;
const isUnauthenticatedRouteName = routeConfig.isUnauthenticatedRouteName;
const initialAuthenticatedRouteName = routeConfig.getInitialAuthenticatedRouteName();
const initialUnauthenticatedRouteName = routeConfig.getInitialUnauthenticatedRouteName();

const redirectFlow = function* redirectFlow() {
  let state = yield select();
  state = state.toJS();
  const authenticated = state.app.authenticated;
  const index = state.nav.index;
  const routeName = state.nav.routes[index].routeName;

  if (authenticated && !isAuthenticatedRouteName(routeName)) {
    yield put(
      NavigationActions.navigate({ routeName: initialAuthenticatedRouteName }),
    );
  } else if (!authenticated && !isUnauthenticatedRouteName(routeName)) {
    yield put(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: initialUnauthenticatedRouteName,
          }),
        ],
      }),
    );
  }
};

const authenticateFlow = function* authenticateFlow() {
  yield put(AppActions.redirect());
};

const unauthenticateFlow = function* unauthenticateFlow() {
  yield put(AppActions.redirect());
};

const requestLoginAsync = function* requestLoginAsync({ payload }) {
  const response = yield call(api.auth.login, payload.toJS());
  if (!response.data.err) {
    yield put(AuthActions.loginSuccess(response.data));
    const user = yield call(UserService.getUserFromJwt, response.data.token);
    yield put(AppActions.setUserState(user));
    yield put(AppActions.authenticate(response.data));
  } else {
    yield put(AuthActions.loginError(response.data.err));
  }
};

const asyncAuthWatchers = [
  function* asyncRedirectWatcher() {
    yield all([takeLatest(AppTypes.REDIRECT, redirectFlow)]);
  },
  function* asyncAuthenticateWatcher() {
    yield all([takeLatest(AppTypes.AUTHENTICATE, authenticateFlow)]);
  },
  function* asyncUnauthenticateWatcher() {
    yield all([takeLatest(AppTypes.UNAUTHENTICATE, unauthenticateFlow)]);
  },
  function* asyncLoginWatcher() {
    yield all([takeLatest(AuthTypes.LOGIN_REQUEST, requestLoginAsync)]);
  },
];

export default asyncAuthWatchers;
