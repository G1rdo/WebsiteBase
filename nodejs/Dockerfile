FROM node:24

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz

#//RUN apt-get update \
#//    && apt-get install -y wget \
#//    && wget -O - https://github.com/jwilder/dockerize/releases/download/v0.9.6/dockerize-alpine-linux-amd64-v0.9.6.tar.gz | tar xzf - -C /usr/local/bin \
#//    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY nodejs/src/index.js ./
COPY nodejs/src/views/* ./views/
#COPY nodejs/package.json nodejs/package-lock.json ./
COPY nodejs/package.json ./
RUN npm install
#RUN npm ci --only=production

USER node

CMD ["node", "index.js"]
