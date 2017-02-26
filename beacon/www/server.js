'use strict';

let http = require('http');
let express = require('express');
var firebase = require("firebase");


let app = express();
let server = http.createServer(app);




app.use(express.static(__dirname + '/'));

server.listen(8080,() => console.log('Ready to work!'));





var config = {

  apiKey: "AIzaSyArow7n3EfYo_aIMSmY5-_Otkubc2PNVLE",

    authDomain: "beacon-440ca.firebaseapp.com",

    databaseURL: "https://beacon-440ca.firebaseio.com",

    storageBucket: "beacon-440ca.appspot.com",

    messagingSenderId: "1029498543033"

};



firebase.initializeApp(config);



// Get a database reference to our posts

var db = firebase.database();

var ref = db.ref("providers");



// Attach an asynchronous callback to read the data at our posts reference

ref.on("value", function(snapshot) {

  //console.log(snapshot);

console.log(snapshot.val()["-KdqwvMIKRw1ZnpaMC5b"]);

  return;

}, function (errorObject) {

  console.log("The read failed: " + errorObject.code);

});
