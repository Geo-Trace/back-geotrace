# back-geotrace
Back de l'application Geo-trace

## Installation 

### Prérequis 

- [NodeJs](https://nodejs.org/fr/)

### procédure d'installation 

1. cloner le projet et placer le terminal à la racine du projet
2. taper : `npm install` pour installer les dépendances
3. taper : `npm start` pour lancer api 

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



