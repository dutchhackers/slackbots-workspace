FROM node:16-slim

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json ./

RUN npm install -only=production

COPY ./dist/packages/bots/rabassa ./

CMD node ./src/index.js
