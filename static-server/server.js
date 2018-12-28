const next = require('next')
const routes = require('./src/routes')
const app = next({ dir: 'src', dev: false })
const handler = routes.getRequestHandler(app)
const PORT = 3001;
const { createServer } = require('http')

app.prepare().then(() => {
  createServer(handler).listen(PORT, () => console.log(`Listening on ${PORT}..`));
})