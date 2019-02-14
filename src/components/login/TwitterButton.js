import React from 'react';
import { Button } from 'react-native-elements';
import { commonStyle, buttonStyle, loginStyle } from '../../styles';
import { WebBrowser, Linking } from 'expo';
import { getThirdPartyAuthUrl } from '../../util';

const jumpToTwitter = async (redirect) => {
  const result = await WebBrowser.openAuthSessionAsync(getThirdPartyAuthUrl('twitter', redirect));
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
