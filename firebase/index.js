// var admin = require("firebase-admin");

// var serviceAccount = require("../config/fbServiceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://ecommerceapp-c9819-default-rtdb.firebaseio.com",
// });



var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerceapp-c9819-default-rtdb.firebaseio.com"
});


module.exports = admin;