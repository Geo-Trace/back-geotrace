var express = require('express');
var router = express.Router();

/* CRUD de la ressource itineraire */

/* GET tout les itineraire. */
router.get('/', function(req, res, next) {
    // route qui permet de récuperer tous les itinéraire

    // TODO
  res.json({ title: 'Express' });
});

/* GET  un itinéraire itineraire. */
router.get('/:id', function(req, res, next) {
    // route qui permet de récupéré un itinéraire

    // TODO 
  res.json({ title: 'Express' });
});

module.exports = router;
