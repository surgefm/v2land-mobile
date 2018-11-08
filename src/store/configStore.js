import { createStore } from 'redux';
import { install } from 'redux-loop';
import reducers from './reducers';

const configStore = () => {
  return createStore(
    reducers, // reducers
    install() // enhancers
  );
};

export default configStore;
