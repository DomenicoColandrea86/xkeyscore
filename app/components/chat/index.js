import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Button } from 'native-base';
import { Image, View, Text } from 'react-native';
import styles from './style';

class Chat extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={styles.screen} scrollEnabled={false}>
          <View style={styles.imageText}>
            <Image
              source={require('../../../assets/img/likeSquare.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.matchesText}>
              <Text style={styles.matches}>You have no matches yet</Text>
            </View>
          </View>
          <Button
            block
            onPress={() => Actions.chatone()}
            style={styles.menSwitch}
          >
            <Text style={styles.switch1}>Discover New Deals</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect()(Chat);
