var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const port = 3000;
const baseUrl = "mongodb://localhost:27017/babybook";
const MongoClient = require('mongodb').MongoClient;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

/**
 * Récupération : tout
 */
app.get('/findAll', (req, res) => {
  
  function findAll() {
    return new Promise(function(resolve, reject) {
      
      // Connection
      MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
        if (error) throw error;
        const database = db.db('babybook');

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

/**
 * Inscription
 */
app.get('/signup', (req, res, next) => {
  // récupération depuis la base de la liste de emails enregistrés
  const emailSend = req.query;
  console.log(emailSend);
  function getEmails() {
    return new Promise(function(resolve, reject) {
      //connection
      MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
        if (error) throw error;
        const database = db.db('babybook');

        database.collection('emails').find().toArray(function(error, results) {
          if (error) throw error;
          // result = JSON.stringify(results);
          // console.log(result);
          resolve (results);
          return results;
        });
      });
    });
  }
  getEmails()
    .then(function(value) {
      console.log(value);
      // for (var key in value) {
      //   console.log(value[key]);
      //   if (emailSend === value[key]) {
      //     res.send("l'email existe déjà.");
      //   } else {
      //     res.send('email valide');
      //   }
      // }
      res.send(value);
    })
    .catch(function(err) {
      console.log('Caught an error!', err);
    });

  // comparaison avec le mail envoyé en requête


})

// le server écoute le port
app.listen(port);
