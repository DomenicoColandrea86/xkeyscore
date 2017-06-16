import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Button, View } from 'native-base';
import Swiper from 'react-native-swiper';

import { selectLoginScreen } from '../../selectors/auth';
import { AuthActions } from '../../actions/auth';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;

class Login extends Component {
  componentWillMount() {
    this.props.login({
      email: 'dcolandrea@rcanalytics.com',
      password: 'Javasun1??11',
    });
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Content scrollEnabled={false}>
          <Swiper
            height={deviceHeight / 1.3}
            loop={false}
            dot={<View style={styles.swiperDot} />}
            activeDot={<View style={styles.swiperActiveDot} />}
          >
            <View style={styles.slides}>
              <Text style={styles.loginText}>
                Discover interesting people around you
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  overflow: 'hidden',
                }}
              >
                <Image
                  source={require('../../../assets/img/e1.jpg')}
                  style={styles.image1}
                />
              </View>
            </View>
            <View style={styles.slides}>
              <Text style={styles.loginText}>
                Anonymously like or pass on each person
              </Text>
              <Image
                source={require('../../../assets/img/likeSquare.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.slides}>
              <Text style={styles.loginText}>
                When someone likes you back...
              </Text>
              <View style={styles.image}>
                <Image
                  source={require('../../../assets/img/1.png')}
                  style={styles.img1}
                  resizeMode="contain"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}
                >
                  <Image
                    source={require('../../../assets/img/rf1.jpg')}
                    style={[styles.img2, { left: 10 }]}
                  />
                  <Image
                    source={require('../../../assets/img/m4.jpg')}
                    style={[styles.img2, { right: 10 }]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.slides}>
              <Text style={styles.loginText}>
                Chat and get to know your matches
              </Text>
              <Image
                source={require('../../../assets/img/2.png')}
                style={styles.image1}
                resizeMode="contain"
              />
            </View>
          </Swiper>
          <Button
            block
            rounded
            style={styles.loginBtn}
            onPress={() => Actions.home()}
          >
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              LOG IN WITH FACEBOOK
            </Text>
          </Button>
        </Content>
        <View style={{ marginHorizontal: 30, bottom: 10 }}>
          <Text style={{ color: '#999', fontSize: 12, textAlign: 'center' }}>
            By signing in, you agree with our terms of
            services and privacy settings
          </Text>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state: {
    ...ownProps.state,
    loginScreen: selectLoginScreen(state),
  },
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    ...ownProps.actions,
    ...bindActionCreators(AuthActions, dispatch),
  },
  login(data) {
    dispatch(AuthActions.loginRequest(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
