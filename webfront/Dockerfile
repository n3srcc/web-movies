FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN yarn install

COPY . .
RUN yarn build
CMD ["yarn", "start"]