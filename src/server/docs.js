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

