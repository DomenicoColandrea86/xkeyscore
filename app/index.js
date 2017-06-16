import React, { Component } from 'react';
import AppNavigator from './routes';

class App extends Component {
  render() {
    return <AppNavigator store={this.props.store} />;
  }
}

export default App;
