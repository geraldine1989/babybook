<<<<<<< HEAD
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/babybook', { useNewUrlParser: true });
=======
var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Credentials', true);
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
 next();
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/babybook", { useNewUrlParser: true });
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052

/**
* var
*/
<<<<<<< HEAD
const registeredEmails = new mongoose.Schema({
  email: String,
  password: String,
  accessCode: String,
});
const registered_emails = mongoose.model('registered_emails', registeredEmails);

/**
* les routes
*/
/**
* Récupération de la liste de emails enregistrés
*/
let regEmails = [];
app.get('/getEmails', (req, res) => {
  function findEmails() {
    return new Promise(((resolve, reject) => {
      registered_emails.find((err, response) => {
        regEmails = response;
        resolve (response);
        return response;
      });
    }));
  }
  findEmails()
    .then((response) => {
      regEmails = response;
      regEmails = regEmails.map(email => email.email);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});

/**
* inscription
*/
console.log(regEmails);

app.post('/inscription', (req, res) => {
  const newUser = new registered_emails(req.body);
  console.log(regEmails);
  console.log(`newUserEmail : ${newUser.email}`);
  const emailExist = regEmails.filter(email => newUser.email === email);
  console.log(emailExist);
  if (emailExist[0]) {
    res.send('notOk');
  }
  else {
    newUser.save()
      .then((item) => {
        res.send('Name saved to database');
      })
      .catch((err) => {
        res.status(400).send('Unable to save to database');
      });
  }
});

/**
 * infos parents - enfant
 */

const registeredChild = new mongoose.Schema({
  firstname: String,
  lastname: String,
  birthdate: Date,
});
const Child = mongoose.model('child', registeredChild);

/* Chargement de la liste des enfants */
app.get('/espace-parents/infos/get-child', (req, res) => {
  function findRegisteredChild() {
    return new Promise(((resolve, reject) => {
      Child.find((err, response) => {
        regChild = response;
        resolve (regChild);
        return regChild;
      });
    }));
  }
  findRegisteredChild()
    .then((regChild) => {
      res.status('200').send(regChild);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});
/* Enregistrement d'un enfant dans la BDD */
app.post('/espace-parents/infos/add-child', (req, res) => {
  const newChild = new Child(req.body);
  newChild.save()
    .then((item) => {
      res.send('Name saved to database');
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });

  // Chargement de la nouvelle liste
  function findRegisteredContacts() {
    return new Promise(((resolve, reject) => {
      Child.find((err, response) => {
        regChild = response;
        resolve (regChild);
        return regChild;
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
 * infos parents - santé - médicaments
 */

const registeredMed = new mongoose.Schema({
  name: String,
});
const Med = mongoose.model('med', registeredMed);

app.post('/espace-parents/infos/meds', (req, res) => {
  const newMed = new Med(req.body);
  newMed.save()
    .then((item) => {
      res.send('Name saved to database');
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

/**
 * infos parents - santé - vaccins
 */

const registeredVaccine = new mongoose.Schema({
  name: String,
});
const Vaccine = mongoose.model('vaccine', registeredVaccine);

app.post('/espace-parents/infos/vaccines', (req, res) => {
  const newVaccine = new Vaccine(req.body);
  newVaccine.save()
    .then((item) => {
      res.send('Name saved to database');
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

/**
 * infos parents - santé - allergies
 */

const registeredAllergie = new mongoose.Schema({
  name: String,
});
const Allergie = mongoose.model('allergie', registeredAllergie);

app.post('/espace-parents/infos/allergies', (req, res) => {
  const newAllergie = new Allergie(req.body);
  newAllergie.save()
    .then((item) => {
      res.send('Name saved to database');
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

/**
 * infos parents - téléphones
 */

const registeredPhone = new mongoose.Schema({
  phonename: String,
  phonenumber: String,
});
const Phone = mongoose.model('phone', registeredPhone);

app.post('/espace-parents/infos/phone', (req, res) => {
  const newPhone = new Phone(req.body);
  newPhone.save()
    .then((item) => {
      res.send('Name saved to database');
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
=======
var registeredEmails = new mongoose.Schema({
 email: String,
 password: String,
 accessCode: String
});
var registered_emails = mongoose.model("registered_emails", registeredEmails);
/**
* les routes
*/
/**
* Récupération de la liste de emails enregistrés
*/
var regEmails = [];
app.get("/getEmails", (req, res) => {
 function findEmails() {
   return new Promise(function(resolve, reject) {

     registered_emails.find(function (err, response) {
       regEmails = response;
       resolve (response);
       return response;
     })
   })
 }
 findEmails()
 .then(function(response) {
   regEmails = response;
   regEmails = regEmails.map(email => email.email);
 })
 .catch(function(err) {
   console.log('Caught an error!', err);
 });
})

/**
* inscription
*/

app.post("/inscription", (req, res) => {
 var newUser = new registered_emails(req.body);
 console.log(regEmails);
 console.log('newUserEmail : ' + newUser.email);
 const emailExist = regEmails.filter(email => newUser.email === email)
 console.log(emailExist);
   if (emailExist[0]) {
     res.send('notOk');
   } else {

     newUser.save()
     .then(item => {
       res.send("Name saved to database");
     })
     .catch(err => {
       res.status(400).send("Unable to save to database");
     });
   }

});

/**
 * gestion contacts espace parents
 */

var registeredContacts = new mongoose.Schema({
  id: String,
  email: String,
  name: String,
 });

var registered_contacts = mongoose.model("registered_contacts", registeredContacts);

/**
 * Chargement de la liste des contacts
 */
app.get("/espace-parents/contacts", (req, res) => {
  function findRegisteredContacts() {
    return new Promise(function(resolve, reject) {
      registered_contacts.find(function (err, response) {
        regContacts = response;
        resolve (regContacts);
        return regContacts;
      })
    })
  }
  findRegisteredContacts()
  .then(function(regContacts) {
    res.status('200').send(regContacts);
  })
  .catch(function(err) {
    console.log('Caught an error!', err);
  });
});

/**
 * enregistrement d'un contact
 */
app.post("/espace-parents/contacts/add-contact", (req, res) => {
  var NewContact = new registered_contacts(req.body);
  
// Enregistrement du nouveau contact
  NewContact.save()
  .then(item => {
    // res.send("Name saved in db");
  })
  .catch(err => {
    res.status(400).send("Unable to save in db");
  });

// Chargement de la nouvelle liste
  function findRegisteredContacts() {
    return new Promise(function(resolve, reject) {
      registered_contacts.find(function (err, response) {
        regContacts = response;
        resolve (regContacts);
        return regContacts;
      })
    })
  }
  findRegisteredContacts()
  .then(function(regContacts) {
    res.status('200').send(regContacts);
  })
  .catch(function(err) {
    console.log('Caught an error!', err);
  });
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
});

/**
* Listen PORT 3000
*/
app.listen(port, () => {
<<<<<<< HEAD
  console.log('Server listening on port ' + port);
=======
   console.log("Server listening on port " + port);
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
});
