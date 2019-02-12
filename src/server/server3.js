var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
// connect-mongo
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// email validator
var validator = require("email-validator");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // remplacer '*' par l'adresse du site en prod
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/babybook", { useNewUrlParser: true });
const connection = mongoose.createConnection("mongodb://localhost:27017/babybook", { useNewUrlParser: true });

// app.use(session({
//   store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   secret: 'Ereul9Aeng',
//   resave: false,
//   saveUninitialized: false,
// }));

/**
 * var
 */
var datasSchema = new mongoose.Schema ([
  {
    email: String,
    password: String,
    accessCode: String,
    baby: [
      {
        identity: [
          {
            id: String,
            firstname: String,
            lastname: String,
            birthdate: String,
          },
        ],
        health: [
          {
            medics: [
              {
                id: String,
                name: String,
              },
            ],
            vaccins: [
              {
                id: String,
                name: String,
              },
            ],
            allergies: [
              {
                id: String,
                name: String,
              },
            ],
          }
        ],
        phoneDatas: [
          {
            id: String,
            phonename: String,
            phonenumber: String,
          },
        ],
        myDay: [
          {
            itemList: [
              {
                id: String,
                tododone: Boolean,
                name: String,
                hour: String,
                indic: String,
                note: String,
              },
            ],
            nannyNote: String
          },
        ],
        contacts: [
          {
            id: String,
            name: String,
            email: String,
          },
        ],
      },
    ],
  },
]);
var datas = mongoose.model("datas", datasSchema);

var registeredParents = new mongoose.Schema({
  email: String,
  password: String,
  accessCode: String,
  parent: Boolean,
});
var registered_parents = mongoose.model("registered_parents", registeredParents);
/**
 * les routes
 */
/**
 * Récupération de la liste des parents enregistrés
 */
var regParents = [];
app.get("/getParents", (req, res) => {
  function findParents() {
    return new Promise(function(resolve, reject) {
      registered_parents.find(function (err, response) {
        regParents = response;
        resolve (regParents);
        return regParents;
      })
    })
  }
  findParents()
  .then(function(regParents) {
    // regParents = response;
    regParents = regParents.map(email => email.email);
    console.log('regParents : ', regParents);
    res.status('200').send(regParents);
  })
  .catch(function(err) {
    console.log('Caught an error!', err);
  });
})



/* Enregistrement d'un enfant dans la BDD */
app.post('/espace-parents/infos/add-child', (req, res) => {
  const newChild = req.body;
  console.log(newChild);
  // function findRegisteredChild() {
  //   return new Promise(((resolve, reject) => {
  //     datas.find({}, (err, response) => {
  //       regChild = response;
  //       resolve (regChild);
  //       return regChild;
  //     });
  //   }));
  // }
  // Child.deleteMany({}, function (err) {} );
  // datas.findOneAndUpdate({email: "me@me.com"}, {$set: {"identity": newChild}}, {upsert: true}, function (err, res) {});
  datas.findOneAndUpdate({email: "me@me.com", }, {$set:{"baby.0.identity": newChild}}, function (err, res) {});

});

/**
 * infos parents - santé - médicaments
 */


/**
 * Chargement de la liste des contacts
 */
app.get('/espace-parents/contacts', (req, res) => {
  function findRegisteredContacts() {
    return new Promise(((resolve, reject) => {
      registered_contacts.find((err, response) => {
        regContacts = response;
        resolve (regContacts);
        return regContacts;
      });
    }));
  }
  findRegisteredContacts()
    .then((regContacts) => {
      res.status('200').send(regContacts);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});
/**
 * enregistrement d'un contact
 */
app.post("/espace-parents/contacts/add-contact", (req, res) => {
  var newContact = req.body;
console.log(newContact);
    function findRegisteredContacts() {
    return new Promise(function(resolve, reject) {
      datas.find("contacts", function (err, response) {
        regContacts = response;
        resolve (regContacts);
        return regContacts;
      });
    });
  }
// Enregistrement du nouveau contact
// console.log(datas);
  // datas.findOneAndUpdate({email: "me@me.com", }, {$set:{"baby":  {identity: newChild}}}, function (err, res) {});
  datas.updateOne({email: "me@me.com"}, {$push: {"baby.0.contacts": newContact}}, function (err, res) {});
    // .then(item => {
    //   // Chargement de la nouvelle liste
    //   findRegisteredContacts()
    //     .then(function(regContacts) {
    //       console.log(regContacts);
    //       res.status('200').send(regContacts);
    //     })
    //     .catch(function(err) {
    //       console.log('Caught an error!', err);
    //     });
    // })
    // .catch(err => {
    //   res.status(400).send("Unable to save in db");
    // });
});

// Supprimer un contact


/**
* Listen PORT 3000
*/
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});