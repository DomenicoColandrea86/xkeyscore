import * as Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import App from '../index';
import configureStore from '../store';
import getTheme from '../../lib/native-base-theme/components';
import variables from '../../lib/native-base-theme/variables/commonColor';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
      isReady: false,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('../../assets/fonts/Roboto.ttf'),
      Roboto_medium: require('../../assets/fonts/Roboto_medium.ttf'),
      arial: require('../../assets/fonts/Arial.ttf'),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <Provider store={this.state.store}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
