import imdbHocFn from './imdbHoc';
import { MOVIE_PARAMS } from 'client/api';

const DEFAULT_OPTIONS = {
  fetchById: false,
  fetchByQuery: true,
  detailedResult: false,
  limit: 10,
};
/**
 * @param {Object} options
 * @param {Boolean} [options.fetchById=false] - true if movie should be searched by id(only 1 returns)
 * @param {Boolean} [options.fetchByQuery=false] - if movie should be searched by query(returns an array)
 * @param {String} [options.pathToQuery] - props path to search query string for movies search(fetchById|fetchByQuery, will be id|string accordingly). 
 * If ommited search query will be set to "*"
 * @param {String} [options.pathToPage] - page that should be returned. If ommited "page" will be set to "0"
 * @param {Boolean} [options.detailedResult] - whether fetched query should be detailed(only applicable to list)
 * @param {Number} [options.limit] - number of results per page(only applicable to list)
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

  const validatedOptions = {
    fetchById: options.fetchById,
    fetchByQuery: options.fetchById,
    pathToQuery: options.pathToQuery ? options.pathToQuery.split('.') : [],
    pathToPage: options.pathToPage ? options.pathToPage.split('.') : [],
    isResultDetailed: options.detailedResult,
    limit: options.limit,
  }
  return imdbHocFn(validatedOptions);
}

export { MOVIE_PARAMS };
