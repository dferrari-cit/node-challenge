FROM node:latest
WORKDIR /
ADD . .
EXPOSE 3007
RUN npm install
CMD  npm run build && npm run start