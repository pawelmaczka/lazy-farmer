import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const plant = functions.https.onCall(async ({ fieldId, type }, context) => {
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
    plantedAtTimestamp: Date.now(),
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

export default plant;
