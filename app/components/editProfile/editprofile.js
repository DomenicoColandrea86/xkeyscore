import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Icon,
  Radio,
  Button,
  Header,
  Title,
  Card,
  CardItem,
  Switch,
  Left,
  Right,
  Body,
} from 'native-base';
import ImageContainer from './image-container';
import MainImage from './main-image';
import theme from '../../theme';

const { width } = Dimensions.get('window');

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      radioToggleM: true,
      radioToggleF: false,
      text: '',
      height: 0,
      ageSwitch: true,
      disSwitch: true,
    };
  }

  toggleM() {
    this.setState({
      radioToggleM: true,
      radioToggleF: false,
    });
  }

  toggleF() {
    this.setState({
      radioToggleM: false,
      radioToggleF: true,
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()} style={{ marginTop: -5, marginRight: 5 }}>
              <Icon name="ios-arrow-back-outline" style={styles.backButton} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text}>
              Edit Profile
            </Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.addphoto()}>
              <Icon name="md-add" style={styles.forward} />
            </Button>
          </Right>
        </Header>
        <Content style={{ marginTop: 2 }} theme={theme}>
          <View style={styles.imagesSection}>
            <View style={styles.part1}>
              <MainImage source={require('../../../assets/img/rf1.jpg')} />
              <View style={{ flex: 1 }}>
                <ImageContainer marginLeft={10} source={require('../../../assets/img/federerOne.jpg')} />
                <ImageContainer marginLeft={10} source={require('../../../assets/img/rf2.jpg')} />
              </View>
            </View>
            <View style={styles.part2}>
              <View style={styles.rowImageView}>
                <ImageContainer source={require('../../../assets/img/federer.jpg')} />
                <ImageContainer marginLeft={20} />
                <ImageContainer marginLeft={20} />
              </View>
            </View>
          </View>
          <View >
            <Text
              style={{
                backgroundColor: '#F5F5F5',
                paddingBottom: 5,
                marginLeft: 15,
                fontFamily: 'arial',
                color: 'black',
              }}>About Federer
            </Text>
            <View style={styles.textView}>
              <View style={{ marginLeft: 8 }}>
                <TextInput
                  multiline
                  placeholderStyle={{ marginTop: -3 }}
                  placeholder="About you"
                  onChange={(event) => {
                    this.setState({
                      text: event.nativeEvent.text,
                      height: (event.nativeEvent.contentSize.height < 80) ? event.nativeEvent.contentSize.height : 80,
                    });
                  }}
                  maxLength={500}
                  numberOfLines={6}
                  style={[styles.textArea, { height: Math.max(40, this.state.height), textAlignVertical: 'top' }]}
                  underlineColorAndroid={'transparent'}
                />
              </View>
            </View>
          </View>
          <View style={styles.heading}>
            <Text style={styles.text}>CurrentWork</Text>
          </View>
          <TouchableOpacity onPress={() => Actions.currentwork()}>
            <View style={styles.textView}>
              <Text style={{ color: '#777', marginHorizontal: 7 }}>World Class Tennis Player</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.heading}>
            <Text style={styles.text}>School</Text>
          </View>
          <View style={styles.textView}>
            <TouchableOpacity onPress={() => Actions.school()}>
              <Text style={{ color: '#777', marginHorizontal: 7 }}>RNF university, Zurich</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 5 }}>
            <View style={styles.heading}>
              <Text style={styles.text}>Gender</Text>
            </View>
            <TouchableWithoutFeedback style={styles.radiobuttonView} onPress={() => this.toggleM()}>
              <View style={styles.radiobuttonView}>
                <Text style={{ lineHeight: 24, marginTop: (Platform.OS === 'ios') ? 3 : undefined }}>Male</Text>
                <Radio selected={this.state.radioToggleM} style={{ left: -20 }} />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={styles.radiobuttonView} onPress={() => this.toggleF()}>
              <View style={styles.radiobuttonView}>
                <Text style={{ lineHeight: 24, marginTop: (Platform.OS === 'ios') ? 3 : undefined }}>Female</Text>
                <Radio selected={this.state.radioToggleF} style={{ left: -20 }} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.heading}>
            <Text style={styles.text}>Control Your Profile</Text>
          </View>
          <Card style={{ borderRadius: 0, borderColor: 'transparent', margin: 0 }}>
            <CardItem style={{ borderRadius: 0, borderColor: 'transparent' }}>
              <Text style={styles.switchBlockHeader}>Dont Show My Age</Text>
              <Right>
                <Switch
                  onValueChange={(value) => this.setState({ ageSwitch: value })}
                  onTintColor="#F7524C"
                  value={this.state.ageSwitch} />
              </Right>
            </CardItem>
            <CardItem style={{ borderRadius: 0, borderColor: 'transparent' }}>
              <View style={[styles.notBlock, { marginTop: (Platform.OS === 'ios') ? 15 : 5 }]}>
                <Text style={styles.switchBlockHeader}>Make My Distance Invisible</Text>
                <Right>
                  <Switch
                    onValueChange={(value) => this.setState({ disSwitch: value })}
                    onTintColor="#F7524C"
                    value={this.state.disSwitch} />
                </Right>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tabBar: {
    backgroundColor: 'white',
    height: (Platform.OS === 'android') ? 55 : 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: (Platform.OS === 'android') ? 15 : 30,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    shadowOpacity: 0.185,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 4,
  },
  backButton: {
    color: 'red',
    fontSize: 30,
  },
  firstPart: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 3.6,
    justifyContent: 'space-between',
  },
  forward: {
    fontSize: 32,
    color: 'lightgrey',
  },
  imagesSection: {
    backgroundColor: '#F5F5F5',
    marginTop: 15,
    marginHorizontal: 15,
  },
  part1: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mainImageView: {
    backgroundColor: '#F5F5F5',
  },
  columnImageView: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
  },
  part2: {
    backgroundColor: '#F5F5F5',
  },
  rowImageView: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
  heading: {
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 5,
    paddingVertical: 3,
  },
  text: {
    fontFamily: 'arial',
    color: 'rgba(0,0,0,0.65)',
    fontSize: 18,
    fontWeight: '600',
  },
  textView: {
    backgroundColor: 'white',
    padding: 8,
  },
  // textView: {
  //   padding:(Platform.OS === 'ios') ? 15 : 0
  // },
  radiobuttonView: {
    paddingVertical: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  footer: {
    marginBottom: 15,
  },
  textAreaContainer: {
    height: 25,
    marginTop: -5,
  },
  notBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  switchBlockHeader: {
    color: '#777',
  },
};

export default connect()(EditProfile);
