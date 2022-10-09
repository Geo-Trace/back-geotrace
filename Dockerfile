FROM node:16.17.0

LABEL version="1.0"
LABEL description="Back de l'application Geotrace"

WORKDIR /app

COPY . .

RUN npm install

ENV MONGO_HOST="localhost"
ENV MONGO_PORT="27017"
ENV MONGO_USER=""
ENV MONGO_PASSWORD=""
ENV MONGO_DATABASE="database-geotrace"



EXPOSE 3000

CMD ["npm", "start"]