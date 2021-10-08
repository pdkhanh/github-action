FROM node:12.22.6-buster-slim
WORKDIR /app
COPY . /app
RUN mpn install
CMD [ "node", "server.js" ]