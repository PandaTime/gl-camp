import React, { Component } from 'react';
import { connectReactRouter } from '../components/reactRouterHoC';
import MoviesDashboardClient from 'client/screens/MoviesDashboard/MoviesDashboard';
import App from 'client/components/App';

const ServerComponent = {
  component: MoviesDashboardClient,
  matchPath: '/dashboard',
}

class MoviesDashboard extends Component {
  render() {
    return <App {...this.props} serverComponent={ServerComponent}/>
  }
}

const MovieListWithRouter = connectReactRouter({ url: '/dashboard' })(MoviesDashboard);

export default MovieListWithRouter;
