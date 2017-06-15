import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Platform, Dimensions } from 'react-native';
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

const { width } = Dimensions.get('window');

class CurrentWork extends Component {
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
              Current Work
            </Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>
          <View style={styles.listView}>
            <ListItem button style={{ marginLeft: -10 }}>
              <View style={styles.list}>
                <Text style={styles.text}>World Class Tennis Player</Text>
                <Icon name="md-checkmark" style={styles.iconcheck} />
              </View>
            </ListItem>
            <ListItem button style={{ marginLeft: -10 }}>
              <View style={styles.list}>
                <Text style={styles.text}>Software engineer at Geeky Ants</Text>
              </View>
            </ListItem>
            <ListItem button style={{ marginLeft: -10 }}>
              <View style={styles.list}>
                <Text style={styles.text}>Geeky Ants</Text>
              </View>
            </ListItem>
            <ListItem button style={{ marginLeft: -10 }}>
              <View style={styles.list}>
                <Text style={styles.text}>St. Francis College </Text>
              </View>
            </ListItem>
          </View>
          <View style={styles.workatTindertext}>
            <Text style={styles.tindertext}>
              If your current job isn&apos;t shown, please update it on facebook and it will appear here. If you&apos;re looking
              for a new job, work at Tinder.
            </Text>
          </View>
          <View style={styles.listView}>
            <ListItem style={{ marginLeft: -10 }}>
              <View style={styles.list}>
                <Text style={styles.text}>None</Text>
              </View>
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
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: (Platform.OS === 'android') ? 15 : 30,
    elevation: 4,
  },
  backButton: {
    color: '#F7524C',
    fontSize: 30,
  },
  firstPart: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width / 3.6,
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
  text2: {
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

export default connect()(CurrentWork);
