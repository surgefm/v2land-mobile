import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Events from './containers/Events';
import Article from './components/Article';
import Profile from './components/Profile';
import Search from './components/Search';
import { Icon } from 'react-native-elements';
import routers from './config/routers';

const store = configStore();

const EventsStack = createStackNavigator({
  Events,
  Article,
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
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
  [routers.today]: 'library-books',
  // Profile: 'account-box',
  [routers.search]: 'search',
};
const Navigator = createBottomTabNavigator(
  {
    [routers.today]: EventsStack,
    [routers.search]: Search,
    // Profile: ProfileStack,
  },
  {
    initialRouteName: routers.today,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const iconName = tabBarIcons[routeName];
        return <Icon name={iconName} color={tintColor} type="Ionicons"/>
      }
    }),
    tabBarOptions: {
      style: {
        // FIXME: adding a shadow arround the top of the tab bar
        elevation: 24,
      },
    },
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
