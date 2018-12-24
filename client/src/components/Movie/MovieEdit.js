import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state);
  }
  render() {
    return (
      <div className="movie-edit">
        <form onSubmit={this.onSubmit} className="movie-edit-form">
          <div className="movie-edit-column">
            <label className="label-text" htmlFor="Title">Movie's title:</label>
            <input id="Title" value={this.state.Title} placeholder="Movie's title"  onChange={this.onChange} />
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
            <button type="submit">Save</button>
            <button type="button" onClick={this.props.onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

MovieEdit.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
  }),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}