import { AsyncStorage } from 'react-native';

const token = {
  name: 'token',

  save(value) {
    return AsyncStorage.setItem(token.name, value).then(() => value);
  },

  read() {
    return AsyncStorage.getItem(token.name);
  },

  clear() {
    return AsyncStorage.removeItem(token.name);
  },
};

export default {
  token,
};
