import createAction from './createAction';

export const login = createAction('login');

export const initializeTokenFromStorage = createAction(
  'initialize token from storage',
);

export const invalidateToken = createAction('invalidate token');

export const saveToken = createAction('save token');

export const getUserInfo = createAction('get user infomation');
