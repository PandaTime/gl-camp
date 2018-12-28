FROM node:10.13-alpine

WORKDIR /app/server

# Install deps
COPY ./server/package* ./
RUN npm install

COPY ./client/src app/client/src
COPY ./server /app/server

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 3001

# Start the app
CMD npm start