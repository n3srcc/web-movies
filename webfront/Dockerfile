FROM node:18-alpine
WORKDIR /app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV production
USER node
CMD ["npm", "start"]
