FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install next
RUN npm ci
COPY . .
EXPOSE 3000

ENV NODE_ENV production

USER node
CMD ["npm", "start"]
