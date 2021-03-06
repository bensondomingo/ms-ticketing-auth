FROM node:alpine

ENV PROJECT_DIR /app

WORKDIR ${PROJECT_DIR}

COPY package.json .
RUN npm install && npm install --save-dev
COPY . .

CMD ["npm", "start"]
