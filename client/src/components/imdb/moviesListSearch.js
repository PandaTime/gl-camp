import React, { Component } from 'react';
import { MoviesApi, DETAILED_FIELDS } from 'client/api';

export default function (options, WrappedComponent) {
  class OmdbMoviesListSearchWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        totalResults: 0,
        fetched: false,
      };
      this.updateMovie = this.updateMovie.bind(this);
    }
    componentDidMount() {
      this.fetchMovies();
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
            fetched: true,
            movie: Object.assign({}, this.updateMovie),
          })
        );
      });
    }

    shouldDetailyFetch () {
      return options.fetchedFields.some(field => DETAILED_FIELDS.includes(field));
    }

    fetchMovies() {
      MoviesApi.getMovies({ detailedResult: this.shouldDetailyFetch() })
        .then((res) => {
          this.setState({
            movies: res.data.Search.map(this.filterRequiredFields),
            totalResults: res.data.totalResults,
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
    
    updateMovie = () => {
      console.log('updateMovie#listSearch');
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} updateMovie={this.updateMovie} />
    }
  }

  return OmdbMoviesListSearchWrapper;
}
