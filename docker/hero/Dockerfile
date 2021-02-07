FROM node:14

WORKDIR /usr/src/app

COPY ./docker/hero/package*.json ./
COPY ./dist/apps/hero/main.js ./
COPY ./config ./config

RUN npm install
