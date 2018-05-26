import Expo from 'expo';
import App from './src/App';

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate()
}

Expo.registerRootComponent(App);
