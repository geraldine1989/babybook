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

/**
* var
*/
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

app.post('/espace-parents/infos/child', (req, res) => {
  const newChild = new Child(req.body);
  newChild.save()
    .then((item) => {
      res.send('Name saved to database');
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
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
});

/**
* Listen PORT 3000
*/
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
