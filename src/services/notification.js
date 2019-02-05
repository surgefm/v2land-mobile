import AV from 'leancloud-storage';
import AVInstallation from 'leancloud-installation';
import config from '../config/const';

import PushNotification from 'react-native-push-notification';
import { PushNotificationIOS } from 'react-native';

export function initializeNotification() {
  PushNotification.configure({
    onRegister: async (token) => {
      AV.initialize(config.AV.appId, config.AV.appKey);
      const Installation = AVInstallation(AV);

      const info = {
        apnsTopic: 'org.langchao.mobile',
        deviceType: token.os,
        deviceToken: token.token,
      };
      const installation = await Installation.getCurrent();
      const result = await installation.save(info);
    },

    onNotification: function(notification) {
      console.log('Notification', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,

    requestPermissions: true,
  });
}
