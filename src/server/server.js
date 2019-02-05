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
  id: String,
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
});

/** Ajout d'une tache */

var addTaskFromParents = new mongoose.Schema({
    name: String,
    hour: String,
    indic: String,
    tododone:String,
    id: String,
   });

   var add_task = mongoose.model("add_task", addTaskFromParents);

    /**
 * Chargement de la liste des taches
 */
app.get("/espace-parents/journee-type", (req, res) => {
  function findTasks() {
    return new Promise(function(resolve, reject) {
      add_task.find(function (err, response) {
        tasks = response;
        resolve (tasks);
        return tasks;
      })
    })
  }
  findTasks()
    .then(function(tasks) {
    console.log('tasks : ', tasks);
      res.status('200').send(tasks);
  })
    .catch(function(err) {
    console.log('Caught an error!', err);
  });
  });

/**
 * Enregistrement du nouveau contact
 */
app.post("/espace-parents/add-task", (req, res) => {
  var newTask = new add_task(req.body);
  newTask.save()
    .then(item => {
      // res.send("Task saved to database");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
  /**Chargement de la nouvelle liste */
  function findTasks() {
    return new Promise(function(resolve, reject) {
      add_task.find(function (err, response) {
        tasks = response;
        resolve (tasks);
        return tasks;
      })
    })
  }
  findTasks()
  .then(function(tasks) {
    console.log('tasks : ', tasks);
    res.status('200').send(tasks);
  })
  .catch(function(err) {
    console.log('Caught an error!', err);
  });
});

    

/** Ajout d'une note pour la journée */
var addNoteFromParents = new mongoose.Schema({
  note: String,
 });
 var add_note = mongoose.model("add_note", addNoteFromParents);

 
  app.post("/espace-parents/add-note-day-parents", (req, res) => {
    var newNote = new add_note(req.body);
    newNote.save()
        .then(item => {
          console.log('la note a été sauvegardée');
          res.send("Note save to database");
        })
        .catch(err => {
          res.status(400).send("Unable to save to database");
        });
      
    });

/** Ajout d'une note de la nanny pour la journée */
var addNoteFromNanny = new mongoose.Schema({
  nannyNote: String,
 });
 var add_note_nanny = mongoose.model("add_note_nanny", addNoteFromNanny);

 
  app.post("/myday/nannydaytask", (req, res) => {
    var newNoteNanny = new add_note_nanny(req.body);
    newNoteNanny.save()
        .then(item => {
          console.log('la note de la nanny pour la journée a été sauvegardée');
          res.send("Note save to database");
        })
        .catch(err => {
          res.status(400).send("Unable to save to database");
        });
      
    });
  // test
  

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
});

/**
* Listen PORT 3000
*/
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
