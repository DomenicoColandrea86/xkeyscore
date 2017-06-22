import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import RouteConfig from './routes';
import { statusBarColor } from './theme';

const routeConfig = new RouteConfig();
const AppNavigator = routeConfig.getAppNavigator();

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={statusBarColor} barStyle="default" />
        <AppNavigator />
      </View>
    );
  }
}

export default App;
