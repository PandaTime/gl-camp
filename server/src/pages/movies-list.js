import React, { Component } from 'react';
import { connectReactRouter } from '../components/reactRouterHoC';
import App from 'client/App/App';

class MoviesList extends Component {
  render() {
    return <App {...this.props} />
  }
}

const MovieListWithRouter = connectReactRouter({ url: '/' })(MoviesList);

export default () => <MovieListWithRouter />;
