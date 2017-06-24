export const AUTHENTICATE = 'app/Auth/AUTHENTICATE';
export const UNAUTHENTICATE = 'app/Auth/UNAUTHENTICATE';
export const REDIRECT = 'app/Auth/REDIRECT';

const LOGIN_REQUEST = 'app/Auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'app/Auth/LOGIN_SUCCESS';
const LOGIN_ERROR = 'app/Auth/LOGIN_ERROR';

const authenticate = payload => ({
  type: AUTHENTICATE,
  payload,
});

const unauthenticate = payload => ({
  type: UNAUTHENTICATE,
  payload,
});

const redirect = payload => ({
  type: REDIRECT,
});

const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginError = error => ({
  type: LOGIN_ERROR,
  error,
});

export const AuthTypes = {
  AUTHENTICATE,
  UNAUTHENTICATE,
  REDIRECT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
};

export const AuthActions = {
  authenticate,
  unauthenticate,
  redirect,
  loginRequest,
  loginSuccess,
  loginError,
};
