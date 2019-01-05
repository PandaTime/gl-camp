import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/list">List</Link>
        <Link to="/dashboards">Dashboards</Link>
      </div>
    );
  }
}