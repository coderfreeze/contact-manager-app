FROM node:18

WORKDIR /app

COPY client-app/contact-manager-app/package*.json ./

RUN npm install

COPY client-app/contact-manager-app .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
