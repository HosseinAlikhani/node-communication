FROM node
WORKDIR /var/www/beauty-socket
COPY . /var/www/beauty-socket
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon