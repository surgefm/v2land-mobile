import createAction from './createAction';

export const search = createAction('search');
export const addSearchHistory = createAction('add search history');
export const removeSearchHistory = createAction('remove search history');
export const cleanAllSearchHistory = createAction('cleanAllSearchHistory');
