import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem/MovieItem';
import Movie from 'src/components/Movie/Movie';
import { connectImpdApi } from 'src/components/ImdbHOC';
import './style.scss';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    };
  }

  onMovieSelection = (e) => {
    const selectedMovieID = e._targetInst.return.key;
    const selectedMovie = this.props.movies.find(m => m.imdbID === selectedMovieID);
    this.setState({ selectedMovie });
  }

  updateSelectedMovie = (updatedMovie) => {
    this.props.updateMovie(updatedMovie)
      .then(() => this.setState({
          selectedMovie: null,
      }));
  }
  
  exitEditMode = () => {
    this.setState({
      selectedMovie: null,
    });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.selectedMovie ? (
          <div className="movies-list" onClick={this.onMovieSelection}>
            {this.props.movies.map((movie) => (
              <MovieItem key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} plot={movie.Plot} />
            ))}
          </div>
        ) : (
          <Movie movie={this.state.selectedMovie} onSave={this.updateSelectedMovie} onCancel={this.exitEditMode}/>
        )}
      </React.Fragment>
      
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default connectImpdApi(Movies);