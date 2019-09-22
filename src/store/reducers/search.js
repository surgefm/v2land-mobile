import {combineReducers, reduceReducers} from 'redux-loop';

import requestData from 'store/transducers/requestData';
import requestState from 'store/transducers/requestState';
import fallback from 'store/transducers/fallback';

import {
  search as searchAction,
  addSearchHistory as addSearchHistoryAction,
  removeSearchHistory as removeSearchHistoryAction,
  cleanAllSearchHistory as cleanAllSearchHistoryAction,
} from 'store/actions/search';
import {search as searchService} from 'services/search';

import {storage, id} from 'util';

import OK from 'store/actions/OK';
import ERR from 'store/actions/ERR';

const onSearchHandler = requestData(
  searchAction.type,
  searchService,
  (state, res) => ({...state, ...res}),
  id,
);

const onAddSearchHistoryHandler = requestData(
  addSearchHistoryAction.type,
  async (state, keyword) => {
    const history = await storage.searchHistory.read();
    const newHistory = [keyword];
    for (const k of history) {
      if (k !== keyword) {
        newHistory.push(k);
      }
    }
    return storage.searchHistory.save(newHistory);
  },
  () => true,
  () => true,
);

const onRemoveSearchHistoryHandler = requestData(
  removeSearchHistoryAction.type,
  async (state, keyword) => {
    const history = await storage.searchHistory.read();
    const index = history.indexOf(keyword);
    if (index < 0) return history;
    const newHistory = [...history.slice(index), ...history.slice(index + 1)];
    return storage.searchHistory.save(newHistory);
  },
  () => true,
  () => true,
);

const cleanAllSearchHistoryHandler = requestData(
  cleanAllSearchHistoryAction.type,
  storage.searchHistory.clear,
  () => true,
  () => true,
);

export const newsReducers = combineReducers({
  data: reduceReducers(
    onSearchHandler,
    onAddSearchHistoryHandler,
    onRemoveSearchHistoryHandler,
    cleanAllSearchHistoryHandler,
    fallback(null),
  ),

  state: (state, action) =>
    requestState(action.type, ERR(action.type), OK(action.type))(state, action),
});

export default newsReducers;
