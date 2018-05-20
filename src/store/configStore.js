import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const configStore = () => {
  return createStore(reducers, /* applyMiddleware() */);
};

export default configStore;
