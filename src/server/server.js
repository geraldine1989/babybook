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
// const connection = mongoose.createConnection("mongodb://localhost:27017/babybook", { useNewUrlParser: true });

// app.use(session({
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }));

/**
 * var
 */
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

/**
 * inscription
 */

app.post("/inscription", (req, res) => {
  var newUser = new registered_parents(req.body);
  console.log('regParents : ', regParents);
  console.log('newUserEmail : ' + newUser.email);
  const emailExist = regParents.filter(email => newUser.email === email.email);
  console.log(emailExist);
    if (emailExist[0]) {
      res.send('notOk');
    } else {

      newUser.save()
      .then(item => {
        /**
         * Send email
         */
        // "use strict";
        // const nodemailer = require("nodemailer");

        // // async..await is not allowed in global scope, must use a wrapper
        // async function sendEmail(){
        //   // create reusable transporter object using the default SMTP transport
        //   const transporter = nodemailer.createTransport({
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true, // true for 465, false for other ports
        //     auth: {
        //       user: 'spionit@gmail.com',
        //       pass: 'ttrchecpoihufqcs'
        //     }
        //   });

        //   // setup email data
        //   const mailOptions = {
        //     from: '"Babybook"', // sender address
        //     to: `${newUser.email}`, // list of receivers
        //     subject: "Bienvenue sur Babybook", // Subject line
        //     text: "Merci pour votre inscription à Babybook", // plain text body
        //     html: "<b>Alors ça c'est top ! :)</b>" // html body
        //   };

        //   // send mail with defined transport object
        //   const info = await transporter.sendMail(mailOptions)

        //   console.log("Message sent: %s", info.messageId);
        // }

        // sendEmail().catch(console.error);
        // ********************** ^^

        res.send("Name saved to database");
      })
      .catch(err => {
        res.status(400).send("Unable to save to database");
      });
    }
  
});

/**
 * login Parents
 */
// var regEmails = [];
// app.post("/loginParents", (req, res) => {
//   var user = new registered_emails(req.body);
//   console.log(user);
//   function findEmails() {
//     return new Promise(function(resolve, reject) {
//       registered_emails.find(function (err, response) {
//         regEmails = response;
//         resolve (regEmails);
//         return regEmails;
//       })
//     })
//   }
//   findEmails()
//   .then(function(regEmails) {
//     console.log(regEmails);
//     const emailExist = regEmails.filter(email => user.email === email);
//     if (emailExist) {
//       if (user.password === '') {
//         //todo
//         res.send('Connexion ok');
//       }
//     } else {
//       res.send('Erreur de connexion')
//     }
//   })
//   .catch(function(err) {
//     res.status(400).send('Login impossible', err);
//   });
// })

app.post("/loginParents", (req, res) => {
  console.log('*******************************');
  var user = new registered_parents(req.body);
  console.log('user : ',user);
  function findEmails() {
    return new Promise(function(resolve, reject) {
      const returnedUser = registered_parents.find({'email': user.email});
      resolve (returnedUser);
    })
  }
  findEmails()
  .then(function(returnedUser) {
    console.log('returnedUser', returnedUser[0]);
    
    if (returnedUser[0]) {
      if (user.password === returnedUser[0].password) {
        console.log('user ok mpd ok');

        res.send('logged');
      } else {
        console.log('user ok mdp PAS ok');
        res.send('notLogged');
      }
    } else {
      console.log('user PAS ok');
      res.send('notLogged');
    }
  })
  .catch(function(err) {
    res.status(400).send(err);
  });
})

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
    function findRegisteredContacts() {
    return new Promise(function(resolve, reject) {
      registered_contacts.find(function (err, response) {
        regContacts = response;
        resolve (regContacts);
        return regContacts;
      })
    })
  }
// Enregistrement du nouveau contact
  NewContact.save()
    .then(item => {
      // Chargement de la nouvelle liste
      findRegisteredContacts()
        .then(function(regContacts) {
          res.status('200').send(regContacts);
        })
        .catch(function(err) {
          console.log('Caught an error!', err);
        });
    })
    .catch(err => {
      res.status(400).send("Unable to save in db");
    });
});

// Supprimer un contact

app.post("/espace-parents/contacts/remove-contact", (req, res) => {
  var DeletdContact = req.body;
  console.log('coucou je veux être supprimé à tout jamais');
  console.log(DeletdContact);
  console.log(registered_contacts(req)); 



  registered_contacts.deleteOne({ 'id': [DeletdContact] }, function (err) {});
    // .then(item => {
    //   // res.send("Name saved in db");
    //   console.log('pas statut deleteOne400');
      
    // })
    // .catch(err => {
    //   res.status(400).send("Unable to save in db");
    // });
  // registered_contacts.findById(DeletdContact, function (err, registered_contacts) {});
});

/**
* Listen PORT 3000
*/
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
