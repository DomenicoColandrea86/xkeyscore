import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from '../screens/login';
import Home from '../components/home';
import ChatOne from '../components/chatOne';
import ChatScreen from '../components/chatScreen';
import Settings from '../components/settings';
import Profile from '../components/profile';
import EditProfile from '../components/editProfile/editprofile';
import MainImage from '../components/editProfile/main-image';
import CurrentWork from '../components/editProfile/currentWork';
import School from '../components/editProfile/school';
import AddPhoto from '../components/editProfile/addphoto';
import UserDetails from '../components/user-details';
import PhotoCardDetails from '../components/photo-card-details';
import { statusBarColor } from '../theme';

const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={statusBarColor} barStyle="default" />
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="login" component={Login} hideNavBar initial />
            <Scene key="settings" component={Settings} />
            <Scene key="chatone" component={ChatOne} />
            <Scene key="home" component={Home} />
            <Scene key="chatScreen" component={ChatScreen} />
            <Scene key="userDetails" component={UserDetails} />
            <Scene key="profile" component={Profile} />
            <Scene key="editprofile" component={EditProfile} />
            <Scene key="mainImage" component={MainImage} />
            <Scene key="currentwork" component={CurrentWork} />
            <Scene key="school" component={School} />
            <Scene key="addphoto" component={AddPhoto} />
            <Scene key="photoCardDetails" component={PhotoCardDetails} />
          </Scene>
        </RouterWithRedux>
      </View>
    );
  }
}

export default connect()(AppNavigator);
