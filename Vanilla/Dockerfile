FROM node:16-alpine

COPY app /usr/app
WORKDIR /usr/app

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]
