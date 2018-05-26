import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { createBottomTabNavigator } from 'react-navigation';
import Events from './components/Events';
import Profile from './components/Profile';

const store = configStore();

const Navigator = createBottomTabNavigator(
  {
    Events,
    Profile,
  },
  {
    initialRouteName: 'Events'
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
