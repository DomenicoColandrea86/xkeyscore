import React from 'react';
import { connect } from 'react-redux';
import { AppActions } from '../actions/app';

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
    dispatch(AppActions.redirect());
    // dispatch(AppActions.unauthenticate());
  },
});

export default connect(null, mapDispatchToProps)(Index);
