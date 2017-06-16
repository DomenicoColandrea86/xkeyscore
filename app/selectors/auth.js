import { createSelector } from 'reselect';

const selectLoginScreenDomain = state => state.get('auth');

const selectLoginScreen = createSelector(
  selectLoginScreenDomain,
  substate => substate,
);

export { selectLoginScreen };
