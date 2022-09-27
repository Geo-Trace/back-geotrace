var express = require('express');
var router = express.Router();
var ITINERAIRES = require('../models/mock-itineraire.json') //mock itinéraire

/* CRUD de la ressource itineraire */

/* GET tout les itineraire. */
router.get('/', function(req, res, next) {
    // route qui permet de récuperer tous les itinéraire

    // TODO
  res.json(ITINERAIRES);
});

/* GET  un itinéraire itineraire. */
router.get('/:id', function(req, res, next) {
    // route qui permet de récupéré un itinéraire
    
    const itineraire = ITINERAIRES.find(element => element.id == req.params.id) 

    // TODO 
  res.json(itineraire);
});

module.exports = router;
