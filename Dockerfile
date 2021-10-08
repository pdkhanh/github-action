FROM node:12.22.6-buster-slim
WORKDIR /app
COPY . /app
RUN npm install
CMD [ "node", "server.js" ]