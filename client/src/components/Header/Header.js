import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
export default () => {
  return (
    <div className="header">
      <Link to="/list">List</Link>
      <Link to="/dashboard">Dashboards</Link>
    </div>
  );
}
