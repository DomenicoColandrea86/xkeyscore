import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Chat from '../components/chat';
import Profile from '../components/profile';
import PhotoCard from '../components/photocard';
import CustomTabBar from '../components/tabBar';
import { makeSelectUser } from '../selectors/app';

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <ScrollableTabView
        locked
        initialPage={1}
        style={{ backgroundColor: '#F5F7FB' }}
        renderTabBar={() => <CustomTabBar />}
      >
        <Profile {...this.props} tabLabel="md-person" />
        <PhotoCard tabLabel="md-flame" />
        <Chat tabLabel="md-chatboxes" />
      </ScrollableTabView>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

export default connect(mapStateToProps, null)(Home);
