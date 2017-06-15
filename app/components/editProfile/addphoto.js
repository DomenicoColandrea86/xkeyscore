import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View, Platform, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Icon,
  Button,
  ListItem,
  Header,
  Title,
  Left,
  Right,
  Body,
} from 'native-base';

const { width, height } = Dimensions.get('window');

class AddPhoto extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <Header style={{ backgroundColor: '#FFF' }}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back-outline" style={styles.backButton} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text}>
              Add a photo
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ borderBottomColor: '#CCC', borderBottomWidth: 0.5 }}>
            <ListItem button style={{ borderBottomColor: 'transparent', justifyContent: 'space-between' }}>
              <Text style={styles.text}>Gallery </Text>
              <Text style={styles.text}>97 photos </Text>
              <Icon name="md-checkmark" style={styles.iconcheck} />
            </ListItem>
          </View>
          <View style={styles.noSchoolToShow}>
            <Text style={styles.noschooltext}>If your school isnt shown, please update it on facebook and it will appear
              here.</Text>
          </View>
          <View style={{ borderColor: '#CCC', borderBottomWidth: 0.5, borderTopWidth: 0.5 }}>
            <ListItem style={{ borderBottomColor: 'transparent' }}>
              <TouchableOpacity>
                <View style={styles.list}>
                  <Text style={styles.text}>None </Text>
                </View>
              </TouchableOpacity>
            </ListItem>
          </View>
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
    height: (Platform.OS === 'android') ? 55 : 70,
    paddingTop: (Platform.OS === 'android') ? 15 : 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  backButton: {
    color: '#F7524C',
    fontSize: 30,
  },
  firstPart: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 4.5,
    justifyContent: 'space-between',
  },
  forward: {
    alignSelf: 'center',
    color: 'lightgrey',
  },
  header: {
    backgroundColor: '#006f9a',
    height: height - 540,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerMessage: {
    fontSize: 19,
    color: 'white',
    fontFamily: 'Lato-Bold',
  },
  image: {
    height: height - 520,
    width: width - 285,
  },
  contact: {
    flexDirection: 'row',

  },
  contactDetails: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 12,
  },
  name: {
    fontFamily: 'OpenSans-Semibold',
    color: 'black',
    opacity: 0.9,
  },
  title: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 10,
    opacity: 0.5,
  },

  listView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 15,

  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    color: '#000',
  },
  iconcheck: {
    alignSelf: 'flex-end',
    fontSize: 15,
    color: 'red',
  },
  otherWork: {
    marginTop: 2,
  },
  noSchoolToShow: {
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  noschooltext: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
  },
};

export default connect()(AddPhoto);
