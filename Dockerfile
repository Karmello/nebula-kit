FROM node:22-alpine

RUN apk update && apk upgrade && apk add --no-cache bash git openssh curl \
  chromium nss freetype harfbuzz ttf-freefont udev

WORKDIR /usr/src

ARG PAT
ENV PAT=${PAT}
RUN git clone https://$PAT@github.com/Karmello/nebula-kit.git

WORKDIR /usr/src/nebula-kit

RUN yarn install --frozen-lockfile

ENV CHROMIUM_PATH=/usr/bin/chromium

CMD ["yarn", "dev", ";", "tail", "-f", "/dev/null"]
