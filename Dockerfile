FROM node:latest
WORKDIR /
COPY . .
EXPOSE 3000
RUN npm install
CMD npm run start:dev