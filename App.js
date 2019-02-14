import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'ramda';
import configStore from './src/store/configStore';

import { Font, AppLoading, Linking } from 'expo';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import routers from './src/config/routers';
import { Icon } from 'react-native-elements';
import { AlertProvider } from './src/context';
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
import ThirdPartyAuthorization from './src/containers/Login/ThirdPartyAuthorization';

import NotificationService from './src/services/notification';
import { PushNotificationIOS } from 'react-native';

const store = configStore();

const EventsStack = createStackNavigator(
  {
    [routers.eventList]: Events,
    [routers.event]: {
      screen: Article,
      path: 'event/:eventId',
    },
    [routers.news]: {
      screen: News,
      path: 'event/:eventId/:stackId/:newsId',
    },
  },
  {
    headerMode: 'screen',
  },
);

const SearchStack = createStackNavigator(
  {
    [routers.searchIndex]: {
      screen: Search,
      path: 'search',
    },
  },
  {
    initialRouteName: routers.searchIndex,
  },
);

const ProfileStack = createStackNavigator({
  [routers.me]: {
    screen: Profile,
    path: 'me',
  },
  [routers.login]: {
    screen: Login,
    path: 'login',
  },
  [routers.registration]: {
    screen: Registration,
    path: 'registration',
  },
  [routers.thirdPartyAuthoirzation]: {
    screen: ThirdPartyAuthorization,
    path: 'third-party-authorization',
  },
});

const tabBarIcons = {
  [routers.today]: { name: 'home', type: 'antdesign' },
  [routers.search]: { name: 'search1', type: 'antdesign' },
  [routers.profile]: { name: 'user', type: 'antdesign' },
};

const Navigator = createBottomTabNavigator(
  {
    [routers.today]: {
      screen: EventsStack,
      path: 'events',
    },
    [routers.search]: {
      screen: SearchStack,
      path: 'search',
    },
    [routers.profile]: {
      screen: ProfileStack,
      path: 'profile',
    },
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
            ? <Icon {...focusedIcon} color={tintColor} />
            : <Icon {...idleIcon} color={tintColor} />;
        } else {
          return <Icon {...iconConfig} color={tintColor} />;
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
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
    this.notification = new NotificationService(this.onRegister.bind(this), this.onNotification.bind(this));
  }

  async loadFont() {
    return Font.loadAsync({
      'source-han-serif-semibold': require('./src/static/fonts/SourceHanSerifCN-SemiBold.ttf'),
      'source-han-sans': require('./src/static/fonts/SourceHanSansCN-Regular.ttf'),
      'source-han-sans-medium': require('./src/static/fonts/SourceHanSansCN-Medium.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadFont}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store}>
        <AlertProvider
          infoColor={colors.theme}
          closeInterval={3000}
          updateStatusBar={false}
        >
          <NavigatorContainer uriPrefix={Linking.makeUrl('/')} />
        </AlertProvider>
      </Provider>
    );
  }

  onRegister(result) {
    console.log(result);
  }

  onNotification(notification) {
    // console.log(123);
    // const { data } = notification;
    // const { type } = data;
    // if (type === 'event') {
    //   Linking.openURL('v2land://events/event/' + data.eventId);
    // }
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  }
}
