import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { connectImpdApi } from 'client/components/imdb';
import './styles.scss';

const MovieListItem = React.lazy(() => import('./MovieListItem'));

const MoviesList = (props) => {
  return (
    <div className="movies-list">
      {props.movies.map((movie) => (
        <Suspense key={movie.imdbID} fallback={<div>Loading...</div>}>
          <MovieListItem {...movie} />
        </Suspense>
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
