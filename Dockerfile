FROM node:latest
WORKDIR /
COPY . .
EXPOSE 4000
RUN npm install
CMD npm run dev