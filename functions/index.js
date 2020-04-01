// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.ondata((request, response) => {
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

exports.plant = functions.https.onCall(async ({ fieldId, type }, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Only authorized users can change their avatars'
    );
  }

  if (!fieldId) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'fieldId is required'
    );
  }
  if (!type) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'type is required'
    );
  }

  const updatedField = {
    id: fieldId,
    type,
    productionStartTimestamp: Date.now(),
  };

  const db = admin.firestore();
  const batch = db.batch();

  const farmRef = db.collection('farms').doc(context.auth.uid);
  const farmData = await farmRef.get().then((doc) => doc.data());

  const oldFieldValue = farmData.fields.find((field) => field.id === fieldId);
  const resources = farmData.resources[type];

  if (resources < 1) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'to little resources'
    );
  }

  if (!oldFieldValue) {
    throw new functions.https.HttpsError(
      'not-found',
      `There is no field with given id: ${fieldId}`
    );
  }

  batch.update(farmRef, {
    fields: admin.firestore.FieldValue.arrayRemove(oldFieldValue),
  });

  batch.update(farmRef, {
    fields: admin.firestore.FieldValue.arrayUnion(updatedField),
    [`resources.${type}`]: resources - 1,
  });

  await batch.commit();

  return 'ok';
});
