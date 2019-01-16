import React, { useState, useEffect } from 'react';
import { MoviesApi } from 'client/api';

function fetchMovie(movieId) {
  return MoviesApi.getMovieById(movieId)
    .then((res) => ({
      movies: [res.data],
      totalResults: 1,
    }));
}

function fetchMovies({ isResultDetailed, limit }) {
  return MoviesApi.getMovies({ detailedResult: isResultDetailed, numberOfEntities: limit })
    .then((res) => ({
      movies: res.data.Search,
      totalResults: res.data.totalResults,
    }));
}

function fetchData({ fetchById, query, isResultDetailed, limit }) {
  return fetchById ? fetchMovie(query) : fetchMovies({ isResultDetailed, limit });
}

function updateMovie(movieId, updatedMovie) {
  return MoviesApi.updateMovie(movieId, updatedMovie);
}


function getQuery(pathToQuery, props) {
  const movieId = pathToQuery.reduce((acc, cur) => acc[cur], props);
  return movieId;
}

export default function (options, WrappedComponent) {


  return function(props) {
    const [moviesState, setMoviesState] = useState({ fetching: true, movies: [] });
    useEffect(() => {
      fetchData({ fetchById: options.fetchById, query: getQuery(options.pathToQuery, props), isResultDetailed: options.isResultDetailed, limit: options.limit })
        .then((res) => {
          setMoviesState({
            fetching: false,
            movies: res.movies,
            totalResults: res.totalResults,
          });
        })
    }, [props]);

    return <WrappedComponent {...props} {...moviesState} updateMovie={updateMovie} />
  }
}