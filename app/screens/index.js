import React from 'react';
import { connect } from 'react-redux';
import { AuthActions } from '../actions/auth';

class Index extends React.Component {
  componentDidMount() {
    this.props.redirect();
  }

  render() {
    return null;
  }
}

Index.propTypes = {
  redirect: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  redirect() {
    dispatch(AuthActions.redirect());
  },
});

export default connect(null, mapDispatchToProps)(Index);
