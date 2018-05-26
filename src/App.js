import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { createBottomTabNavigator } from 'react-navigation';
import News from './components/News';
import Profile from './components/Profile';

const store = configStore();

const Navigator = createBottomTabNavigator(
  {
    News,
    Profile,
  },
  {
    initialRouteName: 'News'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
