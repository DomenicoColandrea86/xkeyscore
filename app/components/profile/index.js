import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Text, Container, Content, Icon, Button } from 'native-base';
import Initicon from 'react-initicon/native';
import styles from './style';

class Profile extends Component {
  render() {
    const { user } = this.props;
    return (
      <Container style={styles.container}>
        <Content scrollEnabled={false}>
          <View style={styles.profileImageView}>
            <Initicon
              style={styles.profileImage}
              size={100}
              text={`${user.firstName} ${user.lastName}`}
              seed={Math.random()}
              single={false}
            />
            <TouchableOpacity
              style={styles.editIconView}
              onPress={() => Actions.editprofile()}
            >
              <Icon active name="create" style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.profiledescription}>
            <View style={styles.nameandage}>
              <Text style={styles.nameandagetext}>
                {user.firstName} {user.lastName}
              </Text>
            </View>
            <View style={styles.workplace}>
              <Text style={styles.workplacetext}>
                {user.address}
              </Text>
            </View>
            <View style={styles.college}>
              <Text style={styles.collegeText}>
                {user.city}, {user.stateProv}
              </Text>
            </View>
            <Button
              transparent
              onPress={() => Actions.settings()}
              style={styles.settingsBtnView}
            >
              <Icon name="md-settings" style={styles.settingsIcon} />
              <Text style={styles.settingsText}>SETTINGS</Text>
            </Button>
          </View>
        </Content>
        <View style={styles.goinOut}>
          <View style={styles.goinOutView}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>
              Going Out Tonight?
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: '#777',
                fontSize: 13,
                marginVertical: 10,
              }}
            >
              Invite your friends to swipe & match with groups of friends going
              out tonight
            </Text>
            <Button block rounded style={styles.goinOutBtn}>
              <Text style={styles.goinOutBtnText}>I&apos;M GOING OUT</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

export default connect()(Profile);
