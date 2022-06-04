FROM node:alpine

RUN mkdir -p /usr/src/webapp

COPY ./mukadi/package.json ./mukadi/package-lock.json ./

RUN npm install 
RUN npm run dev

EXPOSE 3000

CMD [ "npm", "start" ]
