# back-geotrace
Back de l'application Geo-trace

## Installation 

### Prérequis 

- [NodeJs](https://nodejs.org/fr/)

## installation avec Dockerfile 


pour crée l'image taper cette commande : `docker build -t back-geotrace .` ( à la racine de front-geotrace)

ensuite pour lancer le container, taper cette commande : `docker run -d -p 8080:3000 back-geotrace`

le container expose le port : 3000
### procédure d'installation 

1. cloner le projet et placer le terminal à la racine du projet
2. crée le fichier `.env` en vous servant de example `.env.example`
3. modifier les valeurs en fonction de votre système 
4. taper : `npm install` pour installer les dépendances
5. taper : `npm start` pour lancer api 

API ce lance par défaut sur le port 3000


## les routes 

GET `/itineraire`

récupère tous les itinéraires 

GET `/itineraire/2`

recupère itinéraire qui à ID numéro 2 

POST `/avis` 

permet d'envoyé un avis 

donné à envoyé au format JSON: 

```json
{
	"note": 2,
	"commentaire": "le commentaire de l'avis
}
```



