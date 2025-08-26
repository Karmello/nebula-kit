FROM node:22-alpine

ARG PAT
ENV PAT=${PAT}

RUN apk update && apk upgrade && apk add --no-cache bash git openssh

RUN apk add --no-cache \
  nss \
  freetype \
  harfbuzz \
  ca-certificates \
  ttf-freefont \
  chromium \
  chromium-chromedriver \
  udev \
  bash \
  curl

WORKDIR /usr/src
RUN git clone https://$PAT@github.com/Karmello/nebula-kit.git

WORKDIR /usr/src/nebula-kit
RUN yarn install

CMD ["yarn", "start-dev", ";", "tail", "-f", "/dev/null"]
