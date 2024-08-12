FROM node:18

WORKDIR /app

COPY server-app/package*.json ./

RUN npm install

COPY server-app .

EXPOSE 5001

CMD ["npm", "run", "start"]
