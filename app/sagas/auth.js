import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AuthActions, AuthTypes } from '../actions/auth';
import api from '../api';

function* requestLoginAsync({ payload }) {
  const response = yield call(api.auth.login, payload);
  if (!response.data.err) {
    yield put(AuthActions.loginSuccess(response.data));
  } else {
    yield put(AuthActions.loginError(response.data.err));
  }
}

const asyncAuthWatchers = [
  function* asyncLoginWatcher() {
    yield all([takeLatest(AuthTypes.LOGIN_REQUEST, requestLoginAsync)]);
  },
];

export default asyncAuthWatchers;
