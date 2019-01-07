import React, { Component } from 'react';
import { connectReactRouter } from '../components/reactRouterHoC';
import App from 'client/App/App';

class MoviesDashboard extends Component {
  render() {
    return <App />
  }
}

const MovieListWithRouter = connectReactRouter({ url: '/dashboard' })(MoviesDashboard);

export default () => <MovieListWithRouter />;
