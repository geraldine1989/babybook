var express = require('express');
var app = express();
const bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
const port = 3000;
const baseUrl = "mongodb://localhost:27017/babybook";
const MongoClient = require('mongodb').MongoClient;
var registeredEmails = [];
var hash = require('hash.js');

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

        // requête adday
        database.collection("addday").find().toArray(function (error, results) {
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
 * Récupération des emails inscrits
 */
app.get('/getEmails', (req, res, next) => {
  // récupération depuis la base de la liste de emails enregistrés
  function getRegisteredEmails() {
    return new Promise(function(resolve, reject) {
      //connection
      MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
        if (error) throw error;
        const database = db.db('babybook');

        database.collection('registeredEmails').find().toArray(function(error, results) {
          if (error) throw error;
          result = results[0];
          resolve (result);
          return result;
        });
      });
    });
  }
  getRegisteredEmails()
    .then(function(response) {
      // const validity = checkEmail(value) ? "L'email existe déjà" : "L'email est valide";
      registeredEmails = response;
      // res.send(validity);
      console.log(registeredEmails);
      res.send();
    })
    .catch(function(err) {
      console.log('Caught an error!', err);
    });

// const checkEmail = (value) => {
//   for (var key in value) {
//     // comparaison avec le mail envoyé en requête
//     if (value[key] === emailSend.email) {
//       return true;
//     }
//   }
//   return false;
// }
})

/**
 * Inscription
 */
app.post('/inscription', upload.array(), (req, res, next) => {
  const datas = req.body;
  console.log(datas);
  for (key in registeredEmails) {
    if (datas.email === registeredEmails[key]) {
      console.log('email existant');
      const message = "Cet email est déjà utilisé.";
      res.send(message)
    } else {
    function sendDatas() {
      return new Promise(function(resolve, reject) {
        //connection
        MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
          if (error) throw error;
          const database = db.db('babybook');
          
          // database.collection('parents').insertOne(datas);
          database.collection('registeredEmails').insertOne(datas);

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
  }
  }
})
   

/**
 * Login Parents
 */
app.post('/loginParents', upload.array(), (req, res, next) => {
  const datas = req.body;
  console.log(datas);
  function sendDatas() {
    return new Promise(function(resolve, reject) {
      //connection
      MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
        if (error) throw error;
        const database = db.db('babybook');

        database.collection("parents").find({'email': datas.email}).toArray(function (error, results) {
          if (error) throw error;
          resolve (results);
          return results;
        });
      });
    });
  }
  sendDatas()
    .then(function(results) {
      if (results[0].password !== datas.password) {
        res.send('L\'email ou le mot de passe est incorrect.')
      } else {
        res.send('ParentLogged');
      }
    })
    .catch(function(err) {
      console.log('Caught an error!', err);
    });
})


/**
 * Add Day type
 */
app.post('/newday', upload.array(), (req, res, next) => {
  const datas = req.body;
  function sendDatas() {
    return new Promise(function(resolve, reject) {
      //connection
      MongoClient.connect(baseUrl, { useNewUrlParser: true }, function (error, db) {
        if (error) throw error;
        const database = db.db('babybook');

        database.collection('addday').insertOne(datas)
      });
    });
  }
  sendDatas()
    .then(function() {
      res.send("modification journee ok");
    })
    .catch(function(err) {
      console.log('Caught an error!', err);
    });
})


// le server écoute le port
app.listen(port);



