FROM node:8.7.0-alpine

RUN mkdir -p /app/server

# Set the working directory to /server
WORKDIR app/server
# copy package.json into the container at /server
COPY package.json app/server/
# install dependencies
RUN npm install
# Copy the current directory contents into the container at /server
COPY . app/server/

# COPY ormconfig.docker.json ./ormconfig.json
# Make port 80 available to the world outside this container
# EXPOSE 80
# Run the app when the container launches
CMD ["npm", "dev"]