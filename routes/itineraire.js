const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb')

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

});

/* GET  un itinéraire. */
router.get('/:id', function (req, res, next) {
  // route qui permet de récupérer un itinéraire

  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw err

    try {
      const db = client.db('database-geotrace')
  
      db.collection('itineraire').findOne({_id: ObjectId(req.params.id)}).then((result) => {
        if (err) throw err
  
        console.log(result)
        res.json(result)
      })

    }
    catch {
      res.status(404).json({message: "Ressource non trouvé"}); 
    }

  });

});

module.exports = router;

