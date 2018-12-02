import createAction from './createAction.js';

export const login = createAction('login');

export const initializeTokenFromStorage = createAction('initialize token from storage');

export const invalidateToken = createAction('invalidate token');

export const saveToken = createAction('save token');
