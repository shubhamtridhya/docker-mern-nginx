FROM node:14

WORKDIR /bezkoder-api
COPY package.json .
RUN npm i
RUN npm install
COPY . .
CMD npm start

