const express = require('express');
const app = express();
const port = 3000;

app.get('/findAll', (req, res) => {
  
  function findAll() {
    return new Promise(function(resolve, reject) {
      
      // MongoDB
      const MongoClient = require('mongodb').MongoClient;
      // Connection
      MongoClient.connect("mongodb://localhost:27017/babybook", { useNewUrlParser: true }, function (error, db) {
        if (error) throw error;

        var database = db.db('babybook');
        // requête
        database.collection("parents").find().toArray(function (error, results) {
          if (error) throw error;
          resolve (results);
          return results;
        });
      });
    }); 
  }
  // appel à la fonction
  findAll()
    .then(function(value) {
      res.status(200);
      res.send(value);
    })
    .catch(function(err) {
      console.log('Caught an error!', err);
    });

})

app.listen(port);
