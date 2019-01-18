FROM node:10.13-alpine

COPY ./package.json /app/
COPY ./client/package.json /app/client/
COPY ./client/src /app/client/src/
COPY ./server /app/server/

WORKDIR /app
RUN npm install -g yarn
RUN yarn install
RUN npm run build:server

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3001

# Start the app
CMD npm run prod:server