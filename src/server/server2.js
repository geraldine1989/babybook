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

/**
 * inscription
 */

app.post("/inscription", (req, res) => {
  var newUser = new datas(req.body);
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

/* login parents */

app.post("/loginParents", (req, res) => {
  console.log('*******************************');
  var user = req.body;
  console.log('user : ',user);
  function findEmails() {
    return new Promise(function(resolve, reject) {
      const returnedUser = datas.find({'email': user.email});
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
 * login Nanny
 */
app.post("/loginNanny", (req, res) => {
  console.log('*******************************');
  var user = new registered_contacts(req.body);
  console.log('user : ',user);
  function findContacts() {
    return new Promise(function(resolve, reject) {
      const returnedUser = registered_contacts.find({'email': user.email});
      resolve (returnedUser);
      console.log(returnedUser);
    })
  }
  function findAccessCode() {
    return new Promise(function(resolve, reject) {
      const returnedAccessCode = registered_parents.find({'accessCode': user.email});
      resolve (returnedAccessCode);
      console.log(returnedAccessCode);
    })
  }
  findContacts()
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

// const registeredChild = new mongoose.Schema({
//   id: String,
//   firstname: String,
//   lastname: String,
//   birthdate: Date,
// });
// const Child = mongoose.model('child', registeredChild);

/* Chargement de la liste des enfants */
app.get('/espace-parents/infos/get-child', (req, res) => {
  // function findRegisteredChild() {
  //   return new Promise(((resolve, reject) => {
  //     Child.find((err, response) => {
  //       regChild = response;
  //       resolve (regChild);
  //       return regChild;
  //     });
  //   }));
  // }
  // findRegisteredChild()
  //   .then((regChild) => {
  //     res.status('200').send(regChild);
  //   })
  //   .catch((err) => {
  //     console.log('Caught an error!', err);
  //   });
});
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
  datas.findOneAndUpdate({email: "me@me.com", }, {$set:{"baby":  {identity: newChild}}}, function (err, res) {});
    // .then((item) => {
    //   findRegisteredChild()
    //     .then((regChild) => {
    //       res.status('200').send(regChild);
    //     })
    //     .catch((err) => {
    //       console.log('Caught an error!', err);
    //     });
    // })
    // .catch((err) => {
    //   res.status(400).send('Unable to save to database');
    // });
});

/**
 * infos parents - santé - médicaments
 */

// const registeredMed = new mongoose.Schema({
//   id: String,
//   name: String,
// });
// const Med = mongoose.model('med', registeredMed);

/* Chargement de la liste des médicaments */
app.get('/espace-parents/infos/get-meds', (req, res) => {
  function findRegisteredMed() {
    return new Promise(((resolve, reject) => {
      Med.find((err, response) => {
        regMed = response;
        resolve (regMed);
        return regMed;
      });
    }));
  }
  findRegisteredMed()
    .then((regMed) => {
      res.status('200').send(regMed);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});
/* Enregistrement d'un médicament dans la BDD */
app.post('/espace-parents/infos/add-meds', (req, res) => {
  const newMed = new Med(req.body);
  function findRegisteredMed() {
    return new Promise(((resolve, reject) => {
      Med.find((err, response) => {
        regMed = response;
        resolve (regMed);
        return regMed;
      });
    }));
  }
  newMed.save()
    .then((item) => {
      // Chargement de la nouvelle liste de médicaments
      findRegisteredMed()
        .then((regMed) => {
          res.status('200').send(regMed);
        })
        .catch((err) => {
          console.log('Caught an error!', err);
        });
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

app.post('/espace-parents/infos/remove-meds', (req, res) => {
  const deletedMed = req.body;
  Med.deleteOne({ id: Object.keys(deletedMed) }, function(err) {});
  res.send();
});

// const registeredVaccine = new mongoose.Schema({
//   id: String,
//   name: String,
// });
// const Vaccine = mongoose.model('vaccine', registeredVaccine);

/* Chargement de la liste des vaccins */
app.get('/espace-parents/infos/get-vaccines', (req, res) => {
  function findRegisteredVaccine() {
    return new Promise(((resolve, reject) => {
      Vaccine.find((err, response) => {
        regVaccine = response;
        resolve (regVaccine);
        return regVaccine;
      });
    }));
  }
  findRegisteredVaccine()
    .then((regVaccine) => {
      res.status('200').send(regVaccine);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});
/* Enregistrement d'un vaccin dans la BDD */
app.post('/espace-parents/infos/add-vaccines', (req, res) => {
  const newVaccine = new Vaccine(req.body);
  function findRegisteredVaccine() {
    return new Promise(((resolve, reject) => {
      Vaccine.find((err, response) => {
        regVaccine = response;
        resolve (regVaccine);
        return regVaccine;
      });
    }));
  }
  newVaccine.save()
    .then((item) => {
      // Chargement de la nouvelle liste de médicaments
      findRegisteredVaccine()
        .then((regVaccine) => {
          res.status('200').send(regVaccine);
        })
        .catch((err) => {
          console.log('Caught an error!', err);
        });
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

app.post('/espace-parents/infos/remove-vaccines', (req, res) => {
  const deletedVaccine = req.body;
  Vaccine.deleteOne({ id: Object.keys(deletedVaccine) }, function(err) {});
  res.send();
});


/**
 * infos parents - santé - allergies
 */

// const registeredAllergie = new mongoose.Schema({
//   id: String,
//   name: String,
// });
// const Allergie = mongoose.model('allergie', registeredAllergie);

/* Chargement de la liste des allergies */
app.get('/espace-parents/infos/get-allergies', (req, res) => {
  function findRegisteredAllergie() {
    return new Promise(((resolve, reject) => {
      Allergie.find((err, response) => {
        regAllergie = response;
        resolve (regAllergie);
        return regAllergie;
      });
    }));
  }
  findRegisteredAllergie()
    .then((regAllergie) => {
      res.status('200').send(regAllergie);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});
/* Enregistrement d'une allergie dans la BDD */
app.post('/espace-parents/infos/add-allergies', (req, res) => {
  const newAllergie = new Allergie(req.body);
  function findRegisteredAllergie() {
    return new Promise(((resolve, reject) => {
      Allergie.find((err, response) => {
        regAllergie = response;
        resolve (regAllergie);
        return regAllergie;
      });
    }));
  }
  newAllergie.save()
    .then((item) => {
      // Chargement de la nouvelle liste des allergies
      findRegisteredAllergie()
        .then((regAllergie) => {
          res.status('200').send(regAllergie);
        })
        .catch((err) => {
          console.log('Caught an error!', err);
        });
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });

});

app.post('/espace-parents/infos/remove-allergies', (req, res) => {
  const deletedAllergy = req.body;
  Allergie.deleteOne({ id: Object.keys(deletedAllergy) }, function(err) {});
  res.send();
});

/**
 * infos parents - téléphones
 */

// const registeredPhone = new mongoose.Schema({
//   id: String,
//   phonename: String,
//   phonenumber: String,
// });
// const Phone = mongoose.model('phone', registeredPhone);

/* Chargement de la liste des téléphones */
app.get('/espace-parents/infos/get-phone', (req, res) => {
  function findRegisteredPhone() {
    return new Promise(((resolve, reject) => {
      Phone.find((err, response) => {
        regPhone = response;
        resolve (regPhone);
        return regPhone;
      });
    }));
  }
  findRegisteredPhone()
    .then((regPhone) => {
      res.status('200').send(regPhone);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});
/* Enregistrement d'un téléphone dans la BDD */
app.post('/espace-parents/infos/add-phone', (req, res) => {
  const newPhone = new Phone(req.body);
  function findRegisteredPhone() {
    return new Promise(((resolve, reject) => {
      Phone.find((err, response) => {
        regPhone = response;
        resolve (regPhone);
        return regPhone;
      });
    }));
  }
  newPhone.save()
    .then((item) => {
      findRegisteredPhone()
        .then((regPhone) => {
          res.status('200').send(regPhone);
        })
        .catch((err) => {
          console.log('Caught an error!', err);
        });
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });

  // Chargement de la nouvelle liste de téléphones
});

app.post('/espace-parents/infos/remove-phones', (req, res) => {
  const deletedPhone = req.body;
  Phone.deleteOne({ id: Object.keys(deletedPhone) }, function(err) {});
  res.send();
});

/** --------------------------Ajout d'une tache--------------------------*/

// var addTaskFromParents = new mongoose.Schema({
//     name: String,
//     hour: String,
//     indic: String,
//     tododone:String,
//     //selctedInput: String,
//     note: String,
//     id: String,
//    });

// const add_task = mongoose.model('add_task', addTaskFromParents);

/**
 * Chargement de la liste des taches
 */
app.get('/espace-parents/journee-type', (req, res) => {
  function findTasks() {
    return new Promise(((resolve, reject) => {
      add_task.find((err, response) => {
        tasks = response;
        resolve (tasks);
        return tasks;
      });
    }));
  }
  findTasks()
    .then((tasks) => {
      res.status('200').send(tasks);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});

/**
 * Enregistrement d'une nouvelle tache'
 */
app.post('/espace-parents/add-task', (req, res) => {
  const newTask = new add_task(req.body);
  function findTasks() {
    return new Promise(((resolve, reject) => {
      add_task.find((err, response) => {
        tasks = response;
        resolve (tasks);
        return tasks;
      });
    }));
  }
  newTask.save()
    .then((item) => {
      findTasks()
        .then((tasks) => {
          res.status('200').send(tasks);
        })
        .catch((err) => {
          console.log('Caught an error!', err);
        });
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

/** --------------------------Ajout d'une note pour la journée-------------------------- */
// const addNoteFromParents = new mongoose.Schema({
//   note: String,
// });
// const add_note = mongoose.model('add_note', addNoteFromParents);

app.get('/espace-parents/parents-note', (req, res) => {
  function findParentsNote() {
    return new Promise(((resolve, reject) => {
      add_note.find((err, response) => {
        parentsNote = response;
        resolve (parentsNote);
        return parentsNote;
      });
    }));
  }
  findParentsNote()
    .then((parentsNote) => {
      res.status('200').send(parentsNote[0].note);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});

app.get('/espace-parents/parents-note', (req, res) => {
  function findParentsNote() {
    return new Promise(((resolve, reject) => {
      add_note.find((err, response) => {
        parentsNote = response;
        resolve (parentsNote);
        return parentsNote;
      });
    }));
  }
  findParentsNote()
    .then((parentsNote) => {
      res.status('200').send(parentsNote[0].note);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});

app.post('/espace-parents/add-note-day-parents', (req, res) => {
  const newNote = new add_note(req.body);
  add_note.deleteMany({}, function (err) {} );
  newNote.save()
    .then((item) => {
      console.log('la note a été sauvegardée');
      res.send(newNote.note);
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});

/** --------------------------Ajout d'une note de la nanny pour la journée-------------------------- */
// const addNoteFromNanny = new mongoose.Schema({
//   nannyNote: String,
// });
// const add_note_nanny = mongoose.model('add_note_nanny', addNoteFromNanny);

app.get('/myday/nanny-day-note', (req, res) => {
  function findNannyDayNote() {
    return new Promise(((resolve, reject) => {
      add_note_nanny.find((err, response) => {
        nannyDayNote = response;
        resolve (nannyDayNote);
        return nannyDayNote;
      });
    }));
  }
  findNannyDayNote()
    .then((nannyDayNote) => {
      res.status('200').send(nannyDayNote[0].nannyNote);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});

app.get('/myday/nanny-day-note', (req, res) => {
  function findNannyDayNote() {
    return new Promise(((resolve, reject) => {
      add_note_nanny.find((err, response) => {
        nannyDayNote = response;
        resolve (nannyDayNote);
        return nannyDayNote;
      });
    }));
  }
  findNannyDayNote()
    .then((nannyDayNote) => {
      res.status('200').send(nannyDayNote[0].nannyNote);
    })
    .catch((err) => {
      console.log('Caught an error!', err);
    });
});

app.post('/myday/nannydaytask', (req, res) => {
  const newNoteNanny = new add_note_nanny(req.body);
  add_note_nanny.deleteMany({}, function (err) {} );
  newNoteNanny.save()
    .then((item) => {
      console.log('la note de la nanny pour la journée a été sauvegardée');
      res.send(newNoteNanny.nannyNote);
    })
    .catch((err) => {
      res.status(400).send('Unable to save to database');
    });
});
/** --------------------------Supression d'une tâche-------------------------- */
app.post('/espace-parents/remove-task', (req, res) => {
  var DeletdTask = req.body;
  console.log('je suis dans le serveur je souhaite etre supprime');
  console.log(DeletdTask);
  add_task.deleteOne({ id: Object.keys(DeletdTask) }, function (err) {});
  res.send();
});

/** --------------------------Ajout d'une note dans une tache-------------------------- */

app.post('/add-task-nanny', (req, res) => {
  var selectedTask = req.body.id;
  function findTask(selectedTask) {
    return new Promise((resolve, reject) => {
      add_task.find({ id: selectedTask }, (err, response) => {
        foundTask = response;
        console.log(foundTask);
        resolve (foundTask);
        return foundTask;
      });
    });
  }
  findTask(selectedTask)
  .then((foundTask) => {
    console.log('problème : ', foundTask[0]);
    foundTask[0].note = req.body.text;
    add_task.update({ id: selectedTask }, { $set: { note: foundTask[0].note }}, { overwrite: true }, function (err, res) {});
  })
  .catch((err) => {
    console.log(err);
  });
});

/** --------------------------checker une tache-------------------------- */
app.post('/task-done', (req, res) => {
  var CheckedTask = req.body.id;
  console.log('Task checkee',CheckedTask);
  
  res.send();
});

/**
* gestion contacts espace parents
*/

// const registeredContacts = new mongoose.Schema({
//   id: String,
//   email: String,
//   name: String,
// });

// const registered_contacts = mongoose.model("registered_contacts", registeredContacts);

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
console.log(datas);
  // datas.findOneAndUpdate({email: "me@me.com", }, {$set:{"baby":  {identity: newChild}}}, function (err, res) {});
  datas.updateOne({email: "me@me.com"}, {"baby": {"contacts": newContact}}, function (err, res) {});
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

app.post("/espace-parents/contacts/remove-contact", (req, res) => {
  var DeletdContact = req.body;
  console.log('coucou je veux être supprimé à tout jamais');
  console.log(DeletdContact);
  console.log(registered_contacts(req)); 



  registered_contacts.deleteOne({ id: Object.keys(DeletdContact) }, function (err) {});
  res.send();
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
