import React from 'react';
import { Button } from 'react-native-elements';
import { commonStyle, buttonStyle, loginStyle } from '../../styles';

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
    title="微博"
    type="clear"
  />
);

export default WeiboButton;
