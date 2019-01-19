import React from 'react';
import PropTypes from 'prop-types';
import { connectImpdApi } from 'client/components/imdb';
import MovieCard from './MovieCard/MovieCard';
import './styles.scss';

const MoviesDashboards = (props) => {
  return (
    <div className="movies-dashboard">
      {props.movies.map((movie) => (
          <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}


MoviesDashboards.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default connectImpdApi({
  fetchByQuery: true,
  detailedResult: true,
  limit: 5,
})(MoviesDashboards);
