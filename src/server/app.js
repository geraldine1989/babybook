
// ***************************
// Transmission des données OK
// *************************** vv

const express = require('express')
const app = express()
const port = 3000

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

app.listen(port)

// *************************** ^^


// **********************
// Création Collection OK
// ********************** vv

// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/babybook", function(error, db) {
//     if (error) return funcCallback(error);

//     var database = db.db('babybook');
//     database.createCollection('test', function(err, db) {
//       if (err) throw err;
//       console.log('collection créée.');

//     });
//     console.log("Connecté à la base de données 'babybook'");
// });
// ********************** ^^

// **************************
// Récupération Collection OK
// ************************** vv

// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/babybook", function (error, db) {
//   if (error) throw error;

//   var database = db.db('babybook');

//   database.collection("parents").find().toArray(function (error, results) {
//     if (error) throw error;
//     console.log(results);

//   });
// });
// *************************** ^^

/* Format des données en base :
{ _id: 5c40c870edb6bc09d8e4da1c,
  firstName: 'Toto',
  lastName: 'Dupont',
  age: '12',
  email: 'toto@me.com' }
*/

