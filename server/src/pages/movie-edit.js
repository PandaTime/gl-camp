import React, { Component } from 'react';
import { connectReactRouter } from '../components/reactRouterHoC';
import MovieEditClient from 'client/screens/MovieEdit/MovieEdit';
import App from 'client/components/App';

const ServerComponent = {
  component: MovieEditClient,
  matchPath: '/edit/:id',
}

class MovieEdit extends Component {
  render() {
    return <App {...this.props} serverComponent={ServerComponent} />
  }
}

const MovieEditWithRouter = connectReactRouter({ dynamicRoute: true })(MovieEdit);

MovieEditWithRouter.getInitialProps = async ({ query }) => {
  return { routerUrl: `/edit/${query.movieId}` };
}

export default MovieEditWithRouter;
