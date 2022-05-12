FROM node:latest
WORKDIR /
ADD . .
EXPOSE 3000
RUN npm install
CMD  npm run build && npm run start