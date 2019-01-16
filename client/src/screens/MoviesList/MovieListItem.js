import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieListItem(props) {
  const { imdbID, Title, Year} = props;
  return (
    <div className="movie-list-item">
      <Link to={`/edit/${imdbID}`}>
        <div className="movie-content">{Title} ({Year})</div>
      </Link>
    </div>
  )
}

MovieListItem.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
}

