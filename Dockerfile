FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npm install --global serve

EXPOSE 3005

CMD ["serve", "-s", "out", "-l", "3005"]
