import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectImpdApi, MOVIE_PARAMS } from 'client/components/imdb';
import MovieListItem from './MovieListItem';

import './styles.scss';

class MoviesList extends Component {
  render() {
    return (
      <div className="movies-list">
        {this.props.movies.map((movie) => (
          <MovieListItem key={movie.imdbID} imdbID={movie.imdbID} Title={movie.Title} Year={movie.Year} />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default connectImpdApi({
  fetchByQuery: true,
  fetchedFields: [MOVIE_PARAMS.imdbID, MOVIE_PARAMS.Title, MOVIE_PARAMS.Year],
})(MoviesList);
