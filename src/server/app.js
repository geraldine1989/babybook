
// **********************
// Création Collection OK
// ********************** vv

// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/babybook", function(error, db) {
//     if (error) return funcCallback(error);

//     var database = db.db('babybook');
//     database.createCollection('test', function(err, db) {
//       if (err) throw err;
//       console.log('collection créée.');

//     });
//     console.log("Connecté à la base de données 'babybook'");
// });
// ********************** ^^

// **************************
// Récupération Collection OK
// ************************** vv

// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/babybook", function (error, db) {
//   if (error) throw error;

//   var database = db.db('babybook');

//   database.collection("parents").find().toArray(function (error, results) {
//     if (error) throw error;
//     console.log(results);

//   });
// });
// *************************** ^^

// *****
// TESTS
// ***** vv

// requete
// const getList = () => {
//   const MongoClient = require('mongodb').MongoClient;
//   MongoClient.connect("mongodb://localhost:27017/babybook", function (error, db) {
//     if (error) throw error;
    
//     var database = db.db('babybook');
    
//     database.collection("parents").find({firstName: 'Toto'}).toArray(function (error, results) {
//       if (error) throw error;
      
//       return list;
//     });
//   });
// };
// const list = getList();
// console.log(list);

/* Format des données en base :
{ _id: 5c40c870edb6bc09d8e4da1c,
  firstName: 'Toto',
  lastName: 'Dupont',
  age: '12',
  email: 'toto@me.com' }
*/

// server
var http = require('http');
var server = http.createServer(function(req, res) {

  



  const getList = () => {
    const MongoClient = require('mongodb').MongoClient;
    console.log('connection BASE');
    MongoClient.connect("mongodb://localhost:27017/babybook", function (error, db) {
      if (error) throw error;
      
      var database = db.db('babybook');
      console.log('REQUETE');
      database.collection("parents").find({firstName: 'Toto'}).toArray(function (error, results) {
        if (error) throw error;
        json = JSON.stringify(results);
        console.log('json');
        return json;
      });
    });
  };

  async function list() {
    const theList = await getList();
    return theList;
  };
  const maList = list();

res.writeHead(200);

res.end(maList);
});
server.listen(8080);

