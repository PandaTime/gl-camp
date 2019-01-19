import React, { Component } from 'react';
import { connectReactRouter } from '../components/reactRouterHoC';
import MoviesListClient from 'client/screens/MoviesList/MoviesList';
import App from 'client/components/App';

const ServerComponent = {
  component: MoviesListClient,
  matchPath: '(/|/list)',
};

class MoviesList extends Component {
  render() {
    return <App {...this.props} serverComponent={ServerComponent}/>
  }
}

const MovieListWithRouter = connectReactRouter({ url: '/' })(MoviesList);

export default () => <MovieListWithRouter />;
