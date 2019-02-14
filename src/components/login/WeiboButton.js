import React from 'react';
import { Button } from 'react-native-elements';
import { commonStyle, buttonStyle, loginStyle } from '../../styles';
import { WebBrowser, Linking } from 'expo';
import { getThirdPartyAuthUrl } from '../../util';

const jumpToWeibo = async (redirect) => {
  const result = await WebBrowser.openAuthSessionAsync(getThirdPartyAuthUrl('weibo', redirect));
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
