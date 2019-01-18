## Structure
- client - React client (doesn't depends on server)
- server - SSR server with next.js(reusing components/screens from `client`).
## How to
- Docker: `docker-compose up`
- Client: `yarn install && cd client && npm start`
- Server: `yarn install && cd server && npm run dev`
## TODO(?)
- `next-router` throw erros on navigation via back/forward btns(using `react-router` and it doesn't like it, hehe)
- To add suspence/lazy loading
## Additional notes
- Hock's can cause problems when multiple React's are available(see: https://github.com/facebook/react/issues/14317)<br> to overcome that use yarn workspaces => `cd ${root} && yarn install`
- Mobx without decorators: wasn't able to make it work on server side
- Because clients supposed to work without server - webpack configs differes for client/server and we're using client's react-router, which is not supposed to be used with next.js(at least for now)
