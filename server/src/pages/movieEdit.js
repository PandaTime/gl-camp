import React, { Component } from 'react';
import { connectReactRouter } from '../components/reactRouterHoC';
import App from 'client/App/App';

class MovieEdit extends Component {
  render() {
    return <App {...this.props}/>
  }
}

const MovieEditWithRouter = connectReactRouter({ dynamicRoute: true })(MovieEdit);

MovieEditWithRouter.getInitialProps = async ({ query }) => {
  return { routerUrl: `/edit/${query.movieId}` };
}

export default MovieEditWithRouter;
