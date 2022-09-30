var express = require('express');
var router = express.Router();
var AVIS = require('../models/mock-itineraire.json') //mock itinéraire

/* CRUD de la ressource itineraire */

/* GET tout les itineraires. */
router.post('/', function(req, res, next) {
    // route qui permet d'envoyer un avis
    try {
      // on essaye ça 
      // console log 
      console.log(req.body)
      avis = {note: req.body.note, commentaire: req.body.commentaire, date: new Date()}

      // on stocke dans la BDD 

      //TODO

    }
    catch { 
      res.statusCode = 400; 
      res.json({message: "mauvaise requete"})
    }

  res.json(avis);
});


module.exports = router;
