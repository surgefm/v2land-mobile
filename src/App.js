import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import routers from './config/routers';

import DropdownAlert from 'react-native-dropdownalert';
import { Icon } from 'react-native-elements';

import Events from './containers/Events';
import News from './containers/News';
import Search from './containers/Search';
import Article from './containers/Article';
import Profile from './containers/Profile';
import Login from './containers/Login';

import { colors } from './styles';

const store = configStore();

const EventsStack = createStackNavigator({
  [routers.eventList]: Events,
  [routers.event]: Article,
  [routers.news]: News,
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
    navigationOptions: ({ navigation }) => ({
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

export class DropDownHolder {
  static dropDown;

  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }

  static getDropDown() {
    return this.dropDown;
  }

  static alert(type, title, message) {
    this.dropDown.alertWithType(type, title, message);
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <Navigator />
        </Provider>
        <DropdownAlert
          ref={ref => DropDownHolder.setDropDown(ref)}
          infoColor={colors.blue}
          closeInterval={3000}
        />
      </View>
    );
  }
}
