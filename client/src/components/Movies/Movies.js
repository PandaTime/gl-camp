import React, { Component } from 'react';
import MovieItem from './MovieItem/MovieItem';
import Movie from 'src/components/Movie/Movie';
import { MoviesApi } from 'src/api';
import './style.scss';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }
  componentDidMount() {
    this.getMovies();
  }
  getMovies = () => {
    // Title, Poster, imdbID
    MoviesApi.getMovies()
      .then((res) => this.setState({movies: res.data.Search}));
  }
  onMovieSelection = (e) => {
    const selectedMovieID = e._targetInst.return.key;
    const selectedMovie = this.state.movies.find(m => m.imdbID === selectedMovieID);
    this.setState({ selectedMovie });
  }

  updateSelectedMovie = (updatedMovie) => {
    const movies = this.state.movies.map(m => m);
    const movieIndex = movies.findIndex(m => m.imdbID === updatedMovie.imdbID);
    movies[movieIndex] = updatedMovie;
    this.setState({
      movies,
      selectedMovie: null,
    });
  }
  
  exitEditMode = () => {
    this.setState({
      selectedMovie: null,
      selectedMovieID: null,
    });
  }

  render() {
    return (
      <React.Fragment>
        {!this.state.selectedMovie ? (
          <div className="movies-list" onClick={this.onMovieSelection}>
            {this.state.movies.map((movie) => (
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