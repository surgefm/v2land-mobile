import React from 'react';
import { Button } from 'react-native-elements';
import { commonStyle, buttonStyle, loginStyle } from '../../styles';

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
    title="Twitter"
    type="clear"
  />
);

export default WeiboButton;
