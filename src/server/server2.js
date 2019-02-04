var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
//connect-mongo
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

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

/**
 * var
 */
var registeredEmails = new mongoose.Schema({
  email: String,
  password: String,
  accessCode: String,
  parent: Boolean,
});
var registered_emails = mongoose.model("registered_emails", registeredEmails);
/**
 * les routes
 */
/**
 * Récupération de la liste des emails enregistrés
 */
var regEmails = [];
app.get("/getEmails", (req, res) => {
  function findEmails() {
    return new Promise(function(resolve, reject) {
      registered_emails.find(function (err, response) {
        regEmails = response;
        resolve (regEmails);
        return regEmails;
      })
    })
  }
  findEmails()
  .then(function(regEmails) {
    // regEmails = response;
    regEmails = regEmails.map(email => email.email);
    console.log('regEmails : ', regEmails);
    res.status('200').send();
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
  console.log('regEmails : ', regEmails);
  console.log('newUserEmail : ' + newUser.email);
  const emailExist = regEmails.filter(email => newUser.email === email);
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
  var user = new registered_emails(req.body);
  console.log('user : ',user);
  function findEmails() {
    return new Promise(function(resolve, reject) {
      const returnedUser = registered_emails.find({'email': user.email});
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
    res.status(400).send('Login impossible', err);
  });
})


/**
 * Listen PORT 3000
 */
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

