import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions as RouteAction } from 'react-native-router-flux';
import { GiftedChat, Actions, Bubble, Send } from 'react-native-gifted-chat';
import { Image, View, Text, Dimensions, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import {
  Container,
  Button,
  Icon,
  Header,
  Title,
  Left,
  Right,
  Body,
} from 'native-base';
import CustomActions from './CustomActions';
const { height } = Dimensions.get('window');

class chatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('./data.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 600);
  }

  onLoadEarlier() {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('./old.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'Emma is typing',
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Federer',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
    if (Platform.OS === 'android' || 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': () => {},
      'Action 2': () => {},
      Cancel: () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          },
          right: {
            backgroundColor: '#F7524C',
          },
        }}
      />
    );
  }

  renderSend(props) {
    return (
      <Send
        {...props}
        containerStyle={{
          backgroundColor: '#F7524C',
          height: 30,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          right: 10,
          top: -3,
        }}
        textStyle={{ color: '#FFF', marginTop: 10 }}
      />
    );
  }

  renderAvatar(props) {
    return (
      <Image style={styles.senderAvatar} source={require('../../../assets/img/e1.jpg')} />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  render() {
    if (!this.state.show) {
      return (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size="large" color="red" style={{ top: height / 2.2 }} />
        </View>
      );
    }
    return (
      <Container style={{ backgroundColor: '#FFF' }}>
        <Header style={{ backgroundColor: '#FFF' }}>
          <Left>
            <Button transparent onPress={() => RouteAction.pop()}>
              <Icon name="ios-arrow-back" style={{ color: '#F7524C', fontSize: 30 }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#000' }}>Chat</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ flex: 1 }}>
          <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend}
            loadEarlier={this.state.loadEarlier}
            onLoadEarlier={this.onLoadEarlier}
            isLoadingEarlier={this.state.isLoadingEarlier}

            user={{
              _id: 1, // sent messages should have same user._id
            }}
            renderSend={this.renderSend}
            renderActions={this.renderCustomActions}
            renderBubble={this.renderBubble}
            renderFooter={this.renderFooter}
            renderAvatar={this.renderAvatar}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
  senderAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    top: -3,
  },
});

export default connect()(chatScreen);
