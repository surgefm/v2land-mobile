import { AsyncStorage } from 'react-native';

class StorageInstance {
  constructor(name) {
    this.name = name;
  }

  save(value) {
    return AsyncStorage.setItem(this.name, value).then(() => value);
  }

  read() {
    return AsyncStorage.getItem(this.name);
  }

  clear() {
    return AsyncStorage.removeItem(this.name);
  }
}

const token = new StorageInstance('token');
const searchHistory = new StorageInstance('searchHistory');

export default {
  token,
  searchHistory,
};
