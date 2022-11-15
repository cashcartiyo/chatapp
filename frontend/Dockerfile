FROM node:18-alpine

RUN corepack enable
RUN corepack prepare yarn@stable --activate

WORKDIR /frontend

COPY ./ ./

RUN npm install