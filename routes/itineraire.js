var express = require('express');
var router = express.Router();
var ITINERAIRES = require('../models/mock-itineraire.json') //mock itinéraire
var { MongoClient } = require('mongodb')

/* CRUD de la ressource itineraire */

/* GET tout les itineraires. */
router.get('/', function (req, res, next) {
  // route qui permet de récuperer tous les itinéraires

  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    const db = client.db('database-geotrace')

    db.collection('itineraire').find().toArray((err, result) => {
      if (err) throw err

      console.log(result)
      res.json(result)
    })
  })

  // TODO
  //res.json(ITINERAIRES);
});

/* GET  un itinéraire. */
router.get('/:id', function (req, res, next) {
  // route qui permet de récupérer un itinéraire

  const itineraire = ITINERAIRES.find(element => element.id == req.params.id)

  // TODO 
  res.json(itineraire);
});

module.exports = router;
