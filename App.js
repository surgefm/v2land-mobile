import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'ramda';
import configStore from './src/store/configStore';

import { Font } from 'expo';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import routers from './src/config/routers';
import { Icon } from 'react-native-elements';
import { InAppNotificationProvider } from 'react-native-in-app-notification';
import { colors } from './src/styles';
import { storage } from './src/util';

import { connect, prepare } from './src/enhancers';

import { initializeTokenFromStorage } from './src/store/actions/auth';

import Events from './src/containers/Events';
import News from './src/containers/News';
import Search from './src/containers/Search';
import { Article } from './src/containers/Article';
import Profile from './src/containers/Profile';
import Login from './src/containers/Login';
import Registration from './src/containers/Registration';

import { initializeNotification } from './src/services/notification';

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
  [routers.registration]: Registration,
});

const tabBarIcons = {
  [routers.today]: { name: 'home', type: 'antdesign' },
  [routers.search]: { name: 'search1', type: 'antdesign' },
  [routers.profile]: { name: 'user', type: 'antdesign' },
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
              {...focusedIcon}
              color={tintColor}
            />
          ) : (
            <Icon
              {...idleIcon}
              color={tintColor}
            />
          );
        } else {
          return (
            <Icon
              {...iconConfig}
              color={tintColor}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.theme,
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
      'source-han-serif-semibold': require('./src/static/fonts/SourceHanSerifCN-SemiBold.ttf'),
      'source-han-sans': require('./src/static/fonts/SourceHanSansCN-Regular.ttf'),
      'source-han-sans-medium': require('./src/static/fonts/SourceHanSansCN-Medium.ttf'),
    });
    initializeNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <InAppNotificationProvider backgroundColor={'#fff'}>
          <NavigatorContainer />
        </InAppNotificationProvider>
      </Provider>
    );
  }
}
