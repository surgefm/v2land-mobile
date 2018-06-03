import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Events from './containers/Events';
import Article from './components/Article';
import Profile from './components/Profile';
import { Icon } from 'react-native-elements';

const store = configStore();

const EventsStack = createStackNavigator({
  Events,
  Article,
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    }
  }
});

const tabBarIcons = {
  Events: 'library-books',
  Profile: 'account-box',
};
const Navigator = createBottomTabNavigator(
  {
    Events: EventsStack,
    Profile: ProfileStack,
  },
  {
    initialRouteName: 'Events',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName = tabBarIcons[routeName];
        return <Icon name={iconName} color={tintColor} type="Ionicons"/>
      }
    })
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
