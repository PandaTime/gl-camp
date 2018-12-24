import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MAX_PLOT_LENGTH = 230;

const MovieItem = (props) => {
  const shortPlot = props.plot.length > MAX_PLOT_LENGTH ? (props.plot.substr(0, MAX_PLOT_LENGTH).trim() + '...') : props.plot;
  return (
    <div className="movie-item">
      <div className="movie-item-image-wrapper">
        <div className="movie-item-image" style={{ backgroundImage: `url(${props.poster})` }}></div>
      </div>
      <div className="movie-item-content">
        <h3 className="movie-item-name">
          {props.title}
        </h3>
        <div className="movie-item-plot">
          {shortPlot}
        </div>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
}

export default MovieItem;