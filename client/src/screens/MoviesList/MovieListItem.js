import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieListItem(props) {
  return (
    <div className="movie-list-item">
      <Link to={`/edit/${props.imdbID}`}>
        <div className="movie-content">{props.Title} ({props.Year})</div>
      </Link>
    </div>
  )
}

MovieListItem.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
}

