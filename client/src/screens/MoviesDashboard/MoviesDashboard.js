import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectImpdApi, MOVIE_PARAMS } from 'client/components/imdb';
import MovieCard from './MovieCard/MovieCard';

import './styles.scss';

class MoviesDashboards extends Component {
  render() {
    return (
      <div className="movies-dashboard">
        {this.props.movies.map((movie) => (
          <MovieCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} plot={movie.Plot} />
        ))}
      </div>
    );
  }
}


MoviesDashboards.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default connectImpdApi({
  fetchByQuery: true,
  fetchedFields: [MOVIE_PARAMS.imdbID, MOVIE_PARAMS.Title, MOVIE_PARAMS.Poster, MOVIE_PARAMS.Plot],
})(MoviesDashboards);
