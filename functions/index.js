// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send('Hello from Firebase!');
// });

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const getDefaultFarm = require('./getDefaultFarm');

admin.initializeApp();

exports.createNewFarm = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection('farms')
    .doc(user.uid)
    .set(getDefaultFarm());
});

exports.deleteFarm = functions.auth.user().onDelete((user) => {
  return admin.firestore().collection('farms').doc(user.uid).delete();
});
