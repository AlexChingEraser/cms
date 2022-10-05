FROM node:16
ENV NODE_ENV=production
WORKDIR /app
COPY . .
CMD [ "node", "./src/index.js" ]
