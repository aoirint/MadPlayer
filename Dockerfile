FROM node:14-slim

WORKDIR /code

ADD package.json package-lock.json /code/
RUN npm install

ADD . /code

ENTRYPOINT [ "" ]
