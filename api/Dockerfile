FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

copy . .

EXPOSE 3333

CMD ["npm", "start"]