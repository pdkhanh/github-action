FROM node:12.22.6-buster-slim
WORKDIR /app
COPY . /app
CMD [ "node", "server.js" ]