FROM node:latest
WORKDIR /
ADD . .
EXPOSE 3009
RUN npm install
CMD  npm run build && npm run start