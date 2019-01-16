import React from 'react';
import PropTypes from 'prop-types';
import { connectImpdApi } from 'client/components/imdb';
import MovieListItem from './MovieListItem';

import './styles.scss';

const MoviesList = (props) => {
  return (
    <div className="movies-list">
      {props.movies.map((movie) => (
        <MovieListItem key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default connectImpdApi({
  fetchByQuery: true,
})(MoviesList);
