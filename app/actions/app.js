const REDIRECT = 'app/REDIRECT';
const AUTHENTICATE = 'app/AUTHENTICATE';
const UNAUTHENTICATE = 'app/UNAUTHENTICATE';
const SET_USER_STATE = 'APP/SET_USER_STATE';
const SET_LOADING_STATE = 'app/SET_LOADING_STATE';

const redirect = payload => ({
  type: REDIRECT,
});

const authenticate = payload => ({
  type: AUTHENTICATE,
  payload,
});

const unauthenticate = payload => ({
  type: UNAUTHENTICATE,
  payload,
});

const setUserState = user => ({
  type: SET_USER_STATE,
  user,
});

const setLoadingState = loading => ({
  type: SET_LOADING_STATE,
  loading,
});

export const AppTypes = {
  REDIRECT,
  AUTHENTICATE,
  UNAUTHENTICATE,
  SET_USER_STATE,
  SET_LOADING_STATE,
};

export const AppActions = {
  redirect,
  authenticate,
  unauthenticate,
  setUserState,
  setLoadingState,
};
