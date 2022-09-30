FROM node:16.17.0

LABEL version="1.0"
LABEL description="Back de l'application Geotrace"

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"] 