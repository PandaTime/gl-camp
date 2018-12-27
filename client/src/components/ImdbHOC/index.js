import React, { Component } from 'react';
import { MoviesApi } from 'src/api';

export function connectImpdApi(WrappedComponent) {
  return class OmdbWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
        totalResults: 0,
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
            movie: Object.assign({}, this.updateMovie),
          })
        );
      });
    }

    fetchMovies() {
      MoviesApi.getMovies()
        .then((res) => this.setState({
          movies: res.data.Search,
          totalResults: res.data.totalResults,
        })
      );
    }
    render() {
      console.log('this.state', this.state);
      return <WrappedComponent {...this.props} {...this.state} updateMovie={this.updateMovie}/>
    }
  }
}