FROM node:12-alpine as builder
RUN npm install -g gatsby-cli