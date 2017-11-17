import React from 'react';
import InitializeApp from './app/config/initialize';

// set up some global environment variables
import './app/config/initialize/env';

// set up proper unhandled promise rejection handling
import './app/config/initialize/promises';

// configure which warnings we can safely ignore
import './app/config/initialize/warnings';

// configure which errors we can safely ignore
import './app/config/initialize/errors';

// we need to turn on LayoutAnimation for android
import './app/config/initialize/layoutAnimation';

export default class App extends React.Component {
  render() {
    return <InitializeApp />;
  }
}
