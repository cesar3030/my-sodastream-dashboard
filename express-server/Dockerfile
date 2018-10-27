FROM node:10.9.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install -g generator-rest yo
RUN npm install

# Copy server source code
COPY . /usr/src/app

EXPOSE 9000

RUN useradd -ms /bin/bash docker
USER docker

ENTRYPOINT ["npm", "run", "docker"]
