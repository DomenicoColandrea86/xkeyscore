import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, Slider } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
  Container,
  Content,
  Icon,
  Switch,
  Button,
  Header,
  Title,
  Card,
  CardItem,
  Left,
  Body,
  Right,
} from 'native-base';

import styles from './style';

class EditProfile extends Component {
  state = {
    trueSwitchIsOn: true,
    trueSwitchIsOn2: true,
    trueSwitchIsOn3: true,
    falseSwitchIsOn: false,
    notSwitch1: true,
    notSwitch2: true,
    notSwitch3: true,
    notSwitch4: true,
    sliderValue: 0,
    leftValue: 25,
    rightValue: 35,
    disKM: true,
  };

  componentWillMount() {}

  changeDisType(val) {
    if (val === 1) {
      this.setState({ disKM: true });
    } else {
      this.setState({ disKM: false });
    }
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#FFF' }}>
          <Left>
            <Button transparent onPress={() => Actions.pop()} style={{ marginTop: -5, marginRight: 5 }}>
              <Icon name="ios-arrow-back-outline" style={styles.backButton} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text}>
              Settings
            </Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>
          <View style={{ paddingTop: 15, paddingHorizontal: 10 }}>
            <View style={styles.heading}>
              <Text style={styles.text}>Discovery Settings</Text>
            </View>
            <Card>
              <CardItem style={styles.locationSwipper}>
                <Text style={styles.swip}>Swiping in</Text>
                <Text style={styles.textBlue}>My Current Location</Text>
              </CardItem>
            </Card>
            <View>
              <Text style={styles.someText}>Change your swipe location to see Tinder members in other cities</Text>
            </View>
            <Card style={styles.showMe}>
              <View style={styles.menSwitch}>
                <Text style={styles.redText}>Show Me</Text>
              </View>
              <CardItem style={styles.menSwitch}>
                <Text style={styles.switchBlockHeader}>Men</Text>
                <Switch
                  onValueChange={(value) => this.setState({ trueSwitchIsOn: value })}
                  style={styles.switch1}
                  onTintColor="#F7524C"
                  value={this.state.trueSwitchIsOn}
                />
              </CardItem>
              <CardItem style={styles.menSwitch}>
                <Text style={styles.switchBlockHeader}>Women</Text>
                <Switch
                  onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
                  onTintColor="#F7524C"
                  style={styles.switch1}
                  value={this.state.falseSwitchIsOn}
                />
              </CardItem>
            </Card>
            <Card style={styles.searchDistance}>
              <CardItem style={styles.menSwitch}>
                <Text style={styles.searhHeaderText}>Search Distance</Text>
                <Text style={styles.searchKmText}>{this.state.sliderValue}km.</Text>
              </CardItem>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <Slider
                  style={styles.slider}
                  onValueChange={(value) => this.setState({ sliderValue: value })}
                  maximumValue={100}
                  minimumTrackTintColor='#F7524C'
                  step={1}
                />
              </View>
            </Card>
            <CardItem style={styles.switchBlock}>
              <Text style={styles.switchBlockHeader}>Show me on DatingApp</Text>
              <Switch
                onValueChange={(value) => this.setState({ trueSwitchIsOn2: value })}
                onTintColor="#F7524C"
                style={styles.switch2}
                value={this.state.trueSwitchIsOn2}
              />
            </CardItem>
            <View>
              <Text style={styles.someText}>DatingApp uses these preferences to suggest matches.Some match suggestions
                may not fall within your desired parameters.</Text>
            </View>
            <CardItem style={styles.switchBlock}>
              <Text style={styles.switchBlockHeader}>Show me on DatingApp Social</Text>
              <Switch
                onValueChange={(value) => this.setState({ trueSwitchIsOn3: value })}
                onTintColor="#F7524C"
                style={styles.switch2}
                value={this.state.trueSwitchIsOn3}
              />
            </CardItem>
            <View>
              <Text style={styles.someText}>Turning this on will show your profile to singe users near you.</Text>
            </View>
            <View style={styles.webProfile}>
              <Text style={styles.redText}>Web Profile</Text>
              <View style={styles.userNameRow}>
                <Text style={styles.userNameRowKey}>Username</Text>
                <Text style={styles.userNameRowValue}>Claim Yours</Text>
              </View>
              <Text style={{ color: 'rgba(0,0,0,0.25)', fontSize: 11, marginTop: 10 }}>Create a username. Share your
                username. Have people all over the world swipe you right on DatingApp</Text>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.text}>App Settings</Text>
            </View>
            <View>
              <Card style={{ borderRadius: 5 }}>
                <CardItem style={{ borderRadius: 5 }}>
                  <Text style={styles.redText}>Notifications</Text>
                </CardItem>
                <CardItem style={styles.notBlock}>
                  <Text style={styles.switchBlockHeader}>New Matches</Text>
                  <Switch
                    onValueChange={(value) => this.setState({ notSwitch1: value })}
                    onTintColor="#F7524C"
                    style={styles.switch2}
                    value={this.state.notSwitch1}
                  />
                </CardItem>
                <CardItem style={styles.notBlock}>
                  <Text style={styles.switchBlockHeader}>Messages</Text>
                  <Switch
                    onValueChange={(value) => this.setState({ notSwitch2: value })}
                    onTintColor="#F7524C"
                    style={styles.switch2}
                    value={this.state.notSwitch2}
                  />
                </CardItem>
                <CardItem style={styles.notBlock}>
                  <Text style={styles.switchBlockHeader}>Message Likes</Text>
                  <Switch
                    onValueChange={(value) => this.setState({ notSwitch3: value })}
                    onTintColor="#F7524C"
                    style={styles.switch2}
                    value={this.state.notSwitch3}
                  />
                </CardItem>
                <CardItem style={styles.notBlock}>
                  <Text style={styles.switchBlockHeader}>Super Likes</Text>
                  <Switch
                    onValueChange={(value) => this.setState({ notSwitch4: value })}
                    onTintColor="#F7524C"
                    style={styles.switch2}
                    value={this.state.notSwitch4}
                  />
                </CardItem>
              </Card>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Card style={{ borderRadius: 5 }}>
                <CardItem style={styles.notBlock}>
                  <Text style={styles.redText}>Show Distance in</Text>
                  <Text style={styles.searchKmText}>{this.state.disKM ? 'Km.' : 'Mi.'}</Text>
                </CardItem>
                <CardItem style={{ borderRadius: 5 }}>
                  <View style={styles.notBlock}>
                    <Button
                      block transparent
                      style={{ flex: 2, backgroundColor: (this.state.disKM) ? '#F7524C' : 'transparent' }}
                      onPress={() => this.changeDisType(1)}
                    >
                      <Text
                        style={{
                          color: (this.state.disKM) ? '#FFF' : 'grey',
                          fontSize: 16,
                          fontWeight: '700',
                        }}
                      >Km.</Text>
                    </Button>
                    <Button
                      block
                      transparent
                      style={{ flex: 2, backgroundColor: (!this.state.disKM) ? '#F7524C' : 'transparent' }}
                      onPress={() => this.changeDisType(2)}
                    >
                      <Text
                        style={{
                          color: (!this.state.disKM) ? '#FFF' : 'grey',
                          fontSize: 16,
                          fontWeight: '700',
                        }}
                      >Mi.</Text>
                    </Button>
                  </View>
                </CardItem>
              </Card>
            </View>
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.text}>Contact Us</Text>
            </View>
            <Button block style={styles.helpBtn}>
              <Text style={[styles.redText, { color: '#555', textAlign: 'center' }]}>Help & Support</Text>
            </Button>
            <View style={{ marginVertical: 10 }}>
              <Card style={{ borderRadius: 5 }}>
                <CardItem style={{ borderRadius: 5 }}>
                  <Body>
                    <Text style={styles.redText}>Legal</Text>
                    <Button transparent small>
                      <Text style={[styles.switchBlockHeader, { marginTop: 10 }]}>Licenses</Text>
                    </Button>
                    <Button transparent small>
                      <Text style={[styles.switchBlockHeader, { marginTop: 10 }]}>Privacy Policy</Text>
                    </Button>
                    <Button transparent small>
                      <Text style={[styles.switchBlockHeader, { marginTop: 10 }]}>Terms of Service</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <Button block style={styles.helpBtn} onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Text style={[styles.redText, { color: '#555', textAlign: 'center' }]}>Logout</Text>
            </Button>
            <View style={{ alignItems: 'center', marginVertical: 20 }}>
              <Image source={require('../../../assets/img/logo.png')} style={{ width: 40, height: 40 }} />
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const bindActions = (dispatch) => ({
  reset: key => dispatch(this.reset([{ key: 'login' }], key, 0)),
  popRoute: key => dispatch(this.popRoute(key)),
});

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(EditProfile);
