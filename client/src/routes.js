import React from 'react';
import { Route, Switch } from "react-router-dom";
import MoviesDashboard from './screens/MoviesDashboard/MoviesDashboard';
import MoviesList from './screens/MoviesList/MoviesList';
import MovieEdit from './screens/MovieEdit/MovieEdit';

const AppRouting = () => (
  <div className="app-content-wrapper">
    <Switch>
      <Route path="/list" exact component={MoviesList} />
      <Route path="/dashboard" exact component={MoviesDashboard} />
      <Route path="/edit/:id" exact component={MovieEdit} />
      <Route component={MoviesList} />
    </Switch>
  </div>
)

export default AppRouting;
