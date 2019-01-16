import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { connectImpdApi } from 'client/components/imdb';
import './style.scss';

// @inject('historyStore')
// @withRouter // otherwise routing is broken lulz
// @observer
const DEFAUT_STATE = {
  Title: null,
  Plot: null,
  Poster: null,
  _movieFetched: false,
}
const MovieEdit = (props) => {
  const [movieState, setMovieState] = useState(DEFAUT_STATE);
  
  function onSubmit(e) {
    e.preventDefault();
    const updatedMovie = {};
    Object.keys(movieState).forEach((key) => {
      if (key.startsWith('_')) return;
      updatedMovie[key] = movieState[key];
    })
    props.updateMovie(props.movies[0].imdbID, updatedMovie)
      .then((res) => console.log('updateMovie#success', res));
  }

  function onReset(e) {
    e.preventDefault();
    setMovieState({ ...movieState, ...props.movies[0] });
  }

  function onReturn(e) {
    e.preventDefault();
    const prevUrl = props.historyStore.getPrevUrl();
    props.history.push(prevUrl);
  }

  function onChange(e) {
    e.preventDefault();
    setMovieState({
      ...movieState,
      [e.target.id]: e.target.value,
    });
  }

  useEffect(() => {
    if (!props.fetching && !movieState._movieFetched) {
      setMovieState({ ...props.movies[0], _movieFetched: true });
    }
  }, [props]);
  if (!movieState._movieFetched) return <div>Loading...</div>
  return (
    <div className="movie-edit">
      <form onSubmit={onSubmit} className="movie-edit-form">
        <div className="movie-edit-column">
          <label className="label-text" htmlFor="Title">Movie's title:</label>
          <input id="Title" value={movieState.Title} placeholder="Movie's title" onChange={onChange} />
        </div>
        <div className="movie-edit-column">
          <label className="label-text" htmlFor="Plot">Movie's descriptions:</label>
          <textarea id="Plot" value={movieState.Plot} placeholder="Movie's descriptions" onChange={onChange} />
        </div>
        <div className="movie-edit-column">
          <label className="label-text" htmlFor="Poster">URL to poster:</label>
          <input id="Poster" value={movieState.Poster} placeholder="Movie's poster url" onChange={onChange} />
        </div>
        <div className="submit-buttons movie-edit-column">
          <button type="submit" onClick={onSubmit}>Save</button>
          <button type="submit" onClick={onReset}>Reset Form</button>
          <button type="button" onClick={onReturn}>Return</button>
        </div>
      </form>
    </div>
  );
}

const validatePropsAfterFetch = (props, propName) => {
  if ((props['fetching'] === false && (props[propName] === undefined || typeof (props[propName]) != 'string'))) {
    return new Error(`${propName} should be as string`);
  }
}

MovieEdit.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imdbID: validatePropsAfterFetch,
    Title: validatePropsAfterFetch,
    Poster: validatePropsAfterFetch,
    Plot: validatePropsAfterFetch,
  })),
  fetching: PropTypes.bool.isRequired,
  updateMovie: PropTypes.func.isRequired,
}

const withImdb = connectImpdApi({
  fetchById: true,
  pathToQuery: "match.params.id",
})(MovieEdit);

export default inject('historyStore')(observer(withRouter(withImdb)));
