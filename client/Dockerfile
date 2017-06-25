FROM mhart/alpine-node:6

# docker mantainer
MAINTAINER Ali Fathieh

RUN mkdir /app_src

# Add package.json and npm install to use docker cache for speedy build
ADD package.json /app_src/package.json
RUN cd /app_src && npm install

CMD npm start
