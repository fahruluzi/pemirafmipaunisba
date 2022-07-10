FROM node:14-buster

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install 

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000
ENV NEXT_TELEMETRY_DISABLED 1
CMD [ "yarn", "start" ]