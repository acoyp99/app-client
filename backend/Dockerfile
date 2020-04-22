FROM node:alpine
WORKDIR /usr/src/app
RUN apk update && apk upgrade
COPY package.json .
RUN npm install
COPY /dist .
#Expose port and start application
EXPOSE 8080
CMD [ "node", "index.js" ]