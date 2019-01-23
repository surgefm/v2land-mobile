import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'ramda';
import configStore from './store/configStore';

import { Font } from 'expo';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import routers from './config/routers';
import { Icon } from 'react-native-elements';
import { AlertProvider } from './context';
import { colors } from './styles';
import { storage } from './util';

import { connect, prepare } from './enhancers';

import { initializeTokenFromStorage } from './store/actions/auth';

import Events from './containers/Events';
import News from './containers/News';
import Search from './containers/Search';
import Article from './containers/Article';
import Profile from './containers/Profile';
import Login from './containers/Login';

const store = configStore();

const EventsStack = createStackNavigator(
  {
    [routers.eventList]: Events,
    [routers.event]: Article,
    [routers.news]: News,
  },
  {
    headerMode: 'screen',
  },
);

const SearchStack = createStackNavigator(
  {
    [routers.searchIndex]: Search,
  },
  {
    initialRouteName: routers.searchIndex,
  },
);

const ProfileStack = createStackNavigator({
  [routers.me]: {
    screen: Profile,
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
          return focused ? (
            <Icon
              name={focusedIcon.name}
              color={tintColor}
              type={focusedIcon.name}
            />
          ) : (
            <Icon name={idleIcon.name} color={tintColor} type={idleIcon.type} />
          );
        } else {
          return (
            <Icon
              name={iconConfig.name}
              color={tintColor}
              type={iconConfig.type}
            />
          );
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

const NavigatorContainer = compose(
  connect(null, { initializeTokenFromStorage }),
  prepare(({ initializeTokenFromStorage }) =>
    storage.token.read().then(token => {
      token && initializeTokenFromStorage(token);
    }),
  ),
  createAppContainer,
)(Navigator);

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'source-han-serif-semibold': require('./static/fonts/SourceHanSerifCN-SemiBold.ttf'),
      'source-han-sans': require('./static/fonts/SourceHanSansCN-Regular.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider infoColor={colors.theme} closeInterval={3000}>
          <NavigatorContainer />
        </AlertProvider>
      </Provider>
    );
  }
}
