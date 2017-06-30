const LOGIN_REQUEST = 'app/Auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'app/Auth/LOGIN_SUCCESS';
const LOGIN_ERROR = 'app/Auth/LOGIN_ERROR';

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
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
};

export const AuthActions = {
  loginRequest,
  loginSuccess,
  loginError,
};
