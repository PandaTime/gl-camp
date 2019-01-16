import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const MAX_PLOT_LENGTH = 230;

const MovieCard = (props) => {
  const { imdbID, Plot, Poster, Title } = props;
  const shortPlot = Plot.length > MAX_PLOT_LENGTH ? (Plot.substr(0, MAX_PLOT_LENGTH).trim() + '...') : Plot;
  return (
    <div className="movie-card">
      <Link to={`/edit/${imdbID}`}>
        <div className="movie-card-image-wrapper">
          <div className="movie-card-image" style={{ backgroundImage: `url(${Poster})` }}></div>
        </div>
        <div className="movie-card-content">
          <h3 className="movie-card-name">
            {Title}
          </h3>
          <div className="movie-card-plot">
            {shortPlot}
          </div>
        </div>
      </Link>
    </div>
  );
}

MovieCard.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
}

export default MovieCard;