const next = require('next');
const { parse } = require('url');
const { createServer } = require('http');
const routes = require('./src/routes');

const app = next({ dir: 'src', dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
  app.render(req, res, route.page, query);
});
// const handle = app.getRequestHandler();
const PORT = 3001;

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(PORT, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`);
  })
})