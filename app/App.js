import React, { Component } from 'react';
import AppNavigator from './AppNavigator';

class App extends Component {
  render() {
    return (
      <AppNavigator store={this.props.store} />
    );
  }
}

export default App;
