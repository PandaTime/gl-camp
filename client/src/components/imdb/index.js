import movieItemSearch from './movieItemSearch';
import moviesListSearch from './moviesListSearch';
import { MOVIE_PARAMS } from 'client/api';

const DEFAULT_OPTIONS = {
  fetchById: false,
  fetchByQuery: true,
  fetchedFields: [],
};
/**
 * @param {Object} options
 * @param {Boolean} [options.fetchById=false] - true if movie should be searched by id(only 1 returns)
 * @param {Boolean} [options.fetchByQuery=false] - if movie should be searched by query(returns an array)
 * @param {String} [options.pathToQuery] - props path to search query string for movies search(fetchById|fetchByQuery, will be id|string accordingly). 
 * If ommited search query will be set to "*"
 * @param {String} [options.pathToPage] - page that should be returned. If ommited "page" will be set to "0"
 * @param {String} [options.fetchedFields] - list of fetched fields that should be imported. If ommited it will be fetch according API logic
 */
export function connectImpdApi(options = DEFAULT_OPTIONS) {
  if (options.fetchById && options.fetchByQuery) {
    throw new Error('Only 1 query method can be selected: ' +  JSON.stringify(options));
  }
  
  if (!options.fetchById && !options.fetchByQuery) {
    throw new Error('At least 1 query method should be selected: ' + JSON.stringify(options));
  }

  if (options.fetchById && !options.pathToQuery) {
    throw new Error('Path to query should be passed for "fetchById" options - no default value possible: ' + JSON.stringify(options))
  }

  if (Array.isArray(options.fetchedFields)) {
    options.fetchedFields.forEach((field) => {
      if (!MOVIE_PARAMS.hasOwnProperty(field)) {
        throw new Error(`Invalid ${field} in "fetchedFields", passed: ` + JSON.stringify(options));
      }
    })
  } else if (options.fetchedFields !== undefined && options.fetchedFields !== null ) {
    throw new Error(`Invalid "fetchedFields" type, should be an Array, passed: ` + typeof fetchedFields);
  }
  

  const validatedOptions = {
    fetchById: options.fetchById,
    fetchByQuery: options.fetchById,
    pathToQuery: options.pathToQuery ? options.pathToQuery.split('.') : [],
    pathToPage: options.pathToPage ? options.pathToPage.split('.') : [],
    fetchedFields: options.fetchedFields || [],
  }
  
  if (options.fetchById) {
    return movieItemSearch.bind(null, validatedOptions);
  }
  return moviesListSearch.bind(null, validatedOptions);
}

export { MOVIE_PARAMS };
