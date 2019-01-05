import React, { Component } from 'react';
import Header from './Header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-content-wrapper">
          {this.props.children}  
        </div>
        
      </div>
    );
  }
}

export default App;
