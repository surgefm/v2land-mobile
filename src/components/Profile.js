import React from 'react';
import { SafeAreaView, View, ScrollView, StatusBar } from 'react-native';
import { WebBrowser } from 'expo';
import { ListItem, Text } from 'react-native-elements';
import { profileStyle, colors } from '../styles';
import { AlertContext } from '../context/Alert';
import config from '../config/const';

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
    onPress() {
      WebBrowser.openBrowserAsync(`${config.site}about`);
    },
  },
  // {
  //   title: '意见反馈',
  //   icon: {
  //     name: 'mail',
  //     type: 'feather',
  //   },
  // },
];

const Profile = ({ username = '', role = '', logout }) => (
  <AlertContext.Consumer>
    {alert => (
      <SafeAreaView style={{ backgroundColor: colors.lightGrey, flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={profileStyle.section}>
          <ListItem
            leftAvatar={{
              title: username,
              source: require('../static/defaultAvatar.png'),
              showEditButton: true,
              size: 'large',
              onPress: () => alert('info', '听说你想改头像', '先将就着看吧'),
            }}
            title={
              <Text style={profileStyle.username}>
                {username || '黑衣人'}{'  '}
                <Text style={profileStyle.role}>{role}</Text>
              </Text>
            }
            subtitle={
              <Text style={profileStyle.description} numberOfLines={2}>
                大家好，我叫小朋友。我的兴趣爱好十分广泛，我喜欢读书，写作，跳舞，吹牛。
              </Text>
            }
            topDivider={true}
            bottomDivider={true}
          />

          {/* <View style={profileStyle.section}>
            {userActionList.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                topDivider={true}
                bottomDivider={true}
                leftIcon={{ ...item.icon, iconStyle: profileStyle.icon }}
                chevron
              />
            ))}
          </View> */}

          <View style={profileStyle.section}>
            {informationList.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                topDivider={true}
                bottomDivider={true}
                onPress={item.onPress || (() => {})}
                leftIcon={{ ...item.icon, iconStyle: profileStyle.icon }}
                chevron
              />
            ))}
          </View>

          <View style={profileStyle.section}>
            <ListItem
              title='退出登录'
              topDivider={true}
              bottomDivider={true}
              titleStyle={{ textAlign: 'center', color: 'red' }}
              onPress={() => logout() && alert('info', '登出成功', '你已成功退出登录')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    )}
  </AlertContext.Consumer>
);

export default Profile;
