FROM node:22-alpine

ARG PAT
ENV PAT=${PAT}

RUN apk update && apk upgrade && apk add --no-cache bash git openssh

WORKDIR /usr/src
RUN git clone https://$PAT@github.com/Karmello/nebula-kit.git

WORKDIR /usr/src/nebula-kit
RUN yarn install

CMD ["yarn", "start-dev", ";", "tail", "-f", "/dev/null"]
