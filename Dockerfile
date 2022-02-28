FROM node:16-alpine

COPY Server/app /usr/app
COPY Server/public /usr/public
COPY React/app/build /usr/public/react
COPY Vanilla/app/build /usr/public/vanilla
WORKDIR /usr/app

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]
