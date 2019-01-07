const routes = module.exports = require('next-routes')();

routes
  // name, pattern, page
  .add({ name: 'Movies List', pattern: '/', page: 'index' })
  .add({ name: 'Movies Dashboard', pattern: '/dashboard', page: 'index' })
  .add({ name: 'Movie Edit', pattern: '/edit/:movieId', page: 'movieEdit' })
  // .add('blog', '/blog/:slug')
  // .add('user', '/user/:id', 'profile')
  // .add('/:noname/:lang(en|es)/:wow+', 'complex')
  // .add({ name: 'beta', pattern: '/v3', page: 'v3' })