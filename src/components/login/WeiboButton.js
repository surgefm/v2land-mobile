import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';
import WebBrowser from 'react-native-inappbrowser-reborn';
import { commonStyle, buttonStyle, loginStyle } from '../../styles';
import { getThirdPartyAuthUrl, getThirdPartyAuthRedirectUrl } from '../../util';

const jumpToWeibo = async (redirect) => {
  const result = await WebBrowser.openAuth(
    getThirdPartyAuthUrl('twitter', redirect),
    getThirdPartyAuthRedirectUrl(redirect),
  );
  if (result.type === 'success') {
    Linking.openURL(result.url);
  }
};

const WeiboButton = () => (
  <Button
    containerStyle={commonStyle.noSideMargins}
    buttonStyle={[buttonStyle.button, loginStyle.socialButton]}
    titleStyle={{ color: 'rgb(230, 22, 45)' }}
    icon={{
      name: 'weibo',
      type: 'antdesign',
      color: 'rgb(230, 22, 45)',
    }}
    onPress={jumpToWeibo}
    title="微博"
    type="clear"
  />
);

export default WeiboButton;
