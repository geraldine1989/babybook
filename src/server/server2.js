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
  const emailExist = regEmails.filter(email => newUser.email === email);
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
 * login Parents
 */
var regEmails = [];
app.post("/loginParents", (req, res) => {
  var user = new registered_emails(req.body);
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
    console.log(response);
    const emailExist = regEmails.filter(email => user.email === email);
    
  })
  .catch(function(err) {
    console.log('Caught an error!', err);
  });
})

/**
 * Listen PORT 3000
 */
app.listen(port, () => {
    console.log("Server listening on port " + port);
});

"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(){

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let account = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'spionit@gmail.com', // generated ethereal user
      pass: 'ttrchecpoihufqcs' // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Babybook" <spionit@gmail.com>', // sender address
    to: "spionit@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Merci pour votre inscription à Babybook", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  // send mail with defined transport object
  const info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendEmail().catch(console.error);