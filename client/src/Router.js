import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './components/App';
import MoviesDashboard from './screens/MoviesDashboard/MoviesDashboard';
import MoviesList from './screens/MoviesList/MoviesList';
import MovieEdit from './screens/MovieEdit/MovieEdit';

const AppRouter = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/list" exact component={MoviesList} />
        <Route path="/dashboard" exact component={MoviesDashboard} />
        <Route path="/edit/:id" exact component={MovieEdit} />
        {/* <Route component={MoviesList} /> */}
        <Route component={MoviesDashboard} />
      </Switch>
    </App>
  </Router>
)

export default AppRouter;
