import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import Events from './containers/Events';
import Search from './containers/Search';
import Article from './containers/Article';
import Profile from './containers/Profile';
import Login from './containers/Login';
import { Icon } from 'react-native-elements';
import routers from './config/routers';

const store = configStore();

const EventsStack = createStackNavigator({
  [routers.eventList]: Events,
  [routers.event]: Article,
});

const SearchStack = createStackNavigator(
  {
    [routers.searchIndex]: Search,
  },
  {
    initialRouteName: routers.searchIndex,
  },
);

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  [routers.login]: Login,
});

const tabBarIcons = {
  [routers.today]: { name: 'today', type: 'Ionicons' },
  [routers.search]: { name: 'search', type: 'Ionicons' },
  [routers.profile]: { name: 'account-box', type: 'Ionicons' },
};

const Navigator = createBottomTabNavigator(
  {
    [routers.today]: EventsStack,
    [routers.search]: SearchStack,
    [routers.profile]: ProfileStack,
  },
  {
    initialRouteName: routers.today,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        const iconConfig = tabBarIcons[routeName];
        if (!iconConfig.name && iconConfig.focused) {
          const focusedIcon = iconConfig.focused;
          const idleIcon = iconConfig.idle;
          return focused
            ? <Icon name={focusedIcon.name} color={tintColor} type={focusedIcon.name} />
            : <Icon name={idleIcon.name} color={tintColor} type={idleIcon.type} />;
        } else {
          return <Icon name={iconConfig.name} color={tintColor} type={iconConfig.type} />;
        }
      },
    }),
    tabBarOptions: {
      style: {
        // FIXME: adding a shadow arround the top of the tab bar
        // elevation: 24,
      },
    },
  },
);

const NavigatorContainer = createAppContainer(Navigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorContainer />
      </Provider>
    );
  }
}
