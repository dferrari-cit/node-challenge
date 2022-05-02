FROM node:latest
WORKDIR /
ADD . .
EXPOSE ${API_PORT}
RUN npm install
CMD npm run start:dev