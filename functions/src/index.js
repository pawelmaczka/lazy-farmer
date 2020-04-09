// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.ondata((request, response) => {
//   response.send('Hello from Firebase!');
// });

const admin = require('firebase-admin');

admin.initializeApp();

export * from './triggered/auth/user';

export * from './callable';
