FROM node:14-alpine

COPY app /app
WORKDIR /app

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

RUN npm install

EXPOSE 3000 6006

CMD tail -f /dev/null
