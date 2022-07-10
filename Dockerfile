FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN yarn install

COPY . .

RUN yarn build


FROM nginx:1.19-alpine AS server

COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app /
COPY --from=builder /app/public /public

EXPOSE 80