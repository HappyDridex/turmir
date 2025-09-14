FROM node:22-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV NUXT_PUBLIC_API_BASE=https://example.ru
ENV NUXT_PUBLIC_API_PREFIX=api

RUN yarn build

EXPOSE 3000

CMD ["yarn", "preview"]