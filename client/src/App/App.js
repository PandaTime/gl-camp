import React, { Component } from 'react';
import Routes from 'client/routes';
import Header from 'client/components/Header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
