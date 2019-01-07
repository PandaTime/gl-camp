import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';

const MAX_PLOT_LENGTH = 230;

const MovieCard = (props) => {
  const shortPlot = props.plot.length > MAX_PLOT_LENGTH ? (props.plot.substr(0, MAX_PLOT_LENGTH).trim() + '...') : props.plot;
  return (
    <div className="movie-card">
    <Link to={`/edit/${props.id}`}>
      <div className="movie-card-image-wrapper">
        <div className="movie-card-image" style={{ backgroundImage: `url(${props.poster})` }}></div>
      </div>
      <div className="movie-card-content">
        <h3 className="movie-card-name">
          {props.title}
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
}

export default MovieCard;