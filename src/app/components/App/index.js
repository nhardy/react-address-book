import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';


@asyncConnect({
  promise: (params, { store: { dispatch, getState } }) => {
    const promises = [];
    const state = getState();

    if (state.something) { // FIXME
      dispatch({});
    }

    return Promise.all(promises);
  },
})
@connect(state => {
  return {
    something: state.something, // FIXME
  };
})
export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Helmet title="Page Title" />
        {__CLIENT__ && <span>Test</span>}
        { this.props.children }
      </div>
    );
  }
}
