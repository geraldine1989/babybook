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
// app.get("/getEmails", (req, res) => {
  //   var query = registered_emails.find();
  //   var promise = query.exec();
  //   promise.addBack(function (err, res) {
    //     res.send(res);
    //   })
    // })
var regEmails = [];
app.get("/getEmails", (req, res) => {
  function findEmails() {
    return new Promise(function(resolve, reject) {

      registered_emails.find(function (err, response) {
        regEmails = response;
        // regEmails.push(response);
        // console.log(response);
        resolve (response);
        return response;
        // res.send(regEmails);
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
  // console.log(regEmails);
})

/**
 * inscription
 */
console.log(regEmails);

app.post("/inscription", (req, res) => {
  var newUser = new registered_emails(req.body);
  // console.log(newUser);
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
 * Listen PORT 3000
 */
app.listen(port, () => {
    console.log("Server listening on port " + port);
});