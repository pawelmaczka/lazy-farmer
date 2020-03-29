/* eslint-disable import/prefer-default-export */
const addPublicUrl = (path) =>
  process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL + path : path;

export const LANDING = addPublicUrl('/');
export const LOGIN = addPublicUrl('/login');
export const LOGOUT = addPublicUrl('/logout');
export const GAME = addPublicUrl('/game');
