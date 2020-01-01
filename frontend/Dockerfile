FROM node:13.5.0-alpine
RUN mkdir /app
WORKDIR /app
ADD package.json /app/
RUN yarn
ADD . /app/
