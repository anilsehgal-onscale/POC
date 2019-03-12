FROM node:8

# Create app directory
WORKDIR /usr/src/deploy

# Install app dependencies
COPY . .
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]