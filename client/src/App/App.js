import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Routes from 'client/routes';
import Header from 'client/components/Header/Header';
import './App.scss';

// Removed @decorators because of nextjs
// @inject('historyStore')
// @withRouter // otherwise routing is broken lulz
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isServer: true,
    }
  }
  componentDidMount() {
    this.setState({ isServer: false });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.historyStore.setPrevUrl(prevProps.location.pathname);
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Routes serverComponent={this.props.serverComponent} />
      </div>
    );
  }
}

App.defaultProps = {
  serverComponent: {},
}

App.propTypes = {
  serverComponent: PropTypes.shape({
    component: PropTypes.func, // React element
    matchPath: PropTypes.string,
  }), // Function that's passed by Nextjs only on initial load for lazy loading
}

export default inject('historyStore')(withRouter(App));
