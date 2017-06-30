import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, ActivityIndicator, Dimensions } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import { createStructuredSelector } from 'reselect';
import LoginForm from '../components/loginForm';
import { AuthActions } from '../actions/auth';
import { makeSelectLoading } from '../selectors/app';

const { height } = Dimensions.get('window');

class Login extends Component {
  componentWillMount() {
    this.props.login.bind(this);
  }

  render() {
    if (this.props.loading)
      return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <ActivityIndicator size="large" style={{ top: height / 2.2 }} />
        </View>
      );
    return (
      <Image
        blurRadius={10}
        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
        source={require('../../assets/img/backgroundTallbuildings.jpg')}
      >
        <Container>
          <Content scrollEnabled={false}>
            <LoginForm onSubmit={data => this.props.login(data)} />
          </Content>
          <View style={{ marginHorizontal: 30, bottom: 10 }}>
            <Text
              style={{
                color: 'white',
                backgroundColor: 'transparent',
                fontSize: 12,
                textAlign: 'center',
              }}
            >
              By signing in, you agree with our terms of services and privacy
              settings
            </Text>
          </View>
        </Container>
      </Image>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    ...ownProps.actions,
    ...bindActionCreators(AuthActions, dispatch),
  },
  login(data) {
    return dispatch(AuthActions.loginRequest(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
