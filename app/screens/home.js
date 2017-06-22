import React, { Component } from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Chat from '../components/chat';
import Profile from '../components/profile';
import PhotoCard from '../components/photocard';
import CustomTabBar from '../components/tabBar';

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
          <ActivityIndicator size="large" style={{ top: height / 2.2 }} />
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
