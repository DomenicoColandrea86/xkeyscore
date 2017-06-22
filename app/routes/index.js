import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Index from '../screens';
import Login from '../screens/login';
import Home from '../screens/home';

const NAV_ID = 'nav';
const INITIAL_AUTHENTICATED_ROUTE_NAME = 'Home';
const INITIAL_UNAUTHENTICATED_ROUTE_NAME = 'Login';

const AUTHENTICATED_ROUTES = {
  Home: { screen: Home },
};
const UNAUTHENTICATED_ROUTES = {
  Login: { screen: Login },
};

export const AppNavigator = StackNavigator(
  {
    Index: { screen: Index },
    ...AUTHENTICATED_ROUTES,
    ...UNAUTHENTICATED_ROUTES,
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
    mode: 'modal',
  },
);

const ConnectedAppNavigator = connect(state => ({
  [NAV_ID]: state.get(NAV_ID),
}))(props =>
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch: props.dispatch,
      state: props[NAV_ID],
    })}
  />,
);

export default class RouteConfig {
  getAppNavigator() {
    return ConnectedAppNavigator;
  }

  isAuthenticatedRouteName(routeName) {
    return !!AUTHENTICATED_ROUTES[routeName];
  }

  isUnauthenticatedRouteName(routeName) {
    return !!UNAUTHENTICATED_ROUTES[routeName];
  }

  getInitialAuthenticatedRouteName() {
    return INITIAL_AUTHENTICATED_ROUTE_NAME;
  }

  getInitialUnauthenticatedRouteName() {
    return INITIAL_UNAUTHENTICATED_ROUTE_NAME;
  }
}
