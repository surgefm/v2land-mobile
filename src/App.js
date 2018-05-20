import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { TabNavigator } from 'react-navigation';
import News from './components/News';
import Profile from './components/Profile';

const store = configStore();

const Navigator = TabNavigator(
  {
    News: { screen: News },
    Profile: { screen: Profile },
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
