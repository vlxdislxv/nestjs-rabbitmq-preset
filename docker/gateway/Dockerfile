FROM node:14-alpine

WORKDIR /usr/src/app

COPY ./docker/gateway/package*.json ./
COPY ./dist/apps/gateway/main.js ./
COPY ./config ./config

RUN npm install

EXPOSE 3000
