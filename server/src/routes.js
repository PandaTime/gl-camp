const routes = module.exports = require('next-routes')();

routes
  // name, pattern, page
  .add({ name: 'Movies List', pattern: '(/|/list)', page: 'movies-list' })
  .add({ name: 'Movies Dashboard', pattern: '/dashboard', page: 'movies-dashboard' })
  .add({ name: 'Movie Edit', pattern: '/edit/:movieId', page: 'movie-edit' });