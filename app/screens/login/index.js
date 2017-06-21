import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Content, Text, View } from 'native-base';
import LoginForm from '../../components/loginForm';
import { AuthActions } from '../../actions/auth';

class Login extends Component {
  componentWillMount() {
    this.props.login.bind(this);
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Content scrollEnabled={false}>
          <LoginForm onSubmit={data => this.props.login(data)} />
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
