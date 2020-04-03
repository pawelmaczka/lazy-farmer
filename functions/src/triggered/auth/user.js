import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { defaultFarm } from '~/constants/defaultValues';

export const createNewFarm = functions.auth.user().onCreate((user) => {
  return admin.firestore().collection('farms').doc(user.uid).set(defaultFarm);
});

export const deleteFarm = functions.auth.user().onDelete((user) => {
  return admin.firestore().collection('farms').doc(user.uid).delete();
});
