FROM node:20-slim as development

WORKDIR /home/node/app

USER node

CMD [ "tail", "-f", "/dev/null" ]