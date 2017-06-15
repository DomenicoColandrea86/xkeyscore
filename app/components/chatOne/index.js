import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Button,
  Icon,
  Header,
  Title,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
} from 'native-base';
import { Text } from 'react-native';
import styles from './style';

class ChatOne extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" style={styles.icon} />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Matches</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ListItem avatar button onPress={() => Actions.chatScreen()}>
            <Left>
              <Thumbnail small source={require('../../../assets/img/m4.jpg')} />
            </Left>
            <Body>
              <Text style={styles.bold}>Megan Fox</Text>
              <Text note style={styles.note}>17 Mi away - active 5 days ago</Text>
            </Body>
          </ListItem>
          <ListItem avatar button onPress={() => Actions.chatScreen()}>
            <Left>
              <Thumbnail small source={require('../../../assets/img/r4.jpg')} />
            </Left>
            <Body>
              <Text style={styles.bold}>Rachel McAdams</Text>
              <Text note style={styles.note}>8 Mi away - active 13 days ago</Text>
            </Body>
          </ListItem>
          <ListItem avatar button onPress={() => Actions.chatScreen()}>
            <Left>
              <Thumbnail small source={require('../../../assets/img/e1.jpg')} />
            </Left>
            <Body>
              <Text style={styles.bold}>Emma Stone</Text>
              <Text note style={styles.note}>13 Mi away - active 21 days ago</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default connect()(ChatOne);
