import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { connectImpdApi, MOVIE_PARAMS } from 'client/components/imdb';
import './style.scss';

// @inject('historyStore')
// @withRouter // otherwise routing is broken lulz
// @observer
class MovieEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: null,
      Plot: null,
      Poster: null,
      _movieFetched: false,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.fetched !== prevProps.fetched) {
      this.setState({ ...this.props.movie, _movieFetched: true });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {};
    Object.keys(this.state).forEach((key) => {
      if (key.startsWith('_')) return;
      updatedMovie[key] = this.state[key];
    })
    this.props.updateMovie(this.props.movie.imdbID, updatedMovie)
      .then((res) => {
        console.log('updateMovie#success', res);
      })
  }

  onReset = (e) => {
    e.preventDefault();
    this.setState({ ...this.props.movie });
  }

  onReturn = (e) => {
    e.preventDefault();
    const prevUrl = this.props.historyStore.getPrevUrl();
    this.props.history.push(prevUrl);
  }
  
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }


  render() {
    if (!this.state._movieFetched) return <div>Loading...</div>
    return (
      <div className="movie-edit">
        <form onSubmit={this.onSubmit} className="movie-edit-form">
          <div className="movie-edit-column">
            <label className="label-text" htmlFor="Title">Movie's title:</label>
            <input id="Title" value={this.state.Title} placeholder="Movie's title" onChange={this.onChange} />
          </div>
          <div className="movie-edit-column">
            <label className="label-text" htmlFor="Plot">Movie's descriptions:</label>
            <textarea id="Plot" value={this.state.Plot} placeholder="Movie's descriptions" onChange={this.onChange} />
          </div>
          <div className="movie-edit-column">
            <label className="label-text" htmlFor="Poster">URL to poster:</label>
            <input id="Poster" value={this.state.Poster} placeholder="Movie's poster url" onChange={this.onChange} />
          </div>
          <div className="submit-buttons movie-edit-column">
            <button type="submit" onClick={this.onSubmit}>Save</button>
            <button type="submit" onClick={this.onReset}>Reset Form</button>
            <button type="button" onClick={this.onReturn}>Return</button>
          </div>
        </form>
      </div>
    );
  }
}

const validatePropsAfterFetch = (props, propName) => {
  if ((props['fetched'] === true && (props[propName] === undefined || typeof (props[propName]) != 'string'))) {
    return new Error(`${propName} should be as string`);
  }
}

MovieEdit.propTypes = {
  movie: PropTypes.shape({
    imdbID: validatePropsAfterFetch,
    Title: validatePropsAfterFetch,
    Poster: validatePropsAfterFetch,
    Plot: validatePropsAfterFetch,
  }),
  fetched: PropTypes.bool.isRequired,
  updateMovie: PropTypes.func.isRequired,
}

const withImdb = connectImpdApi({
  fetchById: true,
  pathToQuery: "match.params.id",
  fetchedFields: [MOVIE_PARAMS.Plot, MOVIE_PARAMS.imdbID, MOVIE_PARAMS.Poster, MOVIE_PARAMS.Title],
})(MovieEdit)

export default inject('historyStore')(withRouter(observer(withImdb)));
