import AV from 'leancloud-storage';
import AVInstallation from 'leancloud-installation';
import config from '../config/const';

import PushNotification from 'react-native-push-notification';

export default class NotificationService {
  constructor(onRegister, onNotification) {
    this.configure(onRegister, onNotification);
  }

  configure(onRegister, onNotification) {
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
        onRegister(result);
      },

      onNotification(notif) {
        console.log(!!notif);
        // onNotification(notif);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,

      requestPermissions: false,
    });
  }
}
