import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Events from './containers/Events';
import Article from './components/Article';
import Profile from './components/Profile';

const store = configStore();

const EventsStack = createStackNavigator({
  Events,
  Article,
});

const ProfileStack = createStackNavigator({
  Profile
})

const Navigator = createBottomTabNavigator(
  {
    Events: EventsStack,
    Profile: ProfileStack,
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
