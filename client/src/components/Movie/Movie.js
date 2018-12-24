import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import MovieEdit from './MovieEdit';

const MovieItem = (props) => {
  const { movie } = props;
  return (
    <React.Fragment>
      <div className="movie-container">
        <div className="movie-image-wrapper">
          <img className="movie-image" src={movie.Poster} alt={`${movie.Title} poster image`} />
        </div>
        <div className="movie-content">
          <h3 className="movie-name">
            {movie.Title}
          </h3>
          <div className="movie-plot">
            {movie.Plot}
          </div>
        </div>
      </div>
      <div style={{textAlign: 'center', borderTop: "1px solid grey", padding: 10, margin: 10}}>Edit Section:</div>
      <MovieEdit {...props} />
    </React.Fragment>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default MovieItem;