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

const registeredChildren = new mongoose.Schema({
  firstname: String,
  lastname: String,
  birthdate: String,
});
const registered_children = mongoose.model('registered_children', registeredChildren);
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

app.post('/postchild', (req, res) => {
  const newUser = new registered_children(req.body);
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
* Listen PORT 3000
*/
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
