import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';
import WebBrowser from 'react-native-inappbrowser-reborn';
import { commonStyle, buttonStyle, loginStyle } from '../../styles';
import { getThirdPartyAuthUrl, getThirdPartyAuthRedirectUrl } from '../../util';

const jumpToTwitter = async (redirect) => {
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
    titleStyle={{ color: '#00acee' }}
    icon={{
      name: 'twitter',
      type: 'entypo',
      color: '#00acee',
    }}
    onPress={jumpToTwitter}
    title="Twitter"
    type="clear"
  />
);

export default WeiboButton;
