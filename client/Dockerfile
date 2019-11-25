FROM node:8.7.0-alpine

# Create app directory and use it as the working directory
RUN mkdir -p /app/client
WORKDIR /app/client

COPY package.json /app/client
COPY package-lock.json /app/client

RUN npm install

COPY . /app/client

CMD ["npm", "start"]