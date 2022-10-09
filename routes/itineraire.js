const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb')

/* CRUD de la ressource itineraire */

/* GET tout les itineraires. */
router.get('/', function (req, res, next) {
  // route qui permet de récuperer tous les itinéraires
  MongoClient.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`, (err, client) => {
    try {
      if (err) throw err

      const db = client.db('database-geotrace')

      db.collection('itineraire').find().toArray((err, result) => {
        if (err) throw err

        console.log(result)
        res.json(result)
      })

    }
    catch (err) {
      res.status(500).json({ message: `erreur server` })
    }
  })
});

/* GET  un itinéraire. */
router.get('/:id', function (req, res, next) {
  // route qui permet de récupérer un itinéraire

    MongoClient.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`, (err, client) => {
      try {
      if (err) throw err

        const db = client.db('database-geotrace')

        db.collection('itineraire').findOne({ _id: ObjectId(req.params.id) }).then((result) => {
          if (err) throw err

          console.log(result)
          res.json(result)
        })

      }
      catch (err) {
        res.status(404).json({ message: "Ressource non trouvé" });
      }

    });



});

module.exports = router;

