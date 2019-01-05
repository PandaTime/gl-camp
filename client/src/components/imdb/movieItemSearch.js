import React, { Component } from 'react';
import { MoviesApi } from 'client/api';

export default function (options, WrappedComponent) {
  class OmdbMovieItemSearchWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movie: {},
        fetched: false,
      };
      this.updateMovie = this.updateMovie.bind(this);
    }
    componentDidMount() {
      this.fetchMovie();
    }

    getMovieId = () => {
      const movieId = options.pathToQuery.reduce((acc, cur) => acc[cur], this.props);
      return movieId;
    }

    updateMovie(updatedMovie) {
      return new Promise((res) => {
        const movies = this.state.movies.map(m => m);
        const movieIndex = movies.findIndex(m => m.imdbID === updatedMovie.imdbID);
        movies[movieIndex] = updatedMovie;
        this.setState(
          { movies },
          () => res({
            success: true,
            movie: Object.assign({}, this.updateMovie),
          })
        );
      });
    }

    fetchMovie() {
      const movieId = this.getMovieId();
      MoviesApi.getMovieById(movieId)
        .then((res) => {
          this.setState({
            fetched: true,
            movie: this.filterRequiredFields(res.data),
          });
        });
    }
    
    filterRequiredFields = (fetchedMovie) => {
      const movie = {};
      Object.keys(fetchedMovie).forEach((key) => {
        if (options.fetchedFields.includes(key)) {
          movie[key] = fetchedMovie[key];
        }
      });
      return movie;
    }

    updateMovie = (movieId, updatedMovie) => {
      return MoviesApi.updateMovie(movieId, updatedMovie);
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} updateMovie={this.updateMovie} />
    }
  }

  return OmdbMovieItemSearchWrapper;
}