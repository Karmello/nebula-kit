FROM node:22-alpine

ARG PAT
ENV PAT=${PAT}

RUN apk update && apk upgrade && apk add --no-cache bash git openssh
RUN rm -rf ~/.cache/ms-playwright node_modules/.cache/ms-playwright

WORKDIR /usr/src

RUN git clone https://$PAT@github.com/Karmello/nebula-kit.git

WORKDIR /usr/src/nebula-kit

RUN yarn install
RUN PLAYWRIGHT_BROWSERS_PATH=0 yarn playwright install chromium

CMD ["yarn", "start-dev", ";", "tail", "-f", "/dev/null"]
