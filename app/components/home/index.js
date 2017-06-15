import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Chat from '../chat';
import Profile from '../profile';
import PhotoCard from '../photocard';
import CustomTabBar from './tabBar';

const { height } = Dimensions.get('window');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'md-flame',
      show: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);
  }

  render() {
    if (!this.state.show)
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" color="red" style={{ top: height / 2.2 }} />
        </View>
      );
    return (
      <ScrollableTabView
        locked
        initialPage={1}
        style={{ backgroundColor: '#F5F7FB' }}
        renderTabBar={() => <CustomTabBar />}
      >
        <Profile tabLabel="md-person" />
        <PhotoCard tabLabel="md-flame" />
        <Chat tabLabel="md-chatboxes" />
      </ScrollableTabView>
    );
  }
}
