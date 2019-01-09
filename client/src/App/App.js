import React, { Component } from 'react';
import { inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Routes from 'client/routes';
import Header from 'client/components/Header/Header';
import './App.scss';

// Removed @decorators because of nextjs
// @inject('historyStore')
// @withRouter // otherwise routing is broken lulz
class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.historyStore.setPrevUrl(prevProps.location.pathname);
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default inject('historyStore')(withRouter(App));
