const { MongoClient, ObjectId } = require('mongodb')


try {
    console.log("avant tentative BDD")
    MongoClient.connect('mongodb://localhost:27017', (err, client) => {
      if (err) throw err

      console.log("connexion reussi")
  
      const db = client.db('database-geotrace')
  
      db.collection('itineraire').find().toArray((err, result) => {
        if (err) throw err
  
        console.log(result)
      })
    })

  }
  catch {
    res.status(500).json({message: "Erreur serveur"}); 
  }
