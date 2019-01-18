import { decorate, observable, action } from 'mobx';

// TODO: currently this store is useless(not used)-_-
export class moviesStore {
  movies;

  constructor(movies = []) {
    this.movies = movies;
  }

  addMovies(newMovies) {
    this.movies = newMovies;
  }

  updateMovie(movieId, updatedMovie) {
    const movie = this.movies.find(movie => movie.imdbID === movieId);
    if (!movie) {
      return {error: 'Movie not found'};
    }
    Object.assign(movie, updatedMovie);
    return Object.assign({}, movie);
  }

  getMovies() {
    return this.movies;
  }

}

decorate(moviesStore, {
  movies: observable,
  addMovies: action,
});


export default moviesStore;
