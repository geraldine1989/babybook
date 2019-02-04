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

/**
* var
*/
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
console.log(regEmails);

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


/** Ajout d'une tache */
var addTaskFromParents = new mongoose.Schema({
    name: String,
    hour: String,
    indic: String,
    tododone:String,
   });
   var add_task = mongoose.model("add_task", addTaskFromParents);

    /** a finir sauvegarde dans la base */
    app.post("/espace-parents/add-task", (req, res) => {
      var newTask = new add_task(req.body);
      newTask.save()
          .then(item => {
            res.send("Task saved to database");
          })
          .catch(err => {
            res.status(400).send("Unable to save to database");
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

/**
* Listen PORT 3000
*/
app.listen(port, () => {
   console.log("Server listening on port " + port);
});