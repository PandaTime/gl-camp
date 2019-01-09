FROM node:10.13-alpine



COPY ./client/src /app/client/src
COPY ./client/package.json /app/client
COPY ./server /app/server

# TODO: create link
WORKDIR /app/client
RUN npm install

WORKDIR /app/server
RUN npm run npm_install
RUN npm rebuild node-sass
RUN npm run build

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3001

# Start the app
CMD npm start