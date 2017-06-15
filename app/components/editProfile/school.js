import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View, Platform, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Icon,
  Button,
  List,
  ListItem,
  Header,
  Title,
  Left,
  Right,
  Body,
} from 'native-base';

const { width } = Dimensions.get('window');

class School extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#FFF' }}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back-outline" style={styles.backButton} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.text2}>
              School
            </Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>
          <View style={styles.listView}>
            <ListItem button style={{ marginLeft: -10 }}>
              <View style={styles.list}>
                <Text style={styles.text}>RNF University ,Zurich</Text>
                <Icon name="md-checkmark" style={styles.iconcheck} />
              </View>
            </ListItem>
          </View>
          <View style={styles.workatTindertext}>
            <Text style={styles.tindertext}>
              If your school isnt shown, please update it on facebook and it will appear here.
            </Text>
          </View>
          <View style={styles.listView}>
            <List>
              <TouchableOpacity>
                <ListItem style={{ marginLeft: -10 }}>
                  <View style={styles.list}>
                    <Text style={styles.text}>None</Text>
                  </View>
                </ListItem>
              </TouchableOpacity>
            </List>
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
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: (Platform.OS === 'android') ? 15 : 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
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
  listView: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 15,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1,
  },
  text: {
    marginLeft: 10,
    fontFamily: 'arial',
    color: 'black',
  },
  iconcheck: {
    alignSelf: 'flex-end',
    fontSize: 15,
    color: 'red',
  },
  text2: {
    color: '#000',
  },
  otherWork: {
    marginTop: 2,
  },
  workatTindertext: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  tindertext: {
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
  },
};

const bindAction = (dispatch) => ({
  popRoute: key => dispatch(this.popRoute(key)),
});

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(School);
