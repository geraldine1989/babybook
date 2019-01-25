var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
const port = 3000;
const baseUrl = "mongodb://localhost:27017/babybook";
const MongoClient = require('mongodb').MongoClient;

/**
 * Express
 */
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

/**
 * Récupération de la BDD
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
      console.log(value);
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
app.post('/inscription', upload.array(), (req, res, next) => {
  const datas = req.body;
  function sendDatas() {
    return new Promise(function(resolve, reject) {
      //connection
      MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
        if (error) throw error;
        const database = db.db('babybook');

        database.collection('parents').insertOne(datas)
      });
    });
  }
  sendDatas()
    .then(function() {
      res.send("inscription ok");
    })
    .catch(function(err) {
      console.log('Caught an error!', err);
    });
})

// le server écoute le port
app.listen(port);


// app.get('/inscription', (req, res, next) => {
//   // récupération depuis la base de la liste de emails enregistrés
//   const emailSend = req.query;
//   console.log(emailSend);
//   function getEmails() {
//     return new Promise(function(resolve, reject) {
//       //connection
//       MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
//         if (error) throw error;
//         const database = db.db('babybook');

//         database.collection('emails').find().toArray(function(error, results) {
//           if (error) throw error;
//           // console.log(results);
//           result = results[0];
//           resolve (result);
//           return result;
//         });
//       });
//     });
//   }
//   getEmails()
//     .then(function(value) {
//       // console.log(value);
//       const validity = checkEmail(value) ? "L'email existe déjà" : "L'email est valide";
//       res.send(validity);
//     })
//     .catch(function(err) {
//       console.log('Caught an error!', err);
//     });

// const checkEmail = (value) => {
//   for (var key in value) {
//     // comparaison avec le mail envoyé en requête
//     if (value[key] === emailSend.email) {
//       return true;
//     }
//   }
//   return false;
// }
// })

// const checkEmail = (value) => {
//   for (var key in value) {
//     // comparaison avec le mail envoyé en requête
//     if (value[key] === emailSend.email) {
//       return true;
//     }
//   }
//   return false;
// }