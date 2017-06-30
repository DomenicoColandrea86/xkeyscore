import { createSelector } from 'reselect';

const selectApp = state => state.get('app');

const makeSelectUser = () =>
  createSelector(selectApp, appState => appState.get('user').toJS());

const makeSelectLoading = () =>
  createSelector(selectApp, appState => appState.get('loading'));

export { selectApp, makeSelectUser, makeSelectLoading };
