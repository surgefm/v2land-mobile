import React from 'react';
import { SafeAreaView, View, ScrollView, StatusBar } from 'react-native';
import { Avatar, ListItem, Icon, Text } from 'react-native-elements';
import { paddings, profileStyle, colors } from '../styles';
import { AlertContext } from '../context/Alert';

const userActionList = [
  {
    title: '帐号管理',
    icon: {
      name: 'settings',
      type: 'feather',
    },
  },
  {
    title: '事件关注',
    icon: {
      name: 'newspaper-o',
      type: 'font-awesome',
    },
  },
  {
    title: '推送设置',
    icon: {
      name: 'bell',
      type: 'feather',
    },
  },
];

const informationList = [
  {
    title: '关于',
    icon: {
      name: 'md-information-circle-outline',
      type: 'ionicon',
    },
  },
  {
    title: '意见反馈',
    icon: {
      name: 'mail',
      type: 'feather',
    },
  },
];

const Profile = ({ username = '', role = '', logout = () => {} }) => (
  <AlertContext.Consumer>
    {alert => (
      <SafeAreaView style={{ backgroundColor: colors.lightGrey, flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={profileStyle.pageTop}>
          <View style={[paddings.side, profileStyle.avatarContainer]}>
            <Avatar
              large
              rounded
              source={require('../static/defaultAvatar.png')}
              onPress={() => this.context('info', 'Avatar pressed', 'No magic happened.')}
              activeOpacity={0.7}
            />
            <View style={profileStyle.usernameContainer}>
              <Text style={profileStyle.username}>
                {username || '黑衣人'}{'  '}
                <Text style={profileStyle.role}>{role}</Text>
              </Text>
              <Text numberOfLines={1}>
                大家好，我叫小朋友。我的兴趣爱好十分广泛，我喜欢读书，写作，跳舞，吹牛。
              </Text>
            </View>
          </View>

          <View>
            {userActionList.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                leftIcon={<Icon {...item.icon} size={24} iconStyle={profileStyle.icon} />}
              />
            ))}
          </View>

          <View>
            {informationList.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                leftIcon={<Icon {...item.icon} size={24} iconStyle={profileStyle.icon} />}
              />
            ))}
          </View>

          <View>
            <ListItem
              title='退出登录'
              hideChevron={true}
              titleStyle={{ textAlign: 'center', color: 'red' }}
              onPress={logout}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )}
  </AlertContext.Consumer>
);

export default Profile;
